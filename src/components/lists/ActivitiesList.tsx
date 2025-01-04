
import { IActivities } from "../../shared/interfaces/entities/Activity.interface";
import ActivityCard from "../cards/ActivityCard";

export default function ActivitiesList({ activities }: IActivities) {

    
    return (
        <div className="min-h-[77vh] overflow-x-auto p-8 z-0">
            <h2 className="text-2xl font-semibold mb-4">Lista de Actividades</h2>
            <div className=" overflow-x-auto shadow-md rounded z-0">
                <table className="w-full text-sm text-left rtl:text-right text-text1 p-2 z-0">
                    <thead className="text-xs text-text1 uppercase bg-background3 rounded">
                        <tr>
                            <th scope="col" className="px-4 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-1 py-3">
                                Imagen 
                            </th>
                            <th scope="col" className="px-1 py-3">
                                Plazas 
                            </th>
                            <th scope="col" className="px-1 py-3">
                                Slug 
                            </th>
                            <th scope="col" className="px-1 py-3">
                                ID Instructor
                            </th>
                            <th scope="col" className="px-1 py-3">
                                ID Deporte
                            </th>
                            <th scope="col" className="px-1 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-1 py-3">
                                Desctipcion
                            </th>
                            <th scope="col" className="px-1 py-3">
                                Horario
                            </th>
                            <th scope="col" className="px-1 py-3">
                                Dia
                            </th>
                            <th scope="col" className="px-1 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            activities.map(activity => (
                                <ActivityCard key={activity.id_activity} data={activity} />
                            ))
                            
                            
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


