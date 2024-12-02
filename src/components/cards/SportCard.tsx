import { Sport } from "../../shared/interfaces/Sport.interface";

const SportCard = (props: { data: Sport }) => {

    const { img_sport, n_sport,id_sport,slug_sport } = props.data as Sport;

    return (
        <tr>
            <td className="border-2 border-gray-300 p-2 font-bold">{id_sport}</td>
            <td className="border-2 border-gray-300 p-2">{n_sport}</td>
            <td className="border-2 border-gray-300 p-2">{img_sport}</td>
            <td className="border-2 border-gray-300 p-2">{slug_sport}</td>
            <td className="border-2 border-gray-300 p-2">
                <button className="bg-teal-400 text-gray-800 font-bold uppercase px-4 py-2 rounded border-2 border-gray-800 hover:bg-teal-500 mr-2">Editar</button>
                <button className="bg-teal-400 text-gray-800 font-bold uppercase px-4 py-2 rounded border-2 border-gray-800 hover:bg-teal-500">Eliminar</button>
            </td>
        </tr>
    );
}

export default SportCard;