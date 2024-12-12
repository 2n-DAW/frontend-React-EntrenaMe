export interface IUser {
    id_user?: number;
    img_user: string;
    username: string;
    type_user: string;
}

export interface IAdmin extends IUser {
    admin:{
        id_admin: number;
        id_user: number;
    }
}