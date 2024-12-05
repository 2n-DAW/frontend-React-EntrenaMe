import { useSportsContext } from "../../../hooks/useSportsContext";
import SportList from "../../../components/lists/SportList";

const SportsMain = () => {
    const {sports} = useSportsContext();

    return (
        <SportList sports={sports}/>
    )
}

export default SportsMain;