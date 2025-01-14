import { IInputFormProps } from "../../shared/interfaces/InterfacesComponents/inputs/InputForm.interface";


const InputForm = <T,>({ label, name, type, register, error}: IInputFormProps<T>) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name as string} className="text-text2"></label>
                {label}
                <input
                    id = {name as string}
                    className={`bg-input1 text-input1_text p-2 rounded ${error ? 'border border-red-500' : ''}`}
                    type={type}
                    {...register(name)} />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default InputForm;