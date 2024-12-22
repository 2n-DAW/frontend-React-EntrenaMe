import ApiService from "../core/api.service";
import { ICourtsHours } from "../shared/interfaces/entities/CourtHourt.interface";

export const CourtHourService = {
    getAllCourtsHours(): Promise<ICourtsHours> {
        return ApiService.get<ICourtsHours>("courtsHours");
    },
};