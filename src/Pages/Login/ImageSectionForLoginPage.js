import React from "react";
// images
import meditationGirlImage from "../../assets/images/meditationGirl.svg";
import girlProfilelImage from "../../assets/images/girlProfile.svg";
import boyProfileImage from "../../assets/images/boyProfile.svg";
import ProgressCircle from "../../Components/ProgressCircle";
import SliderBtn from "../../Components/SliderBtn";
import { motion } from "framer-motion";

export default function ImageSectionForLoginPage() {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      <div className=" w-full">
        <div className=" w-full px-10 relative">
          <img
            src={meditationGirlImage}
            className=" object-cover w-10/12 mx-auto"
            alt="Girl Profile"
          />
          <motion.img
            src={boyProfileImage}
            alt="Boy Profile"
            className=" absolute w-[20%] aspect-square object-cover top-[15%] right-[80%]"
          />

          <motion.img
            src={girlProfilelImage}
            alt="Girl Profile"
            className=" absolute w-[20%] aspect-square object-cover bottom-[10%] left-[80%]"
          />
          <div className="absolute scale-50 md:scale-y-75 lg:scale-y-100 md:scale-x-110  bottom-0 left-0 body-bg border border-gray-500 p-5 pr-6 rounded-tr-[30px]  rounded-tl-[35px]  rounded-br-[38px] rounded-bl-[35px]">
            <h2 className=" font-semibold text-themeBlack tracking-tight">
              Canve Design
            </h2>
            <h6 className="text-sm pb-6 font-thin w-full text-start leading-3 text-gray-400 tracking-tight">
              10 Task
            </h6>
            <div className=" flex items-center justify-between">
              <p className=" cursor-default w-fit px-3 py-1 font-poppins rounded-full border border-gray-500 tracking-tight">
                {" "}
                Design
              </p>
              <div className=" cursor-default  absolute top-12 right-0">
                <ProgressCircle />
              </div>
            </div>
          </div>
        </div>
        <SliderBtn />
        <h2 className=" text-center text-themeBlack text-lg md:text-xl md:leading-5 w-11/12 md:w-9/12 leading-5 mx-auto tracking-tight">
          Make your work easier and organized with{" "}
          <span className="  font-semibold">Tuga's App</span>
        </h2>
      </div>
    </div>
  );
}
