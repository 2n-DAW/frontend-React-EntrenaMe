import { ISportCardProps } from "../../shared/interfaces/InterfacesComponents/cards/SportCard.interface";
import { useSportsContext } from "../../hooks/useSportsContext";

const SportCard = ({ data }: ISportCardProps) => {
    const { deleteSport, setSportSelected } = useSportsContext();
    const { img_sport, n_sport, id_sport, slug_sport } = data;

    return (
        <tr className="bg-gray-900 even:bg-gray-50 even:bg-gray-800 border-b border-gray-700 rounded">
            <th scope="row" className="px-6 py-4 font-medium text-text1 whitespace-nowrap">
                {id_sport}
            </th>
            <td className="px-6 py-4">
                {n_sport}
            </td>
            <td className="px-6 py-4">
                {img_sport}
            </td>
            <td className="px-6 py-4">
                {slug_sport}
            </td>
            <td className="px-6 py-4">

                <a
                    className="font-medium text-color1 hover:underline mr-4"
                    onClick={() => data && setSportSelected(data)}
                >
                    Seleccionar
                </a>
                <a className="font-medium text-color1   hover:underline"
                    onClick={() => id_sport && deleteSport(id_sport)}
                >
                    Eliminar
                </a>

            </td>
        </tr>
    );
}

export default SportCard;



