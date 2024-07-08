import React from "react";
import Navbar from "../utills/Navbar";
import UserSignin from "../auth/UserSignin";
import Footer from "../utills/Footer";
import UserSignupone from "../auth/UserSignupone";
import UserSignuptwo from "../auth/UserSignuptwo";
import Usersignupthree from "../auth/Usersignupthree";
import { Outlet } from "react-router-dom";
import Userforgot from "../auth/Userforgot";
import UserForgotVerify from "../auth/UserForgotVerify";
import UserForgotRenew from "../auth/UserForgotRenew";
import UserSignupverify from "../auth/UserSignupverify";

const Layout = () => {
  return (
    <>
      <Navbar />
      <UserForgotRenew />
      <Footer />
    </>
  );
};

export default Layout;
