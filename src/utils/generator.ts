import type { PasswordOptions } from "../types/PasswordOptions";

const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

export function generatePassword(options: PasswordOptions): string{
    let allowedChars = LOWERCASE_CHARS;

    if (options.includeUppercase){
        allowedChars += UPPERCASE_CHARS;
    }

    if (options.includeNumbers){
        allowedChars += NUMBER_CHARS;
    }

    if (options.includeSymbols){
        allowedChars += SYMBOL_CHARS;
    }

  let password = '';
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  
  return password;

}