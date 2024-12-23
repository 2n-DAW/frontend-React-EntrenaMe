import { ICourt } from "./Court.interface";
import { IHour } from "./Hour.interface";

export interface ICourtHour {
    id_court_hour: number;
    id_court: number;
    id_hour: number;
    id_month: number;
    day_number: number;
    slug_court_hour: string;
    court: ICourt;
    hour: IHour;
    year: number;
    
}

export interface ICourtsHours {
    courts_hours: ICourtHour[];
}
