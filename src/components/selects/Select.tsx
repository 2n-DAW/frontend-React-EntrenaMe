import React from 'react';
import { ISelectProps } from '../../shared/interfaces/InterfacesComponents/selects/Select.interface';


const Select= ({label, id, options, data, error = '', placeholder = '', onDataChange}:ISelectProps) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onDataChange(event.target.value);
    };

    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-text2">
                {label}
            </label>
            <select
                id={id}
                value={data}
                onChange={handleChange}
                className={`bg-input1 text-input1_text p-2 rounded ${error ? 'border border-red-500' : ''}`}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default Select;
