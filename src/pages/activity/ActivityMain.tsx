import useActivity from "../../hooks/useActivitiy";


const ActivityMain = () => {

    // const { activities, setActivities, } = useActivity();


    return (
        <div className="flex h-full">
            <div className="w-2/3 h-full overflow-y-auto ">
                {/* <SportsList sports={sports} /> */}
            </div>
            <div className="w-1/3 h-full p-4">
                <div className=" p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Crear deporte</h2>
                    {/* <SportsForm /> */}
                </div>

                <div className=" p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Editar Deporte</h2>
                    {/* {sport_selected ? <SportsForm sport_data={sport_selected}/> : <p>Selecciona un deporte</p>} */}

                </div>

            </div>
        </div>
    );
}
export default ActivityMain;