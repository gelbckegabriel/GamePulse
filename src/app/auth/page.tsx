"use client";

import { useState } from "react";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaFacebook, FaGoogle, FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail, MdEmail } from "react-icons/md";

export default function userAuth() {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const togglePasswordView = () => setShowPassword(!showPassword);

  return (
    <>
      {/* <div className="bg-background h-[100vh]"> */}
      {/* <div className="bg-white h-[100vh]"> */}
      <div className="bg-[url('/home/basketball2.webp')] h-[100vh]">
        <div className="mx-auto w-[80vh] h-[70vh] p-12 bg-white bg-opacity-40 backdrop-blur-md border border-white border-opacity-50 rounded-lg shadow-lg">
          {/* REGISTER WITH */}
          <div className="flex flex-col align-center items-center justify-center">
            <p className="text-sm2">Register with:</p>
            <div className="flex justify-between w-full pt-4">
              <button className="flex justify-center p-2 rounded-lg bg-white bg-opacity-15 border-white border-opacity-10 backdrop-blur-md shadow-lg min-w-[45%]">
                <FaFacebook className="text-lg md:text-xl" />
                <span className="pl-2 text-sm">Facebook</span>
              </button>

              <button className="flex justify-center p-2 rounded-lg bg-white bg-opacity-15 border-white border-opacity-10 backdrop-blur-md shadow-lg min-w-[45%]">
                <FaGoogle className="text-lg md:text-xl" />
                <span className="pl-2 text-sm">Google</span>
              </button>
            </div>
          </div>

          {/* SEPARATOR */}
          <div className="flex items-center my-8 w-full">
            <div className="flex-grow border-t border-black border-opacity-50" />
            <p className="px-4 text-sm">Or</p>
            <div className="flex-grow border-t border-black border-opacity-50" />
          </div>

          {/* FORM */}
          <div className="login_form">
            <p className="text-sm2">Username or email</p>
            <div className="bg-white bg-opacity-15 border-white border-opacity-10 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
              <MdEmail />
              <input
                type="email"
                className="bg-transparent border-0 w-full outline-none text-sm"
              />
            </div>
            <div className="flex justify-between">
              <p>Password</p>
              <p>Forgot Password?</p>
            </div>
            <input type="password" placeholder="Password" className="" />
            <div>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <button>Log In</button>
          </div>

          {/* FOOTER */}
          <div className="footer">
            <p>Do not have an account? Sign Up</p>
          </div>
        </div>
      </div>
    </>
  );
}
