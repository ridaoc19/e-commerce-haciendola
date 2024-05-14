import React from 'react';
import './select.scss';

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string | number;
  onChange: (value: string) => void;
  disabled: boolean
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, disabled }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} disabled={disabled} onChange={handleChange} className="custom-select">
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;
