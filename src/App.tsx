import { useState } from 'react';
import type {PasswordOptions} from "../src/types/PasswordOptions";
import PasswordModal from './components/PasswordModal';

function App() {
  // starting/default values for password options
const [options, setOptions] = useState<PasswordOptions>({
  length: 12,
  includeUppercase: false,
  includeNumbers: false,
  includeSymbols: false,
});

const [password, setPassword] = useState<string>('');

  return (
  <div className = "min-h-screen bg-slate-400 flex items-center justify-center">
    <PasswordModal options={options} setOptions={setOptions}/>
  </div>
  )
}

export default App
