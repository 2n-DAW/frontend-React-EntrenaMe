import SportsForm from "../../../components/form/SportsForm";
import { ISport } from "../../../shared/interfaces/entities/Sport.interface";

const SportsCreate = () => {

    const Save=(data:Partial<ISport>)=>{
        console.log(data)
    }    
    return(
        <>
            <SportsForm save={Save}/>
        </>
    );
}

export default SportsCreate;
