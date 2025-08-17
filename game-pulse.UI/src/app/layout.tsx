"use client";

import { Roboto, Inter, Noto_Sans } from "next/font/google";
import Header from "./shared/header";
import Footer from "./shared/footer";

import "./globals.css";
import { FloatingDock } from "./shared/dock";
import { FaHome, FaInfo } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { PiCourtBasketballDuotone } from "react-icons/pi";
import { MdOutlineSportsHandball } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const links = [
  {
    title: "Home",
    icon: <FaHome className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />,
    href: "/",
  },
  {
    title: "About",
    icon: <FaInfo className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />,
    href: "/about",
  },
  {
    title: "Leaderboard",
    icon: <FaUserGroup className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />,
    href: "/leaderboard",
  },
  {
    title: "Courts",
    icon: <PiCourtBasketballDuotone className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />,
    href: "/courts",
  },
  {
    title: "Games",
    icon: <MdOutlineSportsHandball className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />,
    href: "/games",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/logos/GP_Icon-192.png" />
        <link rel="apple-touch-icon" type="image/png" href="/logos/GP_Icon-192.png" />
        <title>GamePulse</title>
      </head>
      <body className={`${roboto.variable} ${inter.variable} ${notoSans.variable} antialiased bg-black`}>
        <Header />
        {children}
        <Footer />
        {/* <ScrollToTopButton /> */}
        <FloatingDock
          desktopClassName="fixed bottom-5 left-1/2 -translate-x-1/2 z-[99]"
          mobileClassName="fixed bottom-5 right-6 z-[99]"
          items={links}
        />
      </body>
    </html>
  );
}
