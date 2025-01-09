import { IAdmin } from "../entities/User.interface";

export interface IAdminContextProps {
    admin: IAdmin;
    setAdmin: React.Dispatch<React.SetStateAction<IAdmin>>;
}