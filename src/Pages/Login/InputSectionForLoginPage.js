import React, { useState } from "react";
import InputElement from "../../Components/InputElement";
import MainBtn from "../../Components/MainBtn";
import SignInMethod from "../../Components/SignInMethod";
import { useNavigate } from "react-router-dom";

export default function InputSectionForLoginPage({ setUserEmailAddress }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Handle input changes and validate
  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate on change
    if (name === "email") {
      if (!value) {
        setErrors((prev) => ({ ...prev, email: null }));
      } else if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: null }));
      }
    }

    if (name === "password") {
      if (!value) {
        setErrors((prev) => ({ ...prev, password: null }));
      } else if (!validatePassword(value)) {
        setErrors((prev) => ({
          ...prev,
          password: "Password must be at least 6 characters long.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: null }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);

    // If no errors, proceed with login
    if (Object.keys(newErrors).length === 0) {
      console.log("Login Success!", formData);
      setUserEmailAddress(formData.email);
      navigate("/welcome");
    }
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto pt-10">
      <h1 className="font-bold text-4xl">Welcome back!</h1>
      <h3 className="pt-4 md:px-5 text-sm text-gray-500">
        Simplify your workflow and boost your productivity with{" "}
        <span className="text-gray-600 font-semibold">Tuga's App.</span>
        Get started for free.
      </h3>
      <form onSubmit={handleSubmit} className="mt-10 space-y-3">
        <InputElement
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
          errorMessage={errors.email}
        />
        <InputElement
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
          errorMessage={errors.password}
        />
        <div className="flex items-center justify-end pr-1">
          <h4 className="-translate-y-1 text-[10px] text-gray-700 font-semibold cursor-pointer hover:text-black duration-300 transition-all">
            Forgot Password?
          </h4>
        </div>
        <MainBtn text={"Login"} type="submit" />
        <div className="w-full flex text-center items-center justify-between gap-1 mt-4 pt-3">
          <div className="w-full border-gray-300 border-b"></div>
          <div className="w-fit">
            <p className="text-sm text-gray-700 cursor-default text-nowrap">
              or continue with
            </p>
          </div>
          <div className="w-full border-gray-300 border-b"></div>
        </div>
        <SignInMethod />
        <div className="w-full text-center flex items-center justify-center pt-5 md:pt-10 tracking-tight">
          <p className="text-sm text-gray-700 cursor-default">
            Not a member?{" "}
            <span className="font-[400] cursor-pointer hover:text-[#010101] text-[#698363] duration-300 transition-all">
              Register now
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
