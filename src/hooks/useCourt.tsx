import { useContext } from "react";
import { CourtContext } from "../contexts/CourtContext";


export const useCourt= () => {
    const context = useContext(CourtContext);
    if (!context) {
        throw new Error('useCourt debe ser usado dentro de un CourtContextProvider');
    }
    return context;
}