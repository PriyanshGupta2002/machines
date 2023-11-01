import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "../../pages/Login";
interface InputProps {
  register: UseFormRegister<FormValues>;
  id: "username" | "password"; // Use a union type instead of string literal
  label: string;
  errors: FieldErrors;
  type: string;
  required?: boolean;
  placeholder: string;
}
const Input: React.FC<InputProps> = ({
  errors,
  id,
  label,
  register,
  type,
  required,
  placeholder,
}) => {
  console.log(errors);
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        type={type}
        {...register(id, { required })}
        className={`h-8 p-8 w-full placeholder-transparent placeholder:text-base border-2 rounded-md peer ${
          errors[id] ? "focus:border-rose-500" : "focus:border-neutral-300"
        } ${!errors[id] ? "border-neutral-300" : "border-rose-500"}`}
      />
      <label
        htmlFor=""
        className="absolute top-1 text-neutral-400 text-sm left-4 peer-focus:top-1 transition-all ease-linear peer-focus:left-4 peer-focus:text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
