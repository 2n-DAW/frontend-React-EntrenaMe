import { ISport } from "../entities/Sport.interface";

export interface ISportsContextProps {
    sports: ISport[];
    setSports: React.Dispatch<React.SetStateAction<ISport[]>>;
    sport_selected: ISport | undefined;
    setSportSelected: React.Dispatch<React.SetStateAction<ISport | undefined>>;
}