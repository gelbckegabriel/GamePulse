import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CreateUser } from "./create-user";
import { Tooltip } from "@material-tailwind/react";
import { Button } from "../utilities/button";
import { ProviderAuth } from "./provider-auth";
import { firebaseAuth, googleProvider } from "@/app/services/firebase";
import { signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useSelector } from "react-redux";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const UserAuth = ({ isOpen, setIsOpen }: Props) => {
  // TODO: Implement Redux logic here to pass the user values like ID, Names and etc throughout the application.
  const user = useSelector((state: any) => state.user.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openProvider, setOpenProvider] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    } // Nettoyage au démontage

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handlePasswordSignIn = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;

        console.error(errorCode, errorMessage);
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const viewUser = () => {
    console.log(user);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={() => setIsOpen(false)}
            className="bg-black/50 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-hidden"
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
              className="m-auto w-full md:w-[70%] lg:w-[35%] h-fit p-4 md:p-8 lg:p-12 text-white bg-backgroundModal bg-opacity-90 backdrop-blur-md border border-transparent border-opacity-70 rounded-lg shadow-lg"
            >
              {/* CLOSE BUTTON */}
              <div className="absolute right-2 top-2 md:right-3 md:top-3 lg:right-3 lg:top-3 w-8 h-8" onClick={() => setIsOpen(false)}>
                <IoIosCloseCircleOutline className="mx-auto mt-1 cursor-pointer text-xl md:text-xl" />
              </div>

              {/* REGISTER WITH */}
              <div className="flex flex-col align-center items-center justify-center">
                <p className="text-sm2">Register with:</p>
                <div className="w-full mt-4 flex justify-center gap-10 md:gap-20">
                  <div className="w-[50%] md:w-[30%]">
                    <div
                      onClick={() => handleGoogleSignIn()}
                      className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex justify-center items-center gap-2 p-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-25"
                    >
                      <span className="flex items-center">
                        <img src="auth/google.webp" alt="google logo" className="h-8 w-8" />
                      </span>
                    </div>
                  </div>

                  {/* TODO: Facebook might be implemented later on */}
                  <div className="w-[50%] md:w-[30%]">
                    <Tooltip content="Not available yet !">
                      <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex justify-center items-center gap-2 p-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-opacity-25">
                        <span className="flex items-center">
                          <img src="auth/facebook.webp" alt="facebook logo" className="h-8 w-8" />
                        </span>
                      </div>
                    </Tooltip>
                  </div>
                </div>
              </div>

              {/* SEPARATOR */}
              <div className="flex items-center my-6 w-full">
                <div className="flex-grow border-t border-white border-opacity-50" />
                <p className="px-4 text-sm">Or</p>
                <div className="flex-grow border-t border-white border-opacity-50" />
              </div>

              {/* FORM */}
              <form className="login_form">
                <p className="text-sm2 mb-1">Username or email</p>
                <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                  <MdEmail />
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent pl-1 border-0 w-full outline-none text-sm2"
                  />
                </div>
                <div className="mt-6 flex justify-between">
                  <p className="text-sm2 mb-1">Password</p>
                  <p className="text-sm text-gray-500 text-opacity-90 cursor-pointer hover:text-[gray-700] hover:underline">Forgot Password?</p>
                </div>
                <div className="bg-white bg-opacity-15 backdrop-blur-md shadow-lg w-full flex items-center gap-2 p-2 rounded-xl">
                  <FaFingerprint />
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent pl-1 border-0 w-full outline-none text-sm2"
                  />
                  {showPassword ? (
                    <FaRegEye className="cursor-pointer mr-1" onClick={togglePasswordView} />
                  ) : (
                    <FaRegEyeSlash className="cursor-pointer mr-1" onClick={togglePasswordView} />
                  )}
                </div>

                <div className="mt-8 flex justify-center">
                  <Button className="w-[50%] hover:scale-110" onClick={() => handlePasswordSignIn()}>
                    Login
                  </Button>
                </div>
              </form>

              <button onClick={() => viewUser()}>test</button>

              {/* FOOTER */}
              <div className="mt-8 flex justify-center text-sm">
                <p>
                  Do not have an account?{" "}
                  <span
                    onClick={() => setOpenCreate(true)}
                    className="text-gray-500 text-opacity-90 cursor-pointer hover:text-[gray-700] hover:underline"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CreateUser openCreate={openCreate} setOpenCreate={setOpenCreate} setAuthOpen={setIsOpen} />
      {/* TODO: CREATE A LOGIC TO OPEN ONLY WHEN IT IS A NEW USER AUTHENTICATING WITH THE PROVIDER. */}
      <ProviderAuth openProvider={openProvider} setOpenProvider={setOpenProvider} />
    </>
  );
};
