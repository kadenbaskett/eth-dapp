import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

interface NavbarLayoutProps {
  children?: React.ReactNode;
}

const BaseLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <>
      <Navbar />
      {children || <Outlet />}
    </>
  );
};

export default BaseLayout;
