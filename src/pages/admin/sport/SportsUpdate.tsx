import React, { useEffect } from "react";
import SportsForm from "../../../components/form/SportsForm";
import { useSports } from "../../../hooks/useSports";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Sport } from "../../../shared/interfaces";

const SportsUpdate = () => {
    const { slug } = useParams<{ slug: string }>();
    const { useOneSport, oneSport, isCorrect, useUpdateSport } = useSports();
    const form_type = 'update';
    const navigate = useNavigate();

    useEffect(() => {
        if (slug !== '') {
            useOneSport(slug!);
        }
        if (isCorrect) {
            navigate('/dashboard/sports');
        }
    }, [isCorrect, navigate]);

    return (
        <div className="container p-8">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Editar deporte</h1>
            </div>
            <SportsForm sport={oneSport} form_type={form_type} sendData={(data: Sport) => useUpdateSport(slug!, data)}/>
        </div>
    )
}

export default SportsUpdate;
