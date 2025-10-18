import { useState } from 'react';
import type {PasswordOptions} from "../src/types/PasswordOptions";
import PasswordModal from './components/PasswordModal';
import { generatePassword } from './utils/generator';
import PasswordDisplay from './components/PasswordDisplay';

function App() {
  // starting/default values for password options
const [options, setOptions] = useState<PasswordOptions>({
  length: 12,
  includeUppercase: false,
  includeNumbers: false,
  includeSymbols: false,
});

const [password, setPassword] = useState<string>('');
const [isResultVisible, setIsResultVisible] = useState<boolean>(false);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(options);
    setPassword(newPassword);
    setIsResultVisible(true); 
  };

  const handleCloseResult = () => {
    setIsResultVisible(false);
  }

  return (
  <div className = "min-h-screen bg-slate-400 flex items-center justify-center">
    {isResultVisible ? (<PasswordDisplay password ={password} onClose = {handleCloseResult}/>) 
    : (<PasswordModal options={options} setOptions={setOptions} onGenerate={handleGeneratePassword}/>)}
  </div>
  )
}

export default App
