import ApiService from "../core/api.service";
import { ICourtHour, ICourtsHours } from "../shared/interfaces/entities/CourtHourt.interface";
import { ICourtHourCreate } from "../shared/interfaces/InterfacesServices/courtHourService.interface";

export const CourtHourService = {
    getAllCourtsHours(): Promise<ICourtsHours> {
        return ApiService.get<ICourtsHours>("courtsHours");
    },
    
    createCourtHour(courts_hours: ICourtHourCreate): Promise<ICourtHour> {
        return ApiService.post<ICourtHour>("courtsHours", courts_hours);
    },
    
    deleteCourtHour(id_court_hour: number): Promise<ICourtHour> {
        return ApiService.delete<ICourtHour>(`courtsHours/${id_court_hour}`);
    },
    
    createCourtHourArray(courts_hours: ICourtHourCreate[]): Promise<{courts_hours: ICourtHour[]}> {
        return ApiService.post<{courts_hours: ICourtHour[]}>("courtsHours/array", {courts_hours});
    },
    
    deleteCourtHourArray(courts_hours: Partial<ICourtHour>[]): Promise<{courts_hours: ICourtHour[]}> {
        return ApiService.post<{courts_hours: ICourtHour[]}>(`courtsHours/array/delete`, {courts_hours});
    }
    
};