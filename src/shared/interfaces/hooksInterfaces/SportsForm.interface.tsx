import { ISport } from "../entities/Sport.interface";

export interface ISportsFormProps {
    sport_data?: Partial<ISport>;
    save: (data: Partial<ISport>) => void;
}