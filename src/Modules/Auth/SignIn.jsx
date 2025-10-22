import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import SignInputField from "../../Components/SignInputField";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () =>{
    const newErrors = {};
    if(!formData.email) newErrors.email = "Email is Required";
    if(!formData.password) newErrors.password = "Password is Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
      console.log(formData);
      
    }
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
         <SignInputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          error={errors.email}
          icon={Mail}
        />

        <SignInputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          error={errors.password}
          icon={Lock}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignIn;
