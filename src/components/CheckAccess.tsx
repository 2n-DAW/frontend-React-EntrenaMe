import { useContext, useEffect, useState } from 'react';
import { AccessCheckerProps } from '../shared/interfaces/InterfacesComponents/CheckAccess.interface';
import { AdminContext } from '../contexts/AdminContext';

const CheckAccess = ({ children }: AccessCheckerProps)=> {
    const [hasAccess, setHasAccess] = useState<boolean>(false);
    const { admin } = useContext(AdminContext)!;
    let access = false;
    useEffect(() => {
        access = (admin.type_user === "admin")
        setHasAccess(access); 
    }, [admin]);

    if (hasAccess === false) {
        return <div>No tienes acceso</div>;
    } else {
        return <>{children}</>;
    }
};

export default CheckAccess;