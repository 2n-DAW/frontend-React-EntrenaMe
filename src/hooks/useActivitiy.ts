import { ActivityContext } from "../contexts/ActivityContext";

import { useCallback, useContext } from "react";
import { IActivity } from "../shared/interfaces/entities/Activity.interface";
import { ActivityService } from "../services/activity.service";

const useActivity = () => {
    const context = useContext(ActivityContext);
    

    if (!context) {
        throw new Error('useActivity debe ser usado dentro de un ActivityContextProvider');
    }
    const {setActivities} = context;
    

    const createActivity = useCallback(async (activity_data: Partial<IActivity>) => {
        const activity = await ActivityService.createActivity(activity_data);
        if (!activity) return;
        setActivities((prev_activities) => [...prev_activities, activity]);
    }, [setActivities]);
    

    const updateActivity = useCallback(async (activity_data: Partial<IActivity>) => {
        const activity_updated = await ActivityService.updateActivity(activity_data);
        if (!activity_updated) return;
        setActivities((prev_activities) =>
            prev_activities.map((activity) => (activity.id_activity === activity_data.id_activity ? activity_updated : activity))
        );
    }, [setActivities]);
    

    const deleteActivity = useCallback(async (activity_id: number) => {
        const activity = await ActivityService.deleteActivity(activity_id);
        if (!activity) return;
        setActivities((prev_activities) => prev_activities.filter((activity) => activity.id_activity !== activity_id));
    }, [setActivities]);
    
    
    return {...context, createActivity, updateActivity, deleteActivity};
}

export default useActivity;