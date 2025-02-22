import { useState } from "react";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaFacebook, FaGoogle, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const UserLogin = ({ isOpen, setIsOpen }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

  return (
    <>
      <div className="m-auto w-[85%] md:w-[50%] lg:w-[35%] h-fit p-6 md:p-8 lg:p-12 bg-white bg-opacity-40 backdrop-blur-md border border-white border-opacity-50 rounded-lg shadow-lg">
        {/* REGISTER WITH */}
        <div className="flex flex-col align-center items-center justify-center">
          <p className="text-sm2">Register with:</p>
          <div className="flex justify-between w-full pt-4">
            <button className="flex justify-center p-2 bg-white bg-opacity-15 border-white border-opacity-10 backdrop-blur-md rounded-lg shadow-lg min-w-[45%] hover:bg-opacity-45 hover:scale-105 duration-500 ease-in-out">
              <FaFacebook className="text-lg md:text-xl" />
              <span className="pl-2 text-sm">Facebook</span>
            </button>

            <button className="flex justify-center p-2 bg-white bg-opacity-15 border-white border-opacity-10 backdrop-blur-md rounded-lg shadow-lg min-w-[45%] hover:bg-opacity-45 hover:scale-105 duration-500 ease-in-out">
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
          <p className="text-sm2 mb-1">Username or email</p>
          <div className="bg-white bg-opacity-15 border-white border-opacity-10 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
            <MdEmail />
            <input
              type="email"
              style={{ backgroundColor: "transparent" }}
              className="pl-1 border-0 w-full outline-none text-sm"
            />
          </div>
          <div className="mt-6 flex justify-between">
            <p className="text-sm2 mb-1">Password</p>
            <p className="text-sm text-white text-opacity-40 cursor-pointer hover:text-gray-700 hover:underline">
              Forgot Password?
            </p>
          </div>
          <div className="bg-white bg-opacity-15 border-white border-opacity-10 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
            <FaFingerprint />
            <input
              type={showPassword ? "text" : "password"}
              style={{ backgroundColor: "transparent" }}
              className="pl-1 border-0 w-full outline-none text-sm"
            />
            {showPassword ? (
              <FaRegEye
                className="cursor-pointer mr-1"
                onClick={togglePasswordView}
              />
            ) : (
              <FaRegEyeSlash
                className="cursor-pointer mr-1"
                onClick={togglePasswordView}
              />
            )}
          </div>

          {/* <div>
              <input type="checkbox" />
              <p>Remember me</p>
            </div> */}
          <button className="mt-8 py-2.5 px-10 w-full bg-white bg-opacity-75 border-white border-opacity-80 backdrop-blur-md rounded-lg shadow-lg text-sm2 hover:bg-opacity-85 hover:scale-105 duration-300 ease-in-out">
            Login
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-8 flex justify-center text-sm">
          <p>
            Do not have an account?{" "}
            <span className="text-white text-opacity-40 cursor-pointer hover:text-gray-700 hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
