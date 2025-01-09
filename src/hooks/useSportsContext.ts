import {useCallback, useContext} from 'react';
import { SportsContext } from '../contexts/SportsContext';
import { SportService } from '../services/sport.service';
import { ISport } from '../shared/interfaces/entities/Sport.interface';

export const useSportsContext = () => {
    const context = useContext(SportsContext);
    

    if (!context) {
        throw new Error('useSports debe ser usado dentro de un SportsContextProvider');
    }
    const {setSports} = context;
    

    const createSport = useCallback(async (sport_data: Partial<ISport>) => {
        const sport = await SportService.createSport(sport_data);
        if (!sport) return;
        setSports((prev_sports) => [...prev_sports, sport]);
    }, [setSports]);
    

    const updateSport = useCallback(async (sport_data: Partial<ISport>) => {
        const sport_updated = await SportService.updateSport(sport_data);
        if (!sport_updated) return;
        setSports((prev_sports) =>
            prev_sports.map((sport) => (sport.id_sport === sport_data.id_sport ? sport_updated : sport))
        );
    }, [setSports]);
    

    const deleteSport = useCallback(async (sport_id: number) => {
        const sport = await SportService.deleteSport(sport_id);
        if (!sport) return;
        setSports((prev_sports) => prev_sports.filter((sport) => sport.id_sport !== sport_id));
    }, [setSports]);
    
    
    return {...context, createSport, updateSport, deleteSport};
}
