import { IAdmin } from "../entities/User.interface";

export interface ISportsContextProps {
    user: IAdmin[];
    setUser: React.Dispatch<React.SetStateAction<IAdmin[]>>;
}