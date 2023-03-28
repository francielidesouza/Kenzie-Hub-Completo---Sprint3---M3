import * as yup from "yup";

export const registerFormLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O e-mail digitado é inválido"),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/([a-zA-Z])/, "Deve conter ao menos 1 letra")
    .matches(/(\W|_)/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
});
