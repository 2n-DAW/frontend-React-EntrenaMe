import ApiService from "../core/api.service";
import { ICourtsHours } from "../shared/interfaces/entities/CourtHourt.interface";

export const CourtHourService = {
    getAllCourtsHours(): Promise<ICourtsHours> {
        console.log("getAllCourtsHours");
        return ApiService.get<ICourtsHours>("courtsHours");
    },
};