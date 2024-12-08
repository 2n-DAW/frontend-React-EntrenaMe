import { createContext, useState, useEffect, ReactNode } from 'react';
import { ISport, ISportsContextProps } from '../shared/interfaces/entities/Sport.interface';
import { SportService } from '../services/sport.service';



export const SportsContext = createContext<ISportsContextProps | undefined>(undefined);



export const SportsProvider = ({ children }: { children: ReactNode }) => {

    const [sports, setSports] = useState<ISport[]>([]);

    useEffect(() => {
        const fetchSports = async () => {
            const resp = await SportService.getAll();
            if (!resp) return;
            setSports(resp.sports);
        };

        fetchSports();
    }, []);

    const createSport = async (sport_data: Partial<ISport>) => {
        const sport = await SportService.createSport(sport_data);
        if (!sport) return;
        setSports(prev_sports => [...prev_sports, sport]);
    };

    const updateSport = async (sport_data: Partial<ISport>) => {
        const sport_updated = await SportService.updateSport(sport_data);
        if (!sport_updated) return;

        setSports((prev_sports) =>
            prev_sports.map((sport) => (sport.id_sport === sport_data.id_sport ? sport_updated : sport))
        );
    };

    const deleteSport = async (sport_id: number) => {
        const sport = await SportService.deleteSport(sport_id);
        if (!sport) return;
        setSports((prev_sports) => prev_sports.filter((sport) => sport.id_sport !== sport_id));
    }


    return (
        <SportsContext.Provider value={{ sports, setSports, createSport, updateSport, deleteSport }}>
            {children}
        </SportsContext.Provider>
    );
};
