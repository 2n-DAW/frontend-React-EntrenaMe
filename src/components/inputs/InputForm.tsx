interface InputFormProps<T> {
    label: string;
    name: keyof T;
    type: string;
    register: any;
    error?: string;
}

const InputForm = <T,>({ label, name, type, register, error }: InputFormProps<T>) => {
    return (
        <div>
            <label>
                {label}
                <input
                    style={{ color: "black" }}
                    type={type}
                    {...register(name)}
                />
            </label>
            {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
    );
};

export default InputForm;