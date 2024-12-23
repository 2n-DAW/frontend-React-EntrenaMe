import { useContext } from "react";
import { CourtHourContext } from "../contexts/CourtHourContext";


export const useCourtHour= () => {
    const context = useContext(CourtHourContext);
    if (!context) {
        throw new Error('useCourtHour debe ser usado dentro de un CourtHourContextProvider');
    }
    return context;
}