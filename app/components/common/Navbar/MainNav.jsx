"use client";

import { ThemeProvider } from "@/app/context/ThemeContext";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function MainNav() {
  return (
    <ThemeProvider>
      <div className="py-4 shadow z-40 bg-white dark:bg-slate-900 fixed top-0 left-0 right-0 transition-colors duration-300">
        <div className="container">
          <Navbar />
          <MobileNavbar />
        </div>
      </div>
    </ThemeProvider>
  );
}
