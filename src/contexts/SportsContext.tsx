import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Sport } from '../shared/interfaces/Sport.interface';
import { SportService } from '../services/sport.service';

interface SportsContextProps {
    sports: Sport[];
    setSports: React.Dispatch<React.SetStateAction<Sport[]>>;
}

const SportsContext = createContext<SportsContextProps | undefined>(undefined);

export const SportsProvider = ({ children }: { children: ReactNode }) => {
    const [sports, setSports] = useState<Sport[]>([]);

    useEffect(() => {
        const fetchSports = async () => {
            const resp = await SportService.getAll();
            if (!resp) return;
            setSports(resp.sports);
        };
    
        fetchSports();
    }, []);

    return (
        <SportsContext.Provider value={{ sports, setSports }}>
            {children}
        </SportsContext.Provider>
    );
};

export const useSports = () => {
    const context= useContext(SportsContext);
    if (!context) {
        throw new Error('No se puede usar el contexto fuera de su proveedor');
    }
    return context;
};