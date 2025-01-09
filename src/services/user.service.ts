import ApiService from "../core/api.service";
import { IAdmin, IInstructors } from "../shared/interfaces/entities/User.interface";


export const UserService = {
    getCurrentUser(): Promise<IAdmin> {
        return ApiService.get<IAdmin>("user/currentUser");
    },
    getInstructors(): Promise<IInstructors> {
        return ApiService.get<IInstructors>("user/instructors");
    },
};




