import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

export const Input = ({ placeholder, label, ...rest }: IInputProps) => (
  <div>
    {label && <label>{label}</label>}
    <input placeholder={placeholder} {...rest} />
  </div>
);
