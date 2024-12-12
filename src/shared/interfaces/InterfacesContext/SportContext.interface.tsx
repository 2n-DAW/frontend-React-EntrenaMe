import { ISport } from "../entities/Sport.interface";

export interface ISportsContextProps {
    sports: ISport[];
    setSports: React.Dispatch<React.SetStateAction<ISport[]>>;
}