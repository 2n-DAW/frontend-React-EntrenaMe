import { ICourtHour } from "../entities/CourtHourt.interface";

export interface ICourtHourContextProps {
    courts_hours: ICourtHour[] | undefined;
    setCourtHours: React.Dispatch<React.SetStateAction<ICourtHour[] | undefined>>;
}