import { useEffect, useState } from 'react';
import CalendarCourtHour from "../../components/calendars/CalendarCourtHour";
import FiltersCourtHour from "../../components/filters/FiltersCourtHour";
// import { useCourtHour } from '../../hooks/useCourtHour';

const CourtHourMain = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    
    const[ court, setCourt ] = useState<number | null>(null);
    
    const [year, setYear] = useState(new Date().getFullYear());
    
    const onMonthSelected = (month_selected: number) => {
        setMonth(month_selected);
    }
    
    const onCourtSelected = (court_selected: number) => {
        setCourt(court_selected);
    }
    
    const onYearSelected = (year_selected: number) => {
        setYear(year_selected);
    }
    
    
    return (
        <>
            <FiltersCourtHour onMonthSelected={onMonthSelected} onCourtSelected={onCourtSelected} onYearSelected={onYearSelected}/>
            <CalendarCourtHour month={month} year={year}/>
        </>
    );
};

export default CourtHourMain;