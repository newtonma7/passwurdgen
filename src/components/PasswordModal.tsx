import React from "react";
import OptionsForm from "./OptionsForm";
import type { PasswordOptions } from "../types/PasswordOptions";

interface PasswordModalProps{
    options: PasswordOptions;
    setOptions: React.Dispatch<React.SetStateAction<PasswordOptions>>;
}

export default function PasswordModal({options, setOptions} : PasswordModalProps){

    return (
        <div className="flex flex-col mb-32 items-center gap-2 bg-slate-600 rounded-2xl p-6">
            <h2 className="text-center text-white text-4xl mb-6 font-semibold">Password Generator</h2>
            <OptionsForm options={options} setOptions ={setOptions}/>
        </div>
    )
}