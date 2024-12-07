export interface ISport {
    id_sport: number;
    n_sport: string;
    img_sport: string;
    slug_sport: string;
}

export interface ISports {
    sports: Array<ISport>;
}

export interface ISportsContextProps {
    sports: ISport[];
    setSports: React.Dispatch<React.SetStateAction<ISport[]>>;
    createSport: (sport_data: Partial<ISport>) => Promise<void>
    updateSport: (sport_data: Partial<ISport>) => Promise<void>
}