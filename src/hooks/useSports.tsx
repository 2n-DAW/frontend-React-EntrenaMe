import {useContext, useCallback, useEffect, useState} from 'react';
import SportsContext from "../context/SportsContext";

export function useSports() {
    const context = useContext(SportsContext);

    if (!context) {
        // Maneja la posibilidad de undefined en SportContext
        // Definido en la creación de SportsContext con React.createContext<SportContextType | undefined>(undefined)
        throw new Error('useSports debe ser usado dentro de un SportsContextProvider');
    }

    const { sports, setSports } = context;

    return { sports, setSports };
}