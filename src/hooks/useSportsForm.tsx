import { useEffect, useState} from 'react';
import { ISport } from '../shared/interfaces/entities/Sport.interface';
import { ISportsFormProps } from '../shared/interfaces/hooksInterfaces/SportsForm.interface';
import { useSportsContext } from './useSportsContext';

export function useSportsForm({sport_data}: ISportsFormProps) {
    
    const is_create = !sport_data;
    const {createSport} = useSportsContext();
    
    const [form_data, set_form_data] = useState<Partial<ISport>>({
        n_sport: '',
        img_sport: ''
    });

    useEffect(() => {
        if (sport_data) set_form_data(sport_data);
    },
        [sport_data]);

    const onSubmit = (e: any) => {
        console.log("dfjklfjkdfjkldfjklkjlkljdfkjdkj")
        e.preventDefault();
        console.log(form_data)
        if(!form_data) return;
        console.log(is_create);
        is_create? createSport(form_data) : null;
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        set_form_data((old_data) => {
            return {...old_data,[name]: value,}
        });
        console.log('yeeeeeeee')
    };
    
    return{
        form_data,
        onSubmit,
        onChange
    }
    
}
