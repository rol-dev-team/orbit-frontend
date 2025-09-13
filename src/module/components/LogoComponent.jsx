import React from "react";
import { Link } from "react-router";
import logo from "../../assets/header-logo.png";

export const LogoComponent = () => {
  return (
    <Link class='navbar-brand' to='/'>
      <img src={logo} alt='Orbit' width='100%' height='60' />
    </Link>
  );
};
