import React from "react";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import { Container } from "./style";

const LoginPage = ({ loginUser }) => {
  return (
    <Container>
      <Header />
      <div>
        <h1>Login</h1>
        <LoginForm loginUser={loginUser} />
      </div>
    </Container>
  );
};

export default LoginPage;
