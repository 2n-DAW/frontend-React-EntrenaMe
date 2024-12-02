import React from 'react';
// import './SportsList.css';
import { Sport } from '../../../interfaces';

import SportsCard from './SportsCard';

export default function SportsList ({ sports }: { sports: Sport[] }) {

    return  (
        <div className="min-h-[77vh] overflow-x-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Lista de deportes</h1>
            <table className="w-full border-2 border-gray-300">
                <thead className="bg-teal-400 uppercase">
                    <tr>
                        <th className="border-2 border-gray-300 p-2">ID</th>
                        <th className="border-2 border-gray-300 p-2">Nombre</th>
                        <th className="border-2 border-gray-300 p-2">Imagen</th>
                        <th className="border-2 border-gray-300 p-2">Slug</th>
                        <th className="border-2 border-gray-300 p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody className="tbody_sports_list">
                    {
                        sports.map(sport => (
                            <SportsCard key={sport.id_sport} sport={sport}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
