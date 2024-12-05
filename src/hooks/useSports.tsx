import {useContext} from 'react';
import { SportsContext } from '../contexts/SportsContext';

export function useSports() {
    const context = useContext(SportsContext);

    if (!context) {
        throw new Error('useSports debe ser usado dentro de un SportsContextProvider');
    }

    return context;
}
