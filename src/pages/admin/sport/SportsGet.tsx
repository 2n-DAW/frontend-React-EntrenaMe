import React from "react";
import { useSports } from "../../../hooks/useSports";
import SportsList from "../../../components/admin/sport/SportsList";

const SportsGet = () => {
    const {sports} = useSports();

    return (
        <SportsList sports={sports}/>
    )
}

export default SportsGet;