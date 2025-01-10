import { ActivityContext } from "../contexts/ActivityContext";

import { useCallback, useContext } from "react";
import { IActivity } from "../shared/interfaces/entities/Activity.interface";
import { ActivityService } from "../services/activity.service";


import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';


const useActivity = () => {
    const context = useContext(ActivityContext);


    if (!context) {
        throw new Error('useActivity debe ser usado dentro de un ActivityContextProvider');
    }
    const { setActivities } = context;


    const createActivity = useCallback(async (activity_data: Partial<IActivity>) => {
        const activity = await ActivityService.createActivity(activity_data);
        if (!activity) return;
        setActivities((prev_activities) => [...prev_activities, activity]);
        
        new Noty({
            type: 'success',
            text: 'Creado',
            timeout: 1000,
            progressBar: true,
        }).show();
        
    }, [setActivities]);


    const updateActivity = useCallback(async (activity_data: Partial<IActivity>) => {
        const activity_updated = await ActivityService.updateActivity(activity_data);
        if (!activity_updated) return;
        setActivities((prev_activities) =>
            prev_activities.map((activity) => (activity.id_activity === activity_data.id_activity ? activity_updated : activity))
        );
        
        new Noty({
            type: 'success',
            text: 'Actualizado',
            timeout: 1000,
            progressBar: true,
        }).show();
        
    }, [setActivities]);


    const deleteActivity = useCallback(async (activity_id: number) => {
        const activity = await ActivityService.deleteActivity(activity_id);
        if (!activity) return;
        setActivities((prev_activities) => prev_activities.filter((activity) => activity.id_activity !== activity_id));

        new Noty({
            type: 'success',
            text: 'Borrado',
            timeout: 1000,
            progressBar: true,
        }).show();

    }, [setActivities]);


    return { ...context, createActivity, updateActivity, deleteActivity };
}

export default useActivity;