import React, { useEffect, useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import NotFoundPage from "../pages/NotFound";
import RegisterPage from "../pages/Register";

const AppRoutes = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  const registerUser = async (formData) => {
    try {
      await api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao realizar o cadastro");
    }
  };

  const loginUser = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);

      setUser(data.user);
      localStorage.setItem("@USER_ID", data.user.id);
      localStorage.setItem("@USER_TOKEN", data.token);

      toast.success("Login realizado com sucesso!");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("E-mail ou senha incorretos!");
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@USER_ID");
    localStorage.removeItem("@USER_TOKEN");
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<HomePage user={user} userLogout={userLogout} />}
      />
      <Route path="/" element={<LoginPage loginUser={loginUser} />} />
      <Route
        path="/register"
        element={<RegisterPage registerUser={registerUser} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
