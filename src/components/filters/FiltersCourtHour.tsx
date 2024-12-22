import { useEffect, useState } from "react";
import Select from "../selects/Select";
import { IFiltersCourtHourProps } from "../../shared/interfaces/InterfacesComponents/filters/FiltersCourtHour.interface";
import { CourtService } from "../../services/court.service";
import { ICourt } from "../../shared/interfaces/entities/Court.interface";


const FiltersCourtHour = ({ onMonthSelected }: IFiltersCourtHourProps) => {

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

    const [courts, setCourts] = useState<ICourt[]>([]);


    const gerCourts = async () => {
        const resp = await CourtService.getAllCourts()
        console.log(resp);
        setCourts(resp);
    }

    useEffect(() => {
        gerCourts();
    }, []);




    const [selectedValue, setSelectedValue] = useState<number | null>(null);

    const onChange = (value: number | string) => {
        value = parseInt(value as string);
        console.log(value);
        setSelectedValue(value);
        onMonthSelected(value);
    };

    return (
        <>
            <Select
                label="Selecciona un mes"
                id="Meses"
                options={options_month}
                data={selectedValue ?? ""}
                placeholder="Selecciona un mes"
                onDataChange={onChange}
            />

            
        </>
    );
};

export default FiltersCourtHour;
