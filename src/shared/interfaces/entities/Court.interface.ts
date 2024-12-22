export interface ICourt {
    id_court: number;
    n_court: string;
    img_coutr: string;
    slug_court: string;
}

export interface ICourts{
    courts: ICourt[];
}