import React from "react";
import logo from "../../assets/logo.svg";
import { HeaderLogin } from "./style";

const Header = () => {
  return (
    <HeaderLogin>
      <img src={logo} alt="Logo Kenzie Hub" />
    </HeaderLogin>
  );
};

export default Header;
