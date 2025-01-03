import useActivity from "../../hooks/useActivitiy";
import { IActivityCardProps } from "../../shared/interfaces/InterfacesComponents/cards/ActivityCard.interface";

const ActivityCard = ({ data }: IActivityCardProps) => {
    const { deleteActivity, setActivitySelected } = useActivity();
    const { instructor, img_activity, n_activity, id_sport, id_activity, slug_activity, id_user_instructor, description, week_day, slot_hour, spots, spots_available } = data;

    return (
        <tr className="bg-gray-900 even:bg-gray-50 even:bg-gray-800 border-b border-gray-700 rounded">
            <th scope="row" className="px-4 py-2 font-medium text-text1 whitespace-nowrap">
                {id_activity}
            </th>
            <td className="px-1 py-2">
                {img_activity}
            </td>
            <td className="px-1 py-2">
                {`${spots_available}/${spots}`}
            </td>
            <td className="px-1 py-2">
                {slug_activity}
            </td>
            <td className="px-1 py-2">
                {instructor?.username}
            </td>
            <td className="px-1 py-2">
                {id_sport}
            </td>
            <td className="px-1 py-2">
                {n_activity}
            </td>
            <td className="px-1 py-2">
                {description}
            </td>
            <td className="px-1 py-2">
                {slot_hour}
            </td>
            <td className="px-1 py-2">
                {week_day}
            </td>
            <td className="px-1 py-2">
                <a
                    className="font-medium text-color1 hover:underline mr-4"
                    onClick={() => data && setActivitySelected(data)}
                >
                    Editar
                </a>
                <a className="font-medium text-color1   hover:underline"
                    onClick={() => id_activity && deleteActivity(id_activity)}
                >
                    Eliminar
                </a>
            </td>
        </tr>
    );
}

export default ActivityCard;