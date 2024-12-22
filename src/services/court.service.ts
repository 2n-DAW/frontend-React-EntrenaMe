import ApiService from "../core/api.service";
import { ICourt } from "../shared/interfaces/entities/Court.interface";



export const CourtService = {
    getAllCourts(): Promise<ICourt[]> {
        return ApiService.get<ICourt[]>("courts");
    },
};




