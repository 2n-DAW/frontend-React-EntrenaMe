import { useState } from "react";
import Select from "../selects/Select";

interface IFiltersCourtHourProps {
    onMonthSelected: (value: number) => void;
}

const FiltersCourtHour = ({ onMonthSelected }: IFiltersCourtHourProps) => {

    const options: {value:number, label:string}[]= [
        { value: 0, label: 'Enero' },
        { value: 1, label: 'Febrero' },
        { value: 2, label: 'Marzo' },
        { value: 3, label: 'Abril' },
        { value: 4, label: 'Mayo' },
        { value: 5, label: 'Junio' },
        { value: 6, label: 'Julio' },
        { value: 7, label: 'Agosto' },
        { value: 8, label: 'Septiembre' },
        { value: 9, label: 'Octubre' },
        { value: 10, label: 'Noviembre' },
        { value: 11, label: 'Diciembre' }
    ];

    const [selectedValue, setSelectedValue] = useState<number | null>(null);

    const onChange = (value: number | string) => {
        value = parseInt(value as string);
        console.log(value);
        setSelectedValue(value);
        onMonthSelected(value);
    };

    return (
        <Select
            label="Selecciona un mes"
            id="Meses"
            options={options}
            data={selectedValue ?? ""}
            placeholder="Selecciona un mes"
            onDataChange={onChange}
        />
    );
};

export default FiltersCourtHour;
