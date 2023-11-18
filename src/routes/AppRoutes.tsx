import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.page";
import Login from "../pages/Login.page";
import Signup from "../pages/Signup.page";
import Wallet from "../pages/Wallet.page";
import NavbarLayout from "../layout/Navbar.layout";
import BackgroundLayout from "../layout/Background.layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BackgroundLayout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route element={<NavbarLayout />}>
          <Route path="wallet" element={<Wallet />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
