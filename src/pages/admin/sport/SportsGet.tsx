import React from "react";
import { useSports } from "../../../hooks/useSports";
import SportsList from "../../../components/admin/sport/SportsList";

const SportsGet = () => {
    const {sports, useDeleteSport} = useSports();

    return (
        <SportsList sports={sports} deleteSport={useDeleteSport}/>
    )
}

export default SportsGet;