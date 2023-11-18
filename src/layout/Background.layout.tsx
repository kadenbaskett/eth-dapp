import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

interface BackgroundLayoutProps {
  children?: React.ReactNode;
}

const BackgroundLayout = ({ children }: BackgroundLayoutProps) => {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900">
        {children || <Outlet />}
      </div>
    </>
  );
};

export default BackgroundLayout;
