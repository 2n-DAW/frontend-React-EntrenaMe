import { useContext } from "react";
import { SportsContext } from "../contexts/SportsContext";

export const useSports = () => {
    const context = useContext(SportsContext);
    if (!context) {
        throw new Error('No se puede usar el contexto fuera de su proveedor');
    }
    
    return context;
};