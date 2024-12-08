import { useNavigate } from "react-router-dom";
import { ISportCardProps } from "../../shared/interfaces/InterfacesComponents/cards/SportCard.interface";
import { useSportsContext } from "../../hooks/useSportsContext";

const SportCard = ({data}: ISportCardProps) => {

    const navigate = useNavigate();
    
    const redirects = {
        update: (slug_sport: string) => navigate(`/sports/update/${slug_sport}`),
    }
    
    const {deleteSport}= useSportsContext();

    const { img_sport, n_sport,id_sport,slug_sport } = data;

    return (
        <tr className="border-2 border-gray-500">
        <td className="px-6 py-2 font-bold">{id_sport}</td>
        <td className="px-6 py-2">{n_sport}</td>
        <td className="px-6 py-2">{img_sport}</td>
        <td className="px-6 py-2">{slug_sport}</td>
        <td className="px-6 py-2"> 
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded mr-3"
                onClick={() => slug_sport && redirects.update(slug_sport)}
            >
                Editar
            </button>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-4 rounded"
                onClick={() => id_sport && deleteSport(id_sport)}
            >
                Eliminar
            </button>
        </td>
    </tr>
    );
}

export default SportCard;