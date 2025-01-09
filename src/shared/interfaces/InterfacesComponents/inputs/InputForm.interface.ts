export interface IInputFormProps<T> {
    label: string;
    name: keyof T;
    type: string;
    register: any;
    error?: string;
}