import React from "react";
import { useForm } from "react-hook-form";
import RegisterInput from "../RegisterInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./registerFormSchema.js";
import { FormRegister } from "./style";

const RegisterForm = ({ registerUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const submit = (formData) => {
    console.log(formData);
    registerUser(formData);
    reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit(submit)} noValidate>
      <RegisterInput
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        error={errors.name}
      />

      <RegisterInput
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        error={errors.email}
      />

      <RegisterInput
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        error={errors.password}
      />

      <RegisterInput
        label="Confirmar Senha"
        type="password"
        placeholder="Confirme sua senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <RegisterInput
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        register={register("bio")}
        error={errors.bio}
      />

      <RegisterInput
        label="Contato"
        type="text"
        placeholder="Opção de contato"
        register={register("contact")}
        error={errors.contact}
      />

      <div>
        <label htmlFor="course_module">Selecionar Módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro Módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </select>
      </div>

      <button type="submit">Cadastrar</button>
    </FormRegister>
  );
};

export default RegisterForm;
