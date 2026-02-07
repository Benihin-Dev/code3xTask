import "./App.css";
import React from "react";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

function App() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <div className="App">
      <div className="font-poppins w-full overflow-hidden relative">
        <div className=" w-full  mx-auto mt-10">
          <div className="md:w-10/12 w-11/12 mx-auto md:flex border gap-5 border-red-500">
            <div className=" w-full md:w-5/12 border pb-20 border-black">
              <div className=" w-10/12 mx-auto pt-10">
                <h1 className=" font-bold text-4xl">Welcome back!</h1>
                <h3 className=" pt-4 px-5 text-sm text-gray-500">
                  Simplify your workflow and boost your productivity with{" "}
                  <span className=" text-gray-600 font-semibold">
                    Tuga's App.
                  </span>
                  Get started for free.
                </h3>
                <div className=" mt-10 space-y-4">
                  <input
                    type="text"
                    className=" w-full border tracking-wide text-sm border-gray-500 focus:border-black hover:border-gray-900 outline-none focus:shadow-md focus:shadow-[#9fd094be] duration-300 rounded-full px-7 py-3"
                    placeholder="Username"
                  />
                  <div className=" w-full relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className=" w-full border tracking-wide text-sm border-gray-500 focus:border-black hover:border-gray-900  outline-none duration-300 rounded-full px-7 py-3 "
                      placeholder="Password"
                    />
                    {passwordVisible ? (
                      <PiEyeLight
                        onClick={() => {
                          setPasswordVisible(!passwordVisible);
                        }}
                        className=" absolute top-[50%] right-[5%] size-5 transform -translate-y-1/2 text-gray-600 cursor-pointer hover:text-black duration-200 transition-all"
                      />
                    ) : (
                      <PiEyeSlashLight
                        onClick={() => {
                          setPasswordVisible(!passwordVisible);
                        }}
                        class
                        className=" absolute top-[50%] right-[5%] size-5 transform -translate-y-1/2 text-gray-600 cursor-pointer hover:text-black duration-200 transition-all"
                      />
                    )}
                  </div>
                  <div className=" flex items-center justify-end pr-1">
                    <h4 className="  -translate-y-1 text-[10px] text-gray-600 font-semibold cursor-pointer hover:text-black duration-300 transition-all">
                      Forgot Password?
                    </h4>
                  </div>
                  <button className=" w-full bg-[#010101] py-3 px-5 text-white tracking-wide rounded-full hover:shadow-md hover:shadow-[#9fd094be] duration-300">
                    Login
                  </button>
                  <div className=" w-full flex text-center items-center justify-between gap-1 mt-4">
                    <div className=" w-full border-gray-300 border-b"></div>
                    <div className=" w-full">
                      <p className=" text-sm text-gray-500 cursor-default">
                        or continue with
                      </p>
                    </div>{" "}
                    <div className=" w-full border-gray-300 border-b"></div>
                  </div>
                  <div className=" w-full flex items-center justify-center gap-4 mt-4 ">
                    <div className=" p-3 group bg-[#010101] rounded-full">
                      <FaGoogle className=" size-5 text-white cursor-pointer group-hover:text-[#9fd094] duration-200 transition-all" />
                    </div>
                    <div className=" p-3 group bg-[#010101] rounded-full">
                      <FaApple className=" size-5 text-white cursor-pointer group-hover:text-[#9fd094] duration-200 transition-all" />
                    </div>
                    <div className=" p-3 group bg-[#010101] rounded-full">
                      <FaFacebook className=" size-5 text-white cursor-pointer group-hover:text-[#9fd094] duration-200 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-7/12 border border-blue-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
