import { useEffect, useState} from 'react';
import { ISport } from '../shared/interfaces/entities/Sport.interface';
import { ISportsFormProps } from '../shared/interfaces/hooksInterfaces/SportsForm.interface';

export function useSportsForm({sport_data, save}: ISportsFormProps) {
    
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
    
    return{
        form_data,
        onSubmit,
        onChange
    }
    
}
