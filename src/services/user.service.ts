import ApiService from "../core/api.service";
import { IAdmin } from "../shared/interfaces/entities/User.interface";


export const UserService = {
    getCurrentUser(): Promise<IAdmin> {
        return ApiService.get<IAdmin>("user/currentUser");
    },
};




