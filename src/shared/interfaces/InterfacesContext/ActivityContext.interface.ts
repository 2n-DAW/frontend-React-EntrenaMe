import { IActivity } from "../entities/Activity.interface";

export interface IActivitiesContextProps {
    activities: IActivity[];
    setActivities: React.Dispatch<React.SetStateAction<IActivity[]>>;
    activity_selected: IActivity | undefined;
    setActivitySelected: React.Dispatch<React.SetStateAction<IActivity | undefined>>;
}