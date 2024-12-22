import { ICourt } from "../entities/Court.interface";

export interface ICourtContextProps {
    courts: ICourt[];
    setCourts: React.Dispatch<React.SetStateAction<ICourt[]>>;
}