import {useSportsContext} from "../../hooks/useSportsContext";
import SportsList from "../../components/lists/SportsList";

const SportsMain = () => {
    const {sports} = useSportsContext();

    return (
        <SportsList sports={sports}/>
    )
}

export default SportsMain;