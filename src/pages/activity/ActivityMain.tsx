import { useEffect } from "react";
import ActivityForm from "../../components/form/ActivityForm";
import ActivitiesList from "../../components/lists/ActivitiesList";
import useActivity from "../../hooks/useActivitiy";


const ActivityMain = () => {

    const { activities, activity_selected } = useActivity();
    
    useEffect(() => {
        console.log(activity_selected);
    }, [activity_selected]);

        


    return (
        <div className="flex h-full">
            <div className="w-2/3 h-full">
                <ActivitiesList activities={activities} />
            </div>
            <div className="w-1/3 h-full p-4 fixed align-right right-0">
                <div className=" p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Crear Actividad</h2>
                    <ActivityForm />
                </div>

                <div className=" p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Visualizar Actividad</h2>
                    {activity_selected ? <ActivityForm activity_data={activity_selected} /> : <p>Selecciona una actividad</p>}
                </div>

            </div>
        </div>
    );
}
export default ActivityMain;