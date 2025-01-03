export interface IUser {
    id_user?: string;
    img_user: string;
    username: string;
    type_user: string;
    email: string;
    name: string;
    surname: string;
    birthday: string;
    bio: string;
    is_active: boolean;
}

export interface IAdmin extends IUser {
    admin:{
        id_admin: number;
        id_user: string;
    }
}

export interface IInstructor extends IUser {
    instructor: {
        id_instructor?: number;
        id_user?: string;
        nif: string;
        tlfn: string;
        address: string;
    }
}