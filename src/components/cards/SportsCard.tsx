import React from 'react';
import { useNavigate } from "react-router-dom";
import { Sport } from '../../shared/interfaces';

export default function SportsCard ({ sport, deleteSport }: { sport: Sport, deleteSport: (id: number) => void }) {
    const navigate = useNavigate();

    const redirects = {
        update: (slug: string) => navigate(`/dashboard/sports/update/${slug}`),
    }

    return (
        <tr className="border-2 border-gray-500">
            <td className="px-6 py-2 font-bold">{sport.id_sport}</td>
            <td className="px-6 py-2">{sport.n_sport}</td>
            <td className="px-6 py-2">{sport.img_sport}</td>
            <td className="px-6 py-2">{sport.slug_sport}</td>
            <td className="px-6 py-2"> 
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded mr-3"
                    onClick={() => sport.slug_sport && redirects.update(sport.slug_sport)}
                >
                    Editar
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1.5 px-4 rounded"
                    onClick={() => sport.id_sport && deleteSport(sport.id_sport)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
