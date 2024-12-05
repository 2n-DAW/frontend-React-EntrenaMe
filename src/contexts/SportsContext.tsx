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

    const createSport = async (sport_data: ISport) => {
        const sport = await SportService.createSport(sport_data);
        console.log("Create sport resp",sport);
        if (!sport) return;
        setSports(prev_sports => [...prev_sports, sport]);
    };

    // const updateSport = async (updatedSport: ISport) => {
    //     const resp = await SportService.update(updatedSport);
    //     if (!resp) return;

    //     setSports((prevSports) =>
    //         prevSports.map((sport) => (sport.id === updatedSport.id ? resp.sport : sport))
    //     );
    // };

    return (
        <SportsContext.Provider value={{ sports, setSports, createSport}}>
            {children}
        </SportsContext.Provider>
    );
};
