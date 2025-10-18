import React from "react";
import type { PasswordOptions } from "../types/PasswordOptions";

interface OptionsFormProps{
    options: PasswordOptions;
    setOptions: React.Dispatch<React.SetStateAction<PasswordOptions>>;
    onGenerate: () => void;
}

export default function OptionsForm({options, setOptions, onGenerate}: OptionsFormProps){

    const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptions({
            ...options,
            length: parseInt(e.target.value,10),
        });
    };

    const handleCheckboxChange = (key: keyof PasswordOptions) => {
        setOptions({
           ...options,
        [key]: !options[key], 
        });
    };

    const handleGenerateClick = () => {
        onGenerate();
    }

    return (
        <div className = "flex flex-col gap-4 text-white">
            <div className="flex flex-col gap-2 mb-1">
                <div className="flex justify-between items-center shrink-0">
                    <label className = "text-xl text-white" htmlFor="length">Password Length:</label>
                    <span className="text-xl font-bold text-white m-6 w-12">{options.length}</span>
                    <input 
                        id="length"
                        type="range"
                        min={8}
                        max={32}
                        value={options.length}
                        onChange={handleLengthChange}
                        className = "w-full cursor-pointer accent-slate-900 h-2 bg-slate-300 rounded-lg appearance-none "
                        />
                </div>
            </div>

            <div className="flex flex-row gap-4 items-center">
                <input 
                    id="includeUppercase"
                    type="checkbox"
                    checked={options.includeUppercase}
                    onChange={() => handleCheckboxChange('includeUppercase')}
                    className ="w-5 h-5"
                    ></input>
                <label htmlFor="includeUppercase" className="text-xl">Include uppercase </label>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <input 
                    id="includeNumbers"
                    type="checkbox"
                    checked={options.includeNumbers}
                    onChange={() => handleCheckboxChange('includeNumbers')}
                    className ="w-5 h-5"
                    ></input>
                <label htmlFor="includeNumbers" className="text-xl">Include numbers</label>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <input 
                    id="includeSymbols"
                    type="checkbox"
                    checked={options.includeSymbols}
                    onChange={() => handleCheckboxChange('includeSymbols')}
                    className ="w-5 h-5"
                    ></input>
                <label htmlFor="includeSymbols" className="text-xl">Include symbols</label>
            </div>
            <button
                className="m-auto mt-3 rounded-xl bg-blue-500 w-24 h-10 text-base hover:bg-blue-700 transition-colors ease-in-out duration-300"
                onClick = {handleGenerateClick}
            >
                Generate
            </button>
        </div>
    )
}