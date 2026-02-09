import React, { useState } from "react";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

export default function InputElement({
  type,
  placeholder,
  value,
  onChange,
  name,
  errorMessage,
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputType =
    type === "password" ? (passwordVisible ? "text" : "password") : type;

  return (
    <div className="w-full relative">
      <div className="w-full relative transition-all duration-300">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full border tracking-wide text-sm ${
            errorMessage
              ? "border-red-500 focus:border-red-600"
              : "border-gray-500 focus:border-black hover:border-gray-900"
          } outline-none focus:shadow-md focus:shadow-[#9fd094be] duration-300 rounded-full px-7 py-3 `}
          placeholder={placeholder}
          aria-invalid={errorMessage ? "true" : "false"}
          aria-describedby={errorMessage ? `${name}-error` : undefined}
        />
        {type === "password" &&
          (passwordVisible ? (
            <PiEyeLight
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-[50%] right-[5%] size-5 transform -translate-y-1/2 text-gray-600 cursor-pointer hover:text-black duration-200 transition-all"
              aria-label="Hide password"
            />
          ) : (
            <PiEyeSlashLight
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-[50%] right-[5%] size-5 transform -translate-y-1/2 text-gray-600 cursor-pointer hover:text-black duration-200 transition-all"
              aria-label="Show password"
            />
          ))}
      </div>
      <AnimatePresence>
        {errorMessage && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-xs w-full text-start pl-5 text-red-500 mt-1"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
