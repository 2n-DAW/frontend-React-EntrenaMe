import { IActivity } from "../../entities/Activity.interface";

export interface IActivitiesFormProps {
    activity_data?: Partial<IActivity>;
}

export interface IActivitiesFormFields {
    n_activity: string;
    img_activity: string;
    description: string;
    id_user_instructor: string;
    id_sport: number | string;
    week_day: string;
    slot_hour: string;
    spots: number;
}

