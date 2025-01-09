import { useContext } from "react";
import { AdminContext } from "../contexts/AdminContext";


export const useAdmin= () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useCourt debe ser usado dentro de un AdminContextProvider');
    }
    const { admin, setAdmin } = context;
    
    return { admin, setAdmin };
}