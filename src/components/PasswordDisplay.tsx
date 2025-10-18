import { useState } from 'react';


interface PasswordDisplayProps {
  password: string;   
  onClose: () => void; 
}

export default function PasswordDisplay({password, onClose}: PasswordDisplayProps){
    const [copyText, setCopyText] = useState('Copy');

    const handleCopyClick = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        // If the copy is successful, provide feedback to the user
        setCopyText('Copied!');
        // After 2 seconds, reset the button text back to "Copy"
        setTimeout(() => {
          setCopyText('Copy');
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy password: ', err);
      });
    };
    
  return (
    <div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 flex flex-col items-center text-white shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Your New Password</h3>
      <div 
        className="w-full bg-slate-900 p-4 rounded-lg text-center font-mono text-xl text-blue-400 break-all mb-6"
        aria-live="polite"
      >
        {password}
      </div>
      <div className="w-full flex gap-4">
        <button
          onClick={handleCopyClick}
          className="flex-1 py-3 bg-blue-500 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200"
        >
          {copyText}
        </button>
        <button
          onClick={onClose}
          className="flex-1 py-3 bg-zinc-600 rounded-lg font-bold hover:bg-zinc-700 transition-colors duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );

}