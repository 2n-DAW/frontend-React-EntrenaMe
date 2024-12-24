import { useCallback, useContext } from "react";
import { CourtHourContext } from "../contexts/CourtHourContext";
import { CourtHourService } from "../services/courtHour.service";
import { ICourtHourCreate } from "../shared/interfaces/InterfacesServices/courtHourService.interface";


export const useCourtHour = () => {
    const context = useContext(CourtHourContext);
    if (!context) {
        throw new Error('useCourtHour debe ser usado dentro de un CourtHourContextProvider');
    }
    
    const { courts_hours, setCourtHours } = context;

    const createCourtHour = useCallback(async (court_data: ICourtHourCreate) => {
        const court = await CourtHourService.createCourtHour(court_data);
        if (!court) return;
        console.log("courts_hours",courts_hours);
        setCourtHours([...courts_hours || [], court]);
    }, [setCourtHours, courts_hours]);
    
    
    
    const deleteCourtHour = useCallback(async (id_court_hour: number) => {
        const resp = await CourtHourService.deleteCourtHour(id_court_hour);
        setCourtHours(courts_hours?.filter((court_hour) => court_hour.id_court_hour !== resp.id_court_hour));
    }
    , [setCourtHours, courts_hours]);


    return {...context, createCourtHour, deleteCourtHour};
}