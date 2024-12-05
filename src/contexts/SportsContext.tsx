import { createContext, useState, useEffect, ReactNode } from 'react';
import { Sport, SportsContextProps } from '../shared/interfaces/entities/Sport.interface';
import { SportService } from '../services/sport.service';


export const SportsContext = createContext<SportsContextProps | undefined>(undefined);

export const SportsProvider = ({ children }: { children: ReactNode }) => {
    const [sports, setSports] = useState<Sport[]>([]);

    useEffect(() => {
        const fetchSports = async () => {
            const resp = await SportService.getAll();
            if (!resp) return;
            setSports(resp.sports);
        };
    
        fetchSports();
    }, [setSports]);

    return (
        <SportsContext.Provider value={{ sports, setSports }}>
            {children}
        </SportsContext.Provider>
    );
};

