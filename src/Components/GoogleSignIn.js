import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import authImg from "../assets/images/Authentication.svg";

export default function GoogleSignIn() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithPopup(auth, googleProvider);
      // User signed in successfully
      console.log("User:", result.user);
      navigate("/welcome");
    } catch (error) {
      console.error("Google Sign-In Error:", error);

      if (error.code === "auth/popup closed by user") {
        alert("Sign-in popup was closed. Please try again.");
      } else if (error.code === "auth/cancelled-popup-request") {
      } else {
        alert("Failed to sign in with Google. Please try again.");
      }
    }
  };
  return (
    <div className="w-full">
      <div className=" w-full flex items-center justify-center">
        <img
          src={authImg}
          alt="Authentication"
          className="w-1/2  py-10 object-cover   "
        />
      </div>
      <div className="text-center mt-2 text-gray-500 text-sm">
        Sign in quickly and securely with your Google account.
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="w-fit mx-auto mt-4 flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 rounded-full px-6 py-2 transition-all duration-300"
      >
        <FcGoogle className="text-2xl" />
        <span className="text-sm font-medium text-gray-700">
          Continue with Google
        </span>
      </button>
    </div>
  );
}
