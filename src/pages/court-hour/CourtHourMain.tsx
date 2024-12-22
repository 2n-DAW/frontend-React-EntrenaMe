import CalendarCourtHour from "../../components/calendars/CalendarCourtHour";


const CourtHourMain = () => {
    
    return (
        <div>
            <CalendarCourtHour month={new Date().getMonth()} year={new Date().getFullYear()}/>
        </div>
    );
};
    

export default CourtHourMain;
