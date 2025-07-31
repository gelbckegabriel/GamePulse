"use client";

import { Roboto, Inter, Noto_Sans } from "next/font/google";
import Header from "./shared/header";
import Footer from "./shared/footer";

import "./globals.css";
import { ScrollToTopButton } from "./shared/utilities/scroll-to-top";

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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <title>GamePulse</title>
      </head>
      <body className={`${roboto.variable} ${inter.variable} ${notoSans.variable} antialiased bg-black`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
