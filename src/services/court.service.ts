import ApiService from "../core/api.service";
import { ICourts } from "../shared/interfaces/entities/Court.interface";



export const CourtService = {
    getAllCourts(): Promise<ICourts> {
        return ApiService.get<ICourts>("courts");
    },
};




