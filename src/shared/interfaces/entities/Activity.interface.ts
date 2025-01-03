export interface IActivity {
    id_activity: number;
    id_user_instructor: string;
    id_sport: number;
    n_activity: string;
    description: string;
    week_day: string;
    slot_hour: string;
    img_activity: string;
    spots: number;
    spots_available: number;
    slug_activity: string;
}

export interface IActivities {
    activities: IActivity[];
}