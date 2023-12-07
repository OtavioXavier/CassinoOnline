'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import HeaderHome from "../components/header/header";
import Footer from "../components/Footer/Footer";
import MarginSidebar from '../components/header/Sidebar/MarginSidebar';
const inter = Inter({ subsets: ["latin"] });
import React from "react";


export default function RootLayout({ children }) {
  const [sidebar, setSidebar] = React.useState(false);

  const toggleSidebar = () => {
    if(sidebar === true) {
      setSidebar(false);
      return false;
    } else {
      setSidebar(true);
      return true;
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderHome toggleSidebar={toggleSidebar} />
        <div className="flex">
            <MarginSidebar isOpen={sidebar}>
            {children}
            <Footer />
            </MarginSidebar>
        </div>
      </body>
    </html>
  );
}