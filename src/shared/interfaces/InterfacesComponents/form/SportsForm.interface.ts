import { ISport } from "../../entities/Sport.interface";

export interface ISportsFormProps {
    sport_data?: Partial<ISport>;
}

export interface ISportsFormFields {
    n_sport: string;
    img_sport:string;
}

