import React from "react";

interface InputProps {
  label: string;
  value: string;
  type?: "email" | "text" | "password";
  required?: boolean;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = (props) => {
  const { label, onChange, value, type, required } = props;
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type || "text"}
        onChange={({ target }) => onChange?.(target.value)}
        value={value}
        required={required}
      />
    </div>
  );
};

export default Input;
