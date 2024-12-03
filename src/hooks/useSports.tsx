import {useContext, useCallback, useState} from 'react';
import SportService from '../services/SportService';
import SportsContext from "../context/SportsContext";
// import { Sport } from '../interfaces';
import { toast } from 'react-toastify';

export function useSports() {
    const context = useContext(SportsContext);

    if (!context) {
        // Maneja la posibilidad de undefined en SportContext
        // Definido en la creación de SportsContext con React.createContext<SportContextType | undefined>(undefined)
        throw new Error('useSports debe ser usado dentro de un SportsContextProvider');
    }

    const { sports, setSports } = context;

    const useDeleteSport = (id: number) => {
        SportService.deleteSport(id)
            .then(({ data, status }) => {
                if (status === 200) {
                    toast.success(data);
                    setSports(sports.filter(sport => sport.id_sport !== id));
                }
            })
            .catch(e => console.error(e));
    }

    return { sports, setSports, useDeleteSport };
}