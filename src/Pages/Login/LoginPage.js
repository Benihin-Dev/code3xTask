import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputSectionForLoginPage from "./InputSectionForLoginPage";
import ImageSectionForLoginPage from "./ImageSectionForLoginPage";

export default function LoginPage({ setUserEmailAddress }) {
  return (
    <div className="w-full mx-auto my-10">
      <div className="md:w-10/12 w-11/12 mx-auto md:flex gap-5">
        <AnimatePresence>
          <motion.div
            key="input-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full md:w-5/12"
          >
            <InputSectionForLoginPage
              setUserEmailAddress={setUserEmailAddress}
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            key="image-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full md:w-7/12 bg-[#f6f9f2] rounded-3xl p-4 md:p-10 mt-8 md:mt-0 overflow-hidden"
          >
            <ImageSectionForLoginPage />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
