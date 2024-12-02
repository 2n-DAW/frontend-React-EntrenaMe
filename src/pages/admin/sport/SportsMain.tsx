import { useSports } from "../../../hooks/useSports";
import SportList from "../../../components/lists/SportList";

const SportsMain = () => {
    const {sports} = useSports();

    return (
        <SportList sports={sports}/>
    )
}

export default SportsMain;