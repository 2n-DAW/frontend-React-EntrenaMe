export interface ISelectFormOption {
    value: string | number;
    label: string;
}

export interface ISelectFormProps<T> {
    label: string;
    name: keyof T;
    options: ISelectFormOption[];
    register: any;
    error?: string;
}