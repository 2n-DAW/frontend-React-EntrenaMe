import {useContext} from 'react';
import { SportsContext } from '../contexts/SportsContext';

export const useSportsContext = () => {
    const context = useContext(SportsContext);

    if (!context) {
        throw new Error('useSports debe ser usado dentro de un SportsContextProvider');
    }
    
    const { sports, setSports, createSport} = context;

    return { sports, setSports, createSport};
}
