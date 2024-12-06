import { useForm } from "react-hook-form";
import { ISportsFormProps } from "../../shared/interfaces/hooksInterfaces/SportsForm.interface";
import { ISport } from "../../shared/interfaces/entities/Sport.interface";

const SportsForm = ({ sport_data }: ISportsFormProps) => {
    
    const {register,handleSubmit,formState: { errors }} = useForm<Partial<ISport>>({defaultValues: sport_data || {
            n_sport: '',
            img_sport: ''
        }
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>
                    Nombre
                    <input
                        style={{ color: 'black' }}
                        type="text"
                        {...register("n_sport", {required: "El nombre es un campo obligatorio"})}
                    />
                </label>
                {errors.n_sport && (
                    <span style={{ color: 'red' }}>{errors.n_sport.message}</span>
                )}
            </div>
            <div>
                <label>
                    Imagen
                    <input
                        style={{ color: 'black' }}
                        type="text"
                        {...register("img_sport", {
                            required: "La imagen es un campo obligatorio"
                        })}
                    />
                </label>
                {errors.img_sport && (
                    <span style={{ color: 'red' }}>{errors.img_sport.message}</span>
                )}
            </div>
            <button type="submit">
                {sport_data ? 'Modificar' : 'Crear'}
            </button>
        </form>
    );
}

export default SportsForm;
