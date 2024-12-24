import ApiService from "../core/api.service";
import { ICourtHour, ICourtsHours } from "../shared/interfaces/entities/CourtHourt.interface";
import { ICourtHourCreate } from "../shared/interfaces/InterfacesServices/courtHourService.interface";

export const CourtHourService = {
    getAllCourtsHours(): Promise<ICourtsHours> {
        return ApiService.get<ICourtsHours>("courtsHours");
    },
    
    createCourtHour(court_hour_data: ICourtHourCreate): Promise<ICourtHour> {
        return ApiService.post<ICourtHour>("courtsHours", court_hour_data);
    },
    
    deleteCourtHour(id_court_hour: number): Promise<ICourtHour> {
        return ApiService.delete<ICourtHour>(`courtsHours/${id_court_hour}`);
    }
};