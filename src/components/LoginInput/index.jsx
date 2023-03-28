import React from "react";
import { Fieldset } from "./style";

const LoginInput = ({ label, type, placeholder, register, error }) => {
  return (
    <Fieldset>
      <label htmlFor={register.name}>{label}</label>
      <input
        type={type}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      {error && <p>{error.message}</p>}
    </Fieldset>
  );
};

export default LoginInput;
