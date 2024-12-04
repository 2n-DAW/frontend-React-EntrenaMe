import api from '../core/api.service';
import { ApiResponse, Sport } from '../shared/interfaces';

const SportService = {
    getAllSports(): Promise<ApiResponse<Sport[]>> {
        return api().get('/sports');
    },

    getOneSport(slug: string): Promise<ApiResponse<Sport>> {
        return api().get(`sports/slug/${slug}`);
    },

    createSport(data: Sport): Promise<ApiResponse<Sport>> {
        return api().post('/sports', data);
    },

    updateSport(data: Sport): Promise<ApiResponse<Sport>> {
        return api().put('/sports', data );
    },

    deleteSport(id: number): Promise<ApiResponse<Sport>> {
        return api().delete(`/sports/${id}`);
    },
};

export default SportService;
