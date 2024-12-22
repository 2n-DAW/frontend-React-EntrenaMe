import { useEffect, useState } from "react";
import Select from "../selects/Select";
import { IFiltersCourtHourProps } from "../../shared/interfaces/InterfacesComponents/filters/FiltersCourtHour.interface";
import { useCourt } from "../../hooks/useCourt";



const FiltersCourtHour = ({ onMonthSelected, onCourtSelected }: IFiltersCourtHourProps) => {
    
    const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
    const [selectedCourt, setSelectedCourt] = useState<number | null>(null);

    
    

    const options_month: { value: number, label: string }[] = [
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


    const { courts } = useCourt();

    const [options_court, setOptionsCourt] = useState<{ value: number, label: string }[]>([]);

    useEffect(() => {
        console.log(courts);
        const resp: { value: number, label: string }[] = courts.map((court) => {
            return { value: court.id_court, label: court.n_court };
        });
        
        setOptionsCourt(resp);

    }, [courts]);



    const onChangeMonth = (value: number | string) => {
        value = parseInt(value as string);
        console.log(value);
        setSelectedMonth(value);
        onMonthSelected(value);
    };
    
    const onChangeCourt = (value: number | string) => {
        value = parseInt(value as string);
        console.log(value);
        setSelectedCourt(value);
        onCourtSelected(value);
    };

    return (
        <>
            <Select
                label="Selecciona un mes"
                id="Meses"
                options={options_month}
                data={selectedMonth ?? ""}
                placeholder="Selecciona un mes"
                onDataChange={onChangeMonth}
            />

            <Select
                label="Selecciona una Pista"
                id="Pistas"
                options={options_court}
                data={selectedCourt ?? ""}
                placeholder="Selecciona una Pista"
                onDataChange={onChangeCourt}
            />


        </>
    );
};

export default FiltersCourtHour;
