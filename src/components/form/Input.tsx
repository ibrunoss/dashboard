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
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      <input
        className="px-4 py-3 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:outline-none focus:bg-gray-50"
        type={type || "text"}
        onChange={({ target }) => onChange?.(target.value)}
        value={value}
        required={required}
      />
    </div>
  );
};

export default Input;
