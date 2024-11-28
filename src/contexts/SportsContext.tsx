import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Sport } from '../shared/interfaces/Sport.interface';

interface SportsContextProps {
    sports: Sport[];
    setSports: React.Dispatch<React.SetStateAction<Sport[]>>;
}

const SportsContext = createContext<SportsContextProps | undefined>(undefined);

export const SportsProvider = ({ children }: { children: ReactNode }) => {
    const [sports, setSports] = useState<Sport[]>([]);

    useEffect(() => {
        // const fetchSports = async () => {
        //     const response = await fetch('/api/sports');
        //     const data = await response.json();
        //     setSports(data);
        // };

        // fetchSports();
        
        
        
        
    }, []);

    return (
        <SportsContext.Provider value={{ sports, setSports }}>
            {children}
        </SportsContext.Provider>
    );
};

export const useSports = () => {
    const context = useContext(SportsContext);
    if (!context) {
        throw new Error('No se puede usar el contexto fuera de su proveedor');
    }
    return context;
};