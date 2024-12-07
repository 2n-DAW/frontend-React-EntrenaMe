import React from 'react';
import SportsForm from '../../components/form/SportsForm';
import { useParams } from 'react-router-dom';
import { useSportsContext } from '../../hooks/useSportsContext';

const SportsUpdate: React.FC = () => {
    const { slug_sport } = useParams();
    const { sports } = useSportsContext();

    if (!sports || sports.length === 0) {
        return <p>Cargando...</p>;
    }
    
    const sport_data = sports.find((sport) => sport.slug_sport === slug_sport);

    if (!sport_data) {
        return <p>Deporte no encontrado</p>;
    }

    return (
        <>
            <SportsForm sport_data={sport_data} />
        </>
    );
};

export default SportsUpdate;
