import { useSportsContext } from "../../hooks/useSportsContext";
import SportsList from "../../components/lists/SportsList";
import SportsForm from "../../components/form/SportsForm";

const SportsMain = () => {
    const { sports, sport_selected } = useSportsContext();
    return (

        <div className="flex h-full">
            <div className="w-2/3 h-full">
                <SportsList sports={sports} />
            </div>
            <div className="w-1/3 h-full p-4 fixed align-right right-0">
                <div className=" p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Crear deporte</h2>
                    <SportsForm />
                </div>
                
                <div className="p-4 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Editar Deporte</h2>
                    {sport_selected ? <SportsForm sport_data={sport_selected}/> : <p>Selecciona un deporte</p>}
                    
                </div>
                
            </div>
        </div>



    )
}

export default SportsMain;


