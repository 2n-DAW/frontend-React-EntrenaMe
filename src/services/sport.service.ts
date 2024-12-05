import ApiService from "../core/api.service";
import { ApiResponse } from "../shared/interfaces/ApiResponse.interface";
import { Sport, Sports } from "../shared/interfaces/entities/Sport.interface";

export const SportService = {
    getAll(): Promise<Sports> {
        return ApiService.get<Sports>("sports");
    },
    getById(id:string) {
        return ApiService.get(`sports/${id}`);
    },
    
    getOneSport(slug: string): Promise<Sport> {
        return ApiService.get<Sport>(`sports/slug/${slug}`);
    },

    createSport(data: Sport): Promise<Sport> {
        return ApiService.post<Sport>('/sports', data);
    },

    updateSport(data: Sport): Promise<Sport> {
        return ApiService.put<Sport>('/sports', data );
    },

    deleteSport(id: number): Promise<Sport> {
        return ApiService.delete<Sport>(`/sports/${id}`);
    },
    
};




