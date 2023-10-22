import { MailSVG, LockSVG, UserIdSVG, MessageSVG } from "@/components";

/**
 * Form information to login to the application.
 */
// Objeto donde esta la información del formulario para iniciar sesión en la aplicación.
export const LoginData = {
  name: "Iniciar Sesión",
  fields: [
    {
      type: "email",
      name: "email",
      placeholder: "E-Mail :",
      required: true,
      icon: MailSVG,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Contraseña :",
      required: true,
      icon: LockSVG,
    },
  ],
};

/**
 * Form information to sign up to the application.
 */
// Objeto donde esta la información del formulario para registrarse en la aplicación.
export const RegisterData = {
  name: "Registrate",
  fields: [
    {
      type: "text",
      name: "name",
      placeholder: "Nombre :",
      required: true,
      icon: UserIdSVG,
    },
    {
      type: "text",
      name: "description",
      placeholder: "Descripción :",
      required: true,
      icon: MessageSVG,
    },
    {
      type: "email",
      name: "email",
      placeholder: "E-Mail :",
      required: true,
      icon: MailSVG,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Contraseña :",
      required: true,
      icon: LockSVG,
    },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirme su contraseña :",
      required: true,
      icon: LockSVG,
    },
  ],
};
