import { useSportsContext } from "../../hooks/useSportsContext";
import SportsList from "../../components/lists/SportsList";
import SportsForm from "../../components/form/SportsForm";

const SportsMain = () => {
    const { sports, sport_selected } = useSportsContext();
    console.log(sport_selected);
    return (

        <div className="flex h-full">
            <div className="w-2/3 h-full overflow-y-auto ">
                <SportsList sports={sports} />
            </div>
            <div className="w-1/3 h-full p-4">
                <div className=" p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Crear deporte</h2>
                    <SportsForm />
                </div>
                
                <div className=" p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Modificar Deporte</h2>
                    <SportsForm sport_data={sport_selected}/>
                </div>
                
            </div>
        </div>



    )
}

export default SportsMain;


