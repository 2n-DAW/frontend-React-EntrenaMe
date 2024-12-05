import { useEffect, useState } from "react";
import { ISportsFormProps } from "../../shared/interfaces/hooksInterfaces/SportsForm.interface";
import { ISport } from "../../shared/interfaces/entities/Sport.interface";




const SportsForm = ({ sport_data, save }: ISportsFormProps) => {

    const [form_data, set_form_data] = useState<Partial<ISport>>({
        n_sport: '',
        img_sport: ''
    });

    useEffect(() => {
        if (sport_data) set_form_data(sport_data);
    },
        [sport_data]);

    const onSubmit = (e: any) => {
        e.preventDefault();
        save(form_data);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        set_form_data((old_data) => {
            return {...old_data,[name]: value,}
        });
    };

    const { n_sport, img_sport } = form_data;


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>
                    Nombre
                    <input
                        type="text"
                        name="n_sport"
                        value={n_sport}
                        onChange={onChange}
                        required
                    />
                </label>
            </div>
            <div>
            <label>
                    Imagen
                    <input
                        type="text"
                        name="img_sport"
                        value={img_sport}
                        onChange={onChange}
                        required
                    />
                </label>
            </div>
            <button type="submit">{sport_data ? 'Modificar' : 'Crear'}</button>
        </form>
    );

}

export default SportsForm;
