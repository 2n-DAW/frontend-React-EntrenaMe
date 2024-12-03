import React from 'react';
import { useNavigate } from "react-router-dom";
// import './SportsCard.css';
import { Sport } from '../../../interfaces';

export default function SportsCard ({ sport, deleteSport }: { sport: Sport, deleteSport: (id: number) => void }) {
    const navigate = useNavigate();

    const redirects = {
        update: (slug: string) => navigate('/dashboard/sports/update/' + slug),
    }

    return (
        <tr>
            <td className="border-2 border-gray-300 p-2 font-bold">{sport.id_sport}</td>
            <td className="border-2 border-gray-300 p-2">{sport.n_sport}</td>
            <td className="border-2 border-gray-300 p-2">{sport.img_sport}</td>
            <td className="border-2 border-gray-300 p-2">{sport.slug_sport}</td>
            <td className="border-2 border-gray-300 p-2"> 
                <button
                    className="bg-teal-400 text-gray-800 font-bold uppercase px-4 py-2 rounded border-2 border-gray-800 hover:bg-teal-500 mr-2"
                    onClick={() => redirects.update(sport.slug_sport)}
                >
                    Editar
                </button>
                <button
                    className="bg-teal-400 text-gray-800 font-bold uppercase px-4 py-2 rounded border-2 border-gray-800 hover:bg-teal-500"
                    onClick={() => deleteSport(sport.id_sport)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}