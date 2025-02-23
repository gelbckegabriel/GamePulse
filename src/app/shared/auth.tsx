import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CreateUser } from "./create-user";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const UserAuth = ({ isOpen, setIsOpen }: Props) => {
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll"
          >
            <motion.div
              initial={{
                scale: 0,
                rotate: "22.5deg",
                transition: { duration: 0.3 },
              }}
              animate={{
                scale: 1,
                rotate: "0deg",
                transition: { duration: 0.3 },
              }}
              exit={{ scale: 0, rotate: "0deg", transition: { duration: 0.2 } }}
              onClick={(e) => e.stopPropagation()}
              className="m-auto w-full md:w-[70%] lg:w-[35%] h-fit p-4 md:p-8 lg:p-12 bg-white bg-opacity-45 backdrop-blur-md border border-white border-opacity-50 rounded-lg shadow-lg"
            >
              {/* CLOSE BUTTON */}
              <div
                className="absolute right-2 top-2 md:right-3 md:top-3 lg:right-3 lg:top-3 w-8 h-8"
                onClick={() => setIsOpen(false)}
              >
                <IoIosCloseCircleOutline className="mx-auto mt-1 cursor-pointer text-xl md:text-xl" />
              </div>

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
                  <p className="text-sm text-[#727070] text-opacity-90 cursor-pointer hover:text-[gray-700] hover:underline">
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
                  <span
                    onClick={() => setOpenCreate(true)}
                    className="text-[#727070] text-opacity-90 cursor-pointer hover:text-[gray-700] hover:underline"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CreateUser openCreate={openCreate} setOpenCreate={setOpenCreate} />
    </>
  );
};
