import React from "react";

export default function MainBtn({ text }) {
  return (
    <button className=" w-full bg-themeBlack font-normal py-3 px-5 text-white tracking-wide rounded-full hover:shadow-md hover:shadow-[#9fd094be] duration-300">
      {text}
    </button>
  );
}
