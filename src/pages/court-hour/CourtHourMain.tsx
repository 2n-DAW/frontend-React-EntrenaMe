import { useEffect, useState } from 'react';
import CalendarCourtHour from "../../components/calendars/CalendarCourtHour";
import FiltersCourtHour from "../../components/filters/FiltersCourtHour";
import { useCourtHour } from '../../hooks/useCourtHour';
import { ICourtHour } from '../../shared/interfaces/entities/CourtHourt.interface';
import { ICourtHourCreate } from '../../shared/interfaces/InterfacesServices/courtHourService.interface';
// import { useCourtHour } from '../../hooks/useCourtHour';

const CourtHourMain = () => {
    const [month, setMonth] = useState(new Date().getMonth());

    const [court, setCourt] = useState<number | null>(null);

    const [year, setYear] = useState(new Date().getFullYear());

    const [changes, setChanges] = useState<Partial<ICourtHour>[]>([]);

    const { courts_hours, createCourtHourArray, deleteCourtHourArray } = useCourtHour();
    
    

    const onMonthSelected = (month_selected: number) => {
        setMonth(month_selected);
    }

    const onCourtSelected = (court_selected: number) => {
        setCourt(court_selected);
    }

    const onYearSelected = (year_selected: number) => {
        setYear(year_selected);
    }

    const onChange = (court_hour: Partial<ICourtHour>[]) => {
        setChanges(court_hour);
    }

    const [data, setData] = useState<ICourtHour[]>([]);


 

    // const onClickHour = (court_hour: Partial<ICourtHour>) => {



    //     const searched_court_hour = data.find((court_hour_data) => {
    //         return (court_hour_data.year === court_hour.year 
    //             && court_hour_data.id_hour === court_hour.id_hour 
    //             && court_hour_data.day_number === court_hour.day_number
    //             && court_hour_data.id_court === (court ??1) );
    //     });

    //     console.log("onClicData2",data);

    //     if (searched_court_hour) {
    //         console.log('delete');
    //         deleteCourtHour(searched_court_hour.id_court_hour);
    //         return;
    //     }else{
    //         createCourtHour({
    //             id_court: court || 1,
    //             id_hour: court_hour.id_hour!,
    //             id_month: court_hour.id_month!,
    //             day_number: court_hour.day_number!,
    //             year: year
    //         });
    //     }
    // }




    const onSaveClick = async () => {
        console.log('onSaveClick---------------------------------------------------------------');
        let court_hour_add: ICourtHourCreate[] = [];
        let court_hour_delete: ICourtHour[] = [];

        changes.forEach((court_hour) => {
            
            const searched_court_hour = data.find((court_hour_data) => {
                return (court_hour_data.year === court_hour.year
                    && court_hour_data.id_hour === court_hour.id_hour
                    && court_hour_data.day_number === court_hour.day_number
                    && court_hour_data.id_court === (court ?? 1));
            });

            if (!searched_court_hour) {
                court_hour_add.push({
                    id_court: court || 1,
                    id_hour: court_hour.id_hour!,
                    id_month: court_hour.id_month!,
                    day_number: court_hour.day_number!,
                    year: year
                });
            }
        });
        
        console.log('changes', changes);
        
        data.forEach((court_hour) => {
            
            
            const searched_court_hour = changes.find((court_hour_data) => {
                return (court_hour_data.year === court_hour.year
                    && court_hour_data.id_hour === court_hour.id_hour
                    && court_hour_data.day_number === court_hour.day_number
                    && (court || 1) === court_hour.id_court 
                    && court_hour_data.id_month === court_hour.id_month);
            });
            if (!searched_court_hour) {
                
                court_hour_delete.push(court_hour);
            }
        });
        
        if (changes.length === 0 ) {
            court_hour_delete = data;
        }
        
        console.log('court_hour_add', court_hour_add);
        console.log('court_hour_delete', court_hour_delete);
        
        court_hour_delete.length>0 && await deleteCourtHourArray(court_hour_delete);
        court_hour_add.length>0 && await createCourtHourArray(court_hour_add);
        
        
    }


    
    useEffect(() => {
        if (!courts_hours) return;
        const data = courts_hours.filter((court_hour) => {
            return court_hour.id_month === month && court_hour.year === year && (court ? court_hour.id_court === court : true);
        });
        setData(data);
    }, [courts_hours, month, year, court]);
    
    
    
    useEffect(() => {
        console.log('data', data);
    }
    , [data]);


    return (
        <>
            <FiltersCourtHour onMonthSelected={onMonthSelected} onCourtSelected={onCourtSelected} onYearSelected={onYearSelected} />
            <button onClick={onSaveClick}>Guardar cambios</button>
            <CalendarCourtHour month={month} year={year} data={data} changes={onChange} />
        </>
    );
};

export default CourtHourMain;