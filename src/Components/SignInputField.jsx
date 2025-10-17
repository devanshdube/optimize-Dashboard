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
      </div>
    </>
  );
};

export default SignInputField;
