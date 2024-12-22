import { useState } from 'react';
import CalendarCourtHour from "../../components/calendars/CalendarCourtHour";
import FiltersCourtHour from "../../components/filters/FiltersCourtHour";

const CourtHourMain = () => {
    const [month, setMonth] = useState(new Date().getMonth());
    
    const onMonthSelected = (month_selected: number) => {
        setMonth(month_selected);
    }
    
    return (
        <>
            <FiltersCourtHour onMonthSelected={onMonthSelected}/>
            <CalendarCourtHour month={month} year={new Date().getFullYear()}/>
        </>
    );
};

export default CourtHourMain;