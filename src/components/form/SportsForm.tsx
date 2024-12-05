
import { ISportsFormProps } from "../../shared/interfaces/hooksInterfaces/SportsForm.interface";
import { useSportsForm } from "../../hooks/useSportsForm";



const SportsForm = ({ sport_data }: ISportsFormProps) => {
    
    const { form_data, onSubmit, onChange } = useSportsForm({ sport_data });
    
    const { n_sport, img_sport } = form_data;

    return (
        <form onSubmit={onSubmit} >
            <div >
                <label>
                    Nombre
                    <input
                    style={{ color: 'black' }}
                        type="text"
                        name="n_sport"
                        value={n_sport}
                        onChange={onChange}
                        
                    />
                </label>
            </div>
            <div>
                <label>
                    Imagen
                    <input
                    style={{ color: 'black' }}
                        type="text"
                        name="img_sport"
                        value={img_sport}
                        onChange={onChange}
                        
                    />
                </label>
            </div>
            <button type="submit">{sport_data ? 'Modificar' : 'Crear'}</button>
        </form>
    );

}

export default SportsForm;
