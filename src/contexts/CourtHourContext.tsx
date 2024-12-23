import { createContext, ReactNode, useEffect, useState } from "react";
import { ICourtHourContextProps } from "../shared/interfaces/InterfacesContext/CourtHourContext.interface";
import { ICourtHour, ICourtsHours } from "../shared/interfaces/entities/CourtHourt.interface";
import { CourtHourService } from "../services/courtHour.service";

export const CourtHourContext = createContext<ICourtHourContextProps | undefined>(undefined);

export const CourtHourProvider = ({ children }: { children: ReactNode }) => {

    const [courts_hours, setCourtHours] = useState<ICourtHour[]>();


    const fetchCourtHour = async () => {
        const resp: ICourtsHours = await CourtHourService.getAllCourtsHours();
        console.log(resp);
        if (!resp) return;
        setCourtHours(resp.courts_hours);
    };

    useEffect(() => {
        fetchCourtHour();
    }, []);

    return (
        <CourtHourContext.Provider value={{ courts_hours, setCourtHours }}>
            {children}
        </CourtHourContext.Provider>
    );
};
