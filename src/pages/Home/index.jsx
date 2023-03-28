import React from "react";
import logo from "../../assets/logo.svg";
import { Container } from "./style";
import { MainHome } from "./style";
import { ContainerBorder } from "./style";

const HomePage = ({ user, userLogout }) => {
  return (
    <Container>
      <ContainerBorder>
        <header>
          <img src={logo} alt="Logo Kenzie Hub" />
          <button
            onClick={() => {
              userLogout();
            }}
          >
            Sair
          </button>
        </header>
      </ContainerBorder>

      <MainHome>
        <ContainerBorder>
          <div className="containerDataUser">
            <h1>Olá, {user.name}</h1>
            <span>{user.course_module}</span>
          </div>
        </ContainerBorder>

        <section>
          <h1>Que pena! Estamos em desenvolvimento :(</h1>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </section>
      </MainHome>
    </Container>
  );
};

export default HomePage;
