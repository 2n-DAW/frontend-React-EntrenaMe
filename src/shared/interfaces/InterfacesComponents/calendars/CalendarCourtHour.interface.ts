import { ICourtHour } from "../../entities/CourtHourt.interface";

export interface ICalendarCourtHourProps {
    month: number;
    year: number;
    data: ICourtHour[];
    onClickHour: (court_hour: Partial<ICourtHour>) => void;
}