"use client";

import { useState } from "react";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaFacebook, FaGoogle, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function userAuth() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

  return (
    <>
      <div className="bg-[url('/home/basketball2.webp')] h-[100vh]">

      </div>
    </>
  );
}
