import { useEffect, useState } from 'react';
import CalendarCourtHour from "../../components/calendars/CalendarCourtHour";
import FiltersCourtHour from "../../components/filters/FiltersCourtHour";
import { useCourtHour } from '../../hooks/useCourtHour';
import { ICourtHour } from '../../shared/interfaces/entities/CourtHourt.interface';
// import { useCourtHour } from '../../hooks/useCourtHour';

const CourtHourMain = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    
    const[ court, setCourt ] = useState<number | null>(null);
    
    const [year, setYear] = useState(new Date().getFullYear());
    
    
    const { courts_hours, createCourtHour, deleteCourtHour } = useCourtHour();
    
    const onMonthSelected = (month_selected: number) => {
        setMonth(month_selected);
    }
    
    const onCourtSelected = (court_selected: number) => {
        setCourt(court_selected);
    }
    
    const onYearSelected = (year_selected: number) => {
        setYear(year_selected);
    }
    
    const [data, setData] = useState<ICourtHour[]>([]);
    
    
    useEffect(() => {
        if (!courts_hours) return;
        const data = courts_hours.filter((court_hour) => {
            return court_hour.id_month === month && court_hour.year === year && (court ? court_hour.id_court === court : true);
        });
        setData(data);
    }, [courts_hours, month, year, court]);
    
    const onClickHour = (court_hour: Partial<ICourtHour>) => {
        
        
        
        const searched_court_hour = data.find((court_hour_data) => {
            return (court_hour_data.year === court_hour.year 
                && court_hour_data.id_hour === court_hour.id_hour 
                && court_hour_data.day_number === court_hour.day_number
                && court_hour_data.id_court === (court ??1) );
        });

        console.log("onClicData2",data);
        
        if (searched_court_hour) {
            console.log('delete');
            deleteCourtHour(searched_court_hour.id_court_hour);
            return;
        }else{
            createCourtHour({
                id_court: court || 1,
                id_hour: court_hour.id_hour!,
                id_month: court_hour.id_month!,
                day_number: court_hour.day_number!,
                year: year
            });
        }
    }
    
    useEffect(() => {
        console.log('data', data);
    }, [data]);
    
    
    return (
        <>
            <FiltersCourtHour onMonthSelected={onMonthSelected} onCourtSelected={onCourtSelected} onYearSelected={onYearSelected}/>
            <CalendarCourtHour month={month} year={year} data ={data} onClickHour={onClickHour}/>
        </>
    );
};

export default CourtHourMain;