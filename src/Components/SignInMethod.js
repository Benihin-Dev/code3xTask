import React from "react";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
import GoogleSignIn from "./GoogleSignIn";

export default function SignInMethod() {
  const socialIcons = [
    {
      icon: FaGoogle,
      name: "Google",
      link: "#",
    },
    {
      icon: FaApple,
      name: "Apple",
      link: "#",
    },
    {
      icon: FaFacebook,
      name: "Facebook",
      link: "#",
    },
  ];

  const [isGoogleSignIn, setIsGoogleSignIn] = React.useState(false);

  return (
    <div className="w-full flex items-center justify-center gap-4 pt-5">
      {socialIcons.map((social, index) => {
        const Icon = social.icon;

        return (
          <div
            key={index}
            onClick={() => {
              setIsGoogleSignIn(social.name === "Google" ? true : false);
            }}
            className="p-3 group hover:shadow-[#9fd094] hover:shadow-md cursor-pointer bg-themeBlack rounded-full"
          >
            <Icon className="size-5 text-white group-hover:scale-105 group-hover:text-[#9fd094] transition-all duration-200" />
          </div>
        );
      })}
      <AnimatePresence>
        {isGoogleSignIn && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className=" w-full h-screen fixed top-0 left-0  z-50 bg-black bg-opacity-90"
          >
            <div className=" w-full h-full flex items-center justify-center">
              <div className=" w-11/12 md:w-7/12 p-5 rounded-lg bg-white">
                <div className=" w-full flex items-center justify-end">
                  <VscClose
                    onClick={() => {
                      setIsGoogleSignIn(false);
                    }}
                    className=" duration-300 transition-all text-gray-400 font-thin hover:text-black text-2xl -translate-y-2 translate-x-2 cursor-pointer"
                  />
                </div>
                <GoogleSignIn />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
