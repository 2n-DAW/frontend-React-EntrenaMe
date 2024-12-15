import { useEffect, useState } from 'react';
import { AccessCheckerProps } from '../shared/interfaces/InterfacesComponents/CheckAccess.interface';

const CheckAccess = ({ children }: AccessCheckerProps)=> {
    const [hasAccess, setHasAccess] = useState<boolean>(false);

    useEffect(() => {
        console.log('Verificando acceso');
        setHasAccess(true); 
    }, []);

    if (hasAccess === false) {
        return <div>No tienes acceso</div>;
    } else {
        return <>{children}</>;
    }
};

export default CheckAccess;