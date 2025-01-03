import { createContext, useState, useEffect, ReactNode } from 'react';
import { IActivity} from '../shared/interfaces/entities/Activity.interface';
import { IActivitiesContextProps } from '../shared/interfaces/InterfacesContext/ActivityContext.interface';
import { ActivityService } from '../services/activity.service';

export const ActivitiesContext = createContext<IActivitiesContextProps | undefined>(undefined);

export const ActivitiesProvider = ({ children }: { children: ReactNode }) => {

    const [activities, setActivities] = useState<IActivity[]>([]);
    const [activity_selected, setActivitySelected] = useState<IActivity | undefined>(undefined);
    
    const fetchActivities = async () => {
        const resp = await ActivityService.getAll();
        if (!resp) return;
        setActivities(resp.activities);
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    
    return (
        <ActivitiesContext.Provider value={{ activities, setActivities, activity_selected, setActivitySelected }}>
            {children}
        </ActivitiesContext.Provider>
    );
};
