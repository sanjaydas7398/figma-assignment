import React, { useState } from 'react';
import styles from './InputField.module.scss';

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    const formattedValue = rawValue
      .toUpperCase() 
      .replace(/[^A-Z0-9]/g, '') 
      .slice(0, 10); 
    let panFormatted = formattedValue.replace(
      /^([A-Z]{5})(\d{4})([A-Z]{1})$/,
      '$1$2$3'
    );

    setInputValue(panFormatted); 
  }

  return (
    <div className={`${styles.inputContainer} ${isFocused ? styles.focused : ''}`}>
      <input
        type="text"
        className={styles.inputField}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== '')}
      />
      <label className={`${styles.inputLabel} ${isFocused ? styles.active : ''}`}>{label}</label>
    </div>
  );
};

export default InputField;
