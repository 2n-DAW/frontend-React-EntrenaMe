import {useContext, useCallback, useState} from 'react';
import SportService from '../services/SportService';
import SportsContext from "../contexts/SportsContext";
import { ApiResponse, Sport, SportContextType } from '../shared/interfaces';
// import { toast } from 'react-toastify';

export function useSports() {
    const context = useContext<SportContextType | undefined>(SportsContext);

    if (!context) {
        // Maneja la posibilidad de undefined en SportContext
        // Definido en la creación de SportsContext con React.createContext<SportContextType | undefined>(undefined)
        throw new Error('useSports debe ser usado dentro de un SportsContextProvider');
    }

    const { sports, setSports } = context;
    const [ oneSport, setOneSport ] = useState<Sport>({} as Sport);
    const [ isCorrect, setIsCorrect ] = useState<boolean>(false);

    const useOneSport = useCallback((slug: string) => {
        SportService.getOneSport(slug)
            .then(({data}: ApiResponse<Sport>) => {
                setOneSport(data);
            })
            .catch((error: unknown) => console.error(error));
    }, [setOneSport]);

    const useAddSport = useCallback((data: Sport): void => {
        SportService.createSport(data)
            .then(({ data, status }: ApiResponse<Sport>) => {
                if (status === 201) {
                    // toast.success('Deporte añadido correctamente');
                    setSports([...sports, data]);
                    setIsCorrect(true);
                    setTimeout(() => { setIsCorrect(false); }, 1000);
                }
            })
            .catch((error: unknown) => {
                console.error(error);
                // toast.error('Error al añadir un nuevo deporte');
            });
    }, [setSports, setIsCorrect]);

    const useUpdateSport = useCallback((slug: string, data: Sport): void => {
        SportService.updateSport(data)
            .then(({ data, status }: ApiResponse<Sport>) => {
                if (status === 200) {
                    let old_sports = [...sports];
                    const index = old_sports.findIndex(item => item.slug_sport === slug);
                    if (index !== -1) {
                        old_sports[index] = data;
                        setSports(old_sports);
                    }
                    // toast.success('Sport actualizado correctamente');
                    setIsCorrect(true);
                    setTimeout(() => { setIsCorrect(false); }, 1000);
                }
            })
            .catch((error: unknown) => {
                console.error(error);
                // toast.error('Error al actualizar el deporte');
            });
    }, [setSports, setIsCorrect]);

    const useDeleteSport = (id: number): void => {
        SportService.deleteSport(id)
            .then(({ data, status }: ApiResponse<Sport>) => {
                if (status === 200) {
                    // toast.success(`Se ha eliminado ${data.n_sport} correctamente`);
                    setSports(sports.filter(sport => sport.id_sport !== id));
                }
            })
            .catch((error: unknown) => console.error(error));
    }

    return { isCorrect, sports, setSports, oneSport, setOneSport, useOneSport, useAddSport, useUpdateSport, useDeleteSport };
}
