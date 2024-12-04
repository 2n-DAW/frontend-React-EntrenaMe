import React, { useEffect } from "react";
import SportsForm from "../../../components/form/SportsForm";
import { useSports } from "../../../hooks/useSports";
import { useNavigate } from "react-router-dom";
import { Sport } from "../../../shared/interfaces";

const SportsAdd = () => {
    const { isCorrect, useAddSport } = useSports();
    const form_type = 'create';

    const navigate = useNavigate();

    useEffect(() => {
        if (isCorrect) {
            navigate('/dashboard/sports');
        }
    }, [isCorrect, navigate]);

    return (
        <div className="container p-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Añadir Deporte</h1>
            </div>
            <SportsForm form_type={form_type} sendData={(data: Sport) => useAddSport(data)}/>
        </div>
    )
}

export default SportsAdd;
