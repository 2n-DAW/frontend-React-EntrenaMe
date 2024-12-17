import { ISports } from "../../shared/interfaces/entities/Sport.interface";
import SportCard from "../cards/SportCard";

export default function SportsList({ sports }: ISports) {

    return (
        <div className="min-h-[77vh] overflow-x-auto p-8">
            <h2 className="text-2xl font-semibold mb-4">Lista de deportes</h2>
            <div className="relative overflow-x-auto shadow-md rounded">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-2">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Imagen
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Slug
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sports.map(sport => (
                                <SportCard key={sport.id_sport} data={sport} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


