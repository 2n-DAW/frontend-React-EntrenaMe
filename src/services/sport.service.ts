import ApiService from "../core/api.service";
import { ISport, ISports } from "../shared/interfaces/entities/Sport.interface";

export const SportService = {
    getAll(): Promise<ISports> {
        return ApiService.get<ISports>("sports");
    },
    getById(id:string) {
        return ApiService.get(`sports/${id}`);
    },
    
    getOneSport(slug: string): Promise<ISport> {
        return ApiService.get<ISport>(`sports/slug/${slug}`);
    },

    createSport(data: Partial<ISport>): Promise<ISport> {
        
        return ApiService.post<ISport>('/sports', data);
    },

    updateSport(data: Partial<ISport>): Promise<ISport> {
        return ApiService.put<ISport>('/sports', data );
    },

    deleteSport(id: number): Promise<ISport> {
        return ApiService.delete<ISport>(`/sports/${id}`);
    },
    
};




