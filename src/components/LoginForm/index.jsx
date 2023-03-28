import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LoginInput from "../LoginInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormLoginSchema } from "./registerFormLoginSchema";
import { FormLogin } from "./style";

const LoginForm = ({ loginUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerFormLoginSchema),
  });

  const submit = (formData) => {
    console.log(formData);
    loginUser(formData);
    reset();
  };
  return (
    <FormLogin onSubmit={handleSubmit(submit)} noValidate>
      <LoginInput
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        error={errors.email}
      />

      <LoginInput
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        error={errors.password}
      />

      <button type="submit">Entrar</button>

      <span>Ainda não possui conta?</span>

      <Link to="/register">Cadastre-se</Link>
    </FormLogin>
  );
};

export default LoginForm;
