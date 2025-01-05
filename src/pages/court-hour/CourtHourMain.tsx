import { useEffect, useState } from 'react';
import CalendarCourtHour from "../../components/calendars/CalendarCourtHour";
import FiltersCourtHour from "../../components/filters/FiltersCourtHour";
import { useCourtHour } from '../../hooks/useCourtHour';
import { ICourtHour } from '../../shared/interfaces/entities/CourtHourt.interface';
import { ICourtHourCreate } from '../../shared/interfaces/InterfacesServices/courtHourService.interface';

const CourtHourMain = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    const [court, setCourt] = useState<number | null>(null);
    const [year, setYear] = useState(new Date().getFullYear());
    const [changes, setChanges] = useState<Partial<ICourtHour>[]>([]);
    const [isSyncing, setIsSyncing] = useState(false); // Estado para controlar la sincronización.

    const { courts_hours, createCourtHourArray, deleteCourtHourArray } = useCourtHour();
    const [data, setData] = useState<ICourtHour[]>([]);

    const onMonthSelected = (month_selected: number) => setMonth(month_selected);
    const onCourtSelected = (court_selected: number) => setCourt(court_selected);
    const onYearSelected = (year_selected: number) => setYear(year_selected);
    const onChange = (court_hour: Partial<ICourtHour>[]) => setChanges(court_hour);

    const onSaveClick = async () => {
        setIsSyncing(true); // Indica que la sincronización ha comenzado.
        let court_hour_add: ICourtHourCreate[] = [];
        let court_hour_delete: ICourtHour[] = [];

        changes.forEach((court_hour) => {
            const searched_court_hour = data.find((court_hour_data) => {
                return (
                    court_hour_data.year === court_hour.year &&
                    court_hour_data.id_hour === court_hour.id_hour &&
                    court_hour_data.day_number === court_hour.day_number &&
                    court_hour_data.id_court === (court ?? 1)
                );
            });

            if (!searched_court_hour) {
                court_hour_add.push({
                    id_court: court || 1,
                    id_hour: court_hour.id_hour!,
                    id_month: court_hour.id_month!,
                    day_number: court_hour.day_number!,
                    year: year,
                });
            }
        });

        data.forEach((court_hour) => {
            const searched_court_hour = changes.find((court_hour_data) => {
                return (
                    court_hour_data.year === court_hour.year &&
                    court_hour_data.id_hour === court_hour.id_hour &&
                    court_hour_data.day_number === court_hour.day_number &&
                    (court || 1) === court_hour.id_court &&
                    court_hour_data.id_month === court_hour.id_month
                );
            });
            if (!searched_court_hour) {
                court_hour_delete.push(court_hour);
            }
        });

        if (changes.length === 0) {
            court_hour_delete = data;
        }

        console.log('court_hour_add', court_hour_add);
        console.log('court_hour_delete', court_hour_delete);

        if (court_hour_delete.length > 0) await deleteCourtHourArray(court_hour_delete);
        if (court_hour_add.length > 0) await createCourtHourArray(court_hour_add);

        setIsSyncing(false); // Sincronización completada.
    };

    useEffect(() => {
        if (isSyncing || !courts_hours) return; // No recalcular mientras se está sincronizando.
        const filteredData = courts_hours.filter((court_hour) => {
            return (
                court_hour.id_month === month &&
                court_hour.year === year &&
                (court ? court_hour.id_court === court : true)
            );
        });

        // Evitar actualizaciones innecesarias si los datos no cambian.
        if (JSON.stringify(filteredData) !== JSON.stringify(data)) {
            setData(filteredData);
        }
    }, [courts_hours, month, year, court, isSyncing]);

    useEffect(() => {
        console.log('data', data);
    }, [data]);

    return (
        <>
            <div className="flex justify-center">
                <div className="w-4/5 p-2">
                    <FiltersCourtHour
                        onMonthSelected={onMonthSelected}
                        onCourtSelected={onCourtSelected}
                        onYearSelected={onYearSelected}
                    />
                </div>
                <div className="w-1/5 p-4 flex justify-center items-end">
                    <button
                        className="w-full p-2 rounded bg-button1 hover:bg-button1_hover text-button1_text transition duration-200"
                        onClick={onSaveClick}
                    >
                        Guardar cambios
                    </button>
                </div>
            </div>
            <CalendarCourtHour
                month={month}
                year={year}
                data={data}
                changes={onChange}
            />
        </>
    );
};

export default CourtHourMain;
