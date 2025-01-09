import { ISports } from "../../shared/interfaces/entities/Sport.interface";
import SportCard from "../cards/SportCard";

export default function SportsList({ sports }: ISports) {

    return (
        <div className="min-h-[77vh] overflow-x-auto p-8 z-0">
            <h2 className="text-2xl font-semibold mb-4">Lista de deportes</h2>
            <div className=" overflow-x-auto shadow-md rounded z-0">
                <table className="w-full text-sm text-left rtl:text-right text-text1 p-2 z-0">
                    <thead className="text-xs text-text1 uppercase bg-background3 rounded">
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


