import { useState } from 'react';
import CalendarCourtHour from "../../components/calendars/CalendarCourtHour";
import FiltersCourtHour from "../../components/filters/FiltersCourtHour";

const CourtHourMain = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    
    const[ court, setCourt ] = useState<number | null>(null);
    
    const onMonthSelected = (month_selected: number) => {
        setMonth(month_selected);
    }
    
    const onCourtSelected = (court_selected: number) => {
        console.log("pista", court_selected);
        setCourt(court_selected);
    }
    
    return (
        <>
            <FiltersCourtHour onMonthSelected={onMonthSelected} onCourtSelected={onCourtSelected}/>
            <CalendarCourtHour month={month} year={new Date().getFullYear()}/>
        </>
    );
};

export default CourtHourMain;