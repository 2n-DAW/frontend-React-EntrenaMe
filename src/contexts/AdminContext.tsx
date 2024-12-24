import { createContext, ReactNode, useEffect, useState } from "react";
import { IAdminContextProps } from "../shared/interfaces/InterfacesContext/AdminContext.interface";
import { IAdmin } from "../shared/interfaces/entities/User.interface";
import { UserService } from "../services/user.service";

export const AdminContext = createContext<IAdminContextProps | undefined>(undefined);




export const AdminProvider = ({ children }: { children: ReactNode }) => {

    const [admin, setAdmin] = useState<IAdmin>({} as IAdmin);
    
    
    const fetchAdmin = async () => {
        const resp = await UserService.getCurrentUser();
        if (!resp) return;
        setAdmin(resp);
    };
    
    

    useEffect(() => {
        fetchAdmin();
    }, []);
    
    

    
    return (
        <AdminContext.Provider value={{ admin, setAdmin}}>
            {children}
        </AdminContext.Provider>
    );
};
