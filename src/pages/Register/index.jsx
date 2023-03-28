import React from "react";
import { Container } from "./style";
import { MainRegister } from "./style";
import RegisterForm from "../../components/RegisterForm";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const RegisterPage = ({ registerUser }) => {
  return (
    <Container>
      <header>
        <img src={logo} alt="Logo Kenzie Hub" />
        <Link to={"/"}>Voltar</Link>
      </header>
      <MainRegister>
        <h1>Crie sua conta</h1>
        <span>Rápido e grátis, vamos nessa</span>
        <RegisterForm registerUser={registerUser} />
      </MainRegister>
    </Container>
  );
};

export default RegisterPage;
