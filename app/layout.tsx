import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

import Navbar from "./components/Navbar";
import SideSocial from "./components/SideSocial";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MohitCodes",
  description: "Portfolio of Mohit Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="shortcut icon"
          href="/Images/favicon.ico"
          type="image/x-icon"
        />
        <meta name="google-site-verification" content="5xTs1szjvqyrm60ikx4aODhoHTRll1HlyIKoHmt6BOM" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Navbar />
        <SideSocial />

        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
