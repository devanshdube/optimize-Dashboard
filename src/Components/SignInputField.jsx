import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignInputField = ({
  lable,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = "",
  icon: Icon,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;
  return (
    <>
      <div className="mb-4 w-full">
        {lable && (
          <>
            <lable
              htmlFor={name}
              className="block text-gray-700 font-medium mb-1"
            >
              {lable}
            </lable>
          </>
        )}

        <div className="relative">
          {Icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Icon size={18} />
            </span>
          )}

          <input
            id={name}
            name={name}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`w-full border border-gray-300 focus:border-[#0e1726] rounded-md p-2 outline-none transition-colors ${
              Icon ? "pl-10" : "pl-3"
            } ${type === "password" ? "pr-10" : ""} ${className}`}
          />

          {/* Password Toggle */}
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SignInputField;
