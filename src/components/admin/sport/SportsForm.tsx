import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Sport } from '../../../interfaces';

const SportsForm = ({ sport= { id_sport: 0, n_sport: '', img_sport: '', slug_sport:'' }, form_type, sendData }: { sport?: Sport, form_type: string, sendData: (data: Sport) => void }) => {
    const navigate = useNavigate();

    const validators = Yup.object().shape({
        n_sport: Yup.string()
            .required('*El nombre del deporte es obligatorio')
            .min(3, '*El nombre debe tener al menos 3 caracteres')
            .max(15, '*El nombre no puede exceder los 15 caracteres'),
        img_sport: Yup.string()
            .required('*La imagen del deporte es obligatoria'),
    }); 

    // Configuración de react-hook-form con Yup
    // register: Vincula los campos del formulario con react-hook-form.
    // handleSubmit: Se usa para manejar el envío del formulario, ejecutando las validaciones definidas.
    // setValue: Permite establecer valores en campos del formulario de forma programática.
    // formState.errors: Contiene los errores generados por las validaciones del esquema Yup.
    const {register, handleSubmit, setValue, formState: {errors} } = useForm({resolver: yupResolver(validators)});
    
    // Precarga de datos en el formulario para el update
    useEffect(() => {
        if (sport.slug_sport !== '') {
            setValue('n_sport', sport.n_sport);
            setValue('img_sport', sport.img_sport);
        }
    }, [sport]);

    const send_data = (data: Sport) => {
        sport.id_sport !== 0 ? sendData({id_sport: sport.id_sport, ...data}) : sendData(data);
    };

    const redirects = {
        sports: () => navigate('/dashboard/sports')
    };

    const button_type = form_type == 'create' ? 'Añadir' : 'Actualizar';

    return (
        <form className='flex flex-col space-y-4 w-full max-w-lg' onSubmit={handleSubmit(send_data)}>
            <div className='flex flex-col'>
                <label htmlFor="n_sport" className='text-sm font-bold uppercase mb-2'>Nombre:</label>
                <input type="text" id="n_sport" {...register('n_sport')} className="border border-gray-300 p-2 rounded"/>
                <span className="text-red-500 text-xs italic mt-1">{errors.n_sport?.message}</span>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="img_sport" className='text-sm font-bold uppercase mb-2'>Imagen:</label>
                <input type="text" id="img_sport" {...register('img_sport')} className="border border-gray-300 p-2 rounded"/>
                <span className="text-red-500 text-xs italic mt-1">{errors.img_sport?.message}</span>
            </div>

            <div className='flex justify-start space-x-4 mt-4'>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                    {button_type}
                </button>

                <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded"
                    onClick={() => redirects.sports()}>
                    Cancelar
                </button>
            </div>
        </form>
    )
}

export default SportsForm;
