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
    
    
    const { courts_hours } = useCourtHour();
    
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
    
    
    return (
        <>
            <FiltersCourtHour onMonthSelected={onMonthSelected} onCourtSelected={onCourtSelected} onYearSelected={onYearSelected}/>
            <CalendarCourtHour month={month} year={year} data ={data} />
        </>
    );
};

export default CourtHourMain;