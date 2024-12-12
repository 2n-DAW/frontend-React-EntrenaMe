import React, { useEffect, useState } from 'react';

interface AccessCheckerProps {
    children: React.ReactNode;
}

const CheckAccess: React.FC<AccessCheckerProps> = ({ children }) => {
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