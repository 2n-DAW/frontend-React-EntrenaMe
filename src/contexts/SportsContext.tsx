import React, { useState, useEffect } from 'react'
import SportService from '../services/SportService';
import { Sport, SportContextType, SportContextProviderProps } from '../shared/interfaces';

const Context = React.createContext<SportContextType | undefined>(undefined)

export function SportContextProvider({ children }: SportContextProviderProps) {
    const [sports, setSports] = useState<Sport[]>([] as Sport[]);

    useEffect(() => {
        SportService.getAllSports()
            .then(({data}) => {
                setSports(data);
            })
            .catch(e => console.error(e));
    }, [setSports]);

    return <Context.Provider value={{ sports, setSports }}>
        {children}
    </Context.Provider>
}

export default Context