import React from 'react';
import { useNavigate } from "react-router-dom";
import { Sport } from '../../../interfaces';
import SportsCard from './SportsCard';

export default function SportsList ({ sports, deleteSport }: { sports: Sport[], deleteSport: (id: number) => void }) {

    const navigate = useNavigate();

    const redirects = {
        addSport: () => navigate('/dashboard/sports/add'),
    }

    return  (
        <div className="min-h-[77vh] overflow-x-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Lista de deportes</h1>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded mb-6"
                onClick={() => redirects.addSport()}>
                Añadir deporte
            </button>

            <table className="w-full border-2 border-gray-300">
                <thead className="bg-gray-700 text-white">
                    <tr className="border-2 border-gray-500">
                        <th className="px-6 py-2">Id</th>
                        <th className="px-6 py-2">Nombre</th>
                        <th className="px-6 py-2">Imagen</th>
                        <th className="px-6 py-2">Slug</th>
                        <th className="px-6 py-2">Acciones</th>
                    </tr>
                </thead>

                <tbody className="">
                    {
                        sports.map(sport => (
                            <SportsCard key={sport.id_sport} sport={sport} deleteSport={deleteSport}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
