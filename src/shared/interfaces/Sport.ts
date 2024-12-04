import { ReactNode } from 'react';

export interface Sport {
    id_sport?: number;
    n_sport: string;
    img_sport: string;
    slug_sport?: string;
}

export interface SportContextType {
    sports: Sport[];
    setSports: React.Dispatch<React.SetStateAction<Sport[]>>;
}

export interface SportContextProviderProps  {
    children: ReactNode; // Permite que cualquier tipo de elemento React sea hijo del proveedor.
}
