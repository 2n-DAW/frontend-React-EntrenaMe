import { createContext, useState, useEffect, ReactNode } from 'react';
import { ISport} from '../shared/interfaces/entities/Sport.interface';
import { SportService } from '../services/sport.service';
import { ISportsContextProps } from '../shared/interfaces/InterfacesContext/SportContext.interface';



export const SportsContext = createContext<ISportsContextProps | undefined>(undefined);



export const SportsProvider = ({ children }: { children: ReactNode }) => {

    const [sports, setSports] = useState<ISport[]>([]);
    const [sport_selected, setSportSelected] = useState<ISport | undefined>(undefined);
    
    const fetchSports = async () => {
        const resp = await SportService.getAll();
        if (!resp) return;
        setSports(resp.sports);
    };

    useEffect(() => {
        fetchSports();
    }, []);

    
    return (
        <SportsContext.Provider value={{ sports, setSports, sport_selected, setSportSelected }}>
            {children}
        </SportsContext.Provider>
    );
};
