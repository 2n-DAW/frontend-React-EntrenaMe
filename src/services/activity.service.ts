import ApiService from "../core/api.service";
import { IActivities, IActivity } from "../shared/interfaces/entities/Activity.interface";

export const ActivityService = {
    getAll(): Promise<IActivities> {
        return ApiService.get<IActivities>("activities");
    },
    getById(id:string) {
        return ApiService.get(`activities/${id}`);
    },
    
    getOneActivity(slug: string): Promise<IActivity> {
        return ApiService.get<IActivity>(`activities/slug/${slug}`);
    },

    createActivity(data: Partial<IActivity>): Promise<IActivity> {
        
        return ApiService.post<IActivity>('/activities', data);
    },

    updateActivity(data: Partial<IActivity>): Promise<IActivity> {
        return ApiService.put<IActivity>('/activities', data );
    },

    deleteActivity(id: number): Promise<IActivity> {
        return ApiService.delete<IActivity>(`/activities/${id}`);
    },
    
};
