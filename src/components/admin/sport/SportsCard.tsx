import React from 'react';
// import './SportsCard.css';
import { Sport } from '../../../interfaces';

export default function SportsCard ({ sport }: { sport: Sport }) {

    return (
        <tr>
            <td className="border-2 border-gray-300 p-2 font-bold">{sport.id_sport}</td>
            <td className="border-2 border-gray-300 p-2">{sport.n_sport}</td>
            <td className="border-2 border-gray-300 p-2">{sport.img_sport}</td>
            <td className="border-2 border-gray-300 p-2">{sport.slug_sport}</td>
            <td className="border-2 border-gray-300 p-2"> 
                <button className="bg-teal-400 text-gray-800 font-bold uppercase px-4 py-2 rounded border-2 border-gray-800 hover:bg-teal-500 mr-2">Editar</button>
                <button className="bg-teal-400 text-gray-800 font-bold uppercase px-4 py-2 rounded border-2 border-gray-800 hover:bg-teal-500">Eliminar</button>
            </td>
        </tr>
    )
}