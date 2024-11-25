export const loginData = {
  logo: {
    src: "@/assets/img/Background (1).png",
    title: "Saravava",
  },
  registrationForm: {
    title: "Criar Conta",
    fields: [
      { id: "email", label: "Email", type: "email", required: true },
      { id: "password", label: "Senha", type: "password", required: true },
      { id: "confirmPassword", label: "Confirmar Senha", type: "password", required: true },
    ],
    button: "Criar Conta",
  },
  loginForm: {
    title: "Entrar",
    fields: [
      { id: "email", label: "Email", type: "email", required: true },
      { id: "password", label: "Senha", type: "password", required: true },
    ],
    button: "Entrar",
  },
};
