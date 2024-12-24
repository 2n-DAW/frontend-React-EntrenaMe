import { useEffect, useState } from "react";
import Select from "../selects/Select";
import { IFiltersCourtHourProps } from "../../shared/interfaces/InterfacesComponents/filters/FiltersCourtHour.interface";
import { useCourt } from "../../hooks/useCourt";
import { useCourtHour } from "../../hooks/useCourtHour";



const FiltersCourtHour = ({ onMonthSelected, onCourtSelected, onYearSelected }: IFiltersCourtHourProps) => {
    
    const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
    const [selectedCourt, setSelectedCourt] = useState<number | null>(null);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);

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
    const {years} = useCourtHour();

    const [options_court, setOptionsCourt] = useState<{ value: number, label: string }[]>([]);
    const [options_year, setOptionsYear] = useState<{ value: number, label: string }[]>([]);

    useEffect(() => {
        const resp: { value: number, label: string }[] = courts.map((court) => {
            return { value: court.id_court, label: court.n_court };
        });
        
        setOptionsCourt(resp);

    }, [courts]);
    
    useEffect(() => {
        if (!years) return;
    
        const years_unique = Array.from(new Set(years.map((year) => year || 2024)));
    
        const resp: { value: number; label: string }[] = years_unique.map((year) => ({
            value: year,
            label: year.toString(),
        }));
    
        setOptionsYear(resp);
    }, [years]);
    



    const onChangeMonth = (value: number | string) => {
        value = parseInt(value as string);
        setSelectedMonth(value);
        onMonthSelected(value);
    };
    
    const onChangeCourt = (value: number | string) => {
        value = parseInt(value as string);
        setSelectedCourt(value);
        onCourtSelected(value);
    };
    
    const onChangeYear = (value: number | string) => {
        value = parseInt(value as string);
        setSelectedYear(value);
        onYearSelected(value);
    }

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
            
            <Select
                label="Selecciona un año"
                id="Años"
                options={options_year}
                data={selectedYear ?? ""}
                placeholder="Selecciona un año"
                onDataChange={onChangeYear}

            />
            
            

        </>
    );
};

export default FiltersCourtHour;
