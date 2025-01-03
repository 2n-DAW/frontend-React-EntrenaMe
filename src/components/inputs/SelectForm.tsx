import { ISelectFormProps } from "../../shared/interfaces/InterfacesComponents/inputs/SelectForm.interface";


const SelectForm = <T,>({ label, name, options, register, error }: ISelectFormProps<T>) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name as string} className="text-text2">
                {label}
            </label>
            <select
                id={name as string}
                className={`bg-input1 text-input1_text p-2 rounded ${error ? 'border border-red-500' : ''}`}
                {...register(name)}
            >
                <option value="" disabled hidden>
                    Selecciona una opción
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default SelectForm;
