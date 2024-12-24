import { createContext, ReactNode, useEffect, useState } from "react";
import { ICourtContextProps } from "../shared/interfaces/InterfacesContext/CourtContext.interface";
import { ICourt, ICourts } from "../shared/interfaces/entities/Court.interface";
import { CourtService } from "../services/court.service";

export const CourtContext = createContext<ICourtContextProps | undefined>(undefined);

export const CourtProvider = ({ children }: { children: ReactNode }) => {

    const [courts, setCourts] = useState<ICourt[]>([]);
    
    
    const fetchCourt = async () => {
        const resp:ICourts = await CourtService.getAllCourts();
        if (!resp) return;
        setCourts(resp.courts);
    };
    
    useEffect(() => {
        fetchCourt();
    }, []);
    
    return (
        <CourtContext.Provider value={{ courts, setCourts}}>
            {children}
        </CourtContext.Provider>
    );
};
