import { useEffect, useState } from 'react';
import CalendarCourtHour from "../../components/calendars/CalendarCourtHour";
import FiltersCourtHour from "../../components/filters/FiltersCourtHour";
// import { useCourtHour } from '../../hooks/useCourtHour';

const CourtHourMain = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    
    const[ court, setCourt ] = useState<number | null>(null);
    
    // const {courts_hours} = useCourtHour();
    
    const onMonthSelected = (month_selected: number) => {
        setMonth(month_selected);
    }
    
    const onCourtSelected = (court_selected: number) => {
        setCourt(court_selected);
    }
    
    // useEffect(() => {
    //     console.log(courts_hours);
    // }, [courts_hours]);
    
    
    return (
        <>
            <FiltersCourtHour onMonthSelected={onMonthSelected} onCourtSelected={onCourtSelected}/>
            <CalendarCourtHour month={month} year={new Date().getFullYear()}/>
        </>
    );
};

export default CourtHourMain;