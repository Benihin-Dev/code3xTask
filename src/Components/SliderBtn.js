import React from "react";

export default function SliderBtn() {
  const [activeBtn, setActiveBtn] = React.useState(1);
  return (
    <div className=" w-full h-10 my-5 flex items-center justify-center gap-1.5">
      {[1, 2, 3].map((num) => (
        <div
          onClick={() => {
            setActiveBtn(num);
          }}
          key={num}
          className={`rounded-full h-2.5 transition-all duration-300 cursor-pointer ${num === activeBtn ? "bg-themeBlack w-5" : "bg-gray-300 w-2.5"}`}
        ></div>
      ))}
    </div>
  );
}
