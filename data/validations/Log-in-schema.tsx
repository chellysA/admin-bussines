import * as yup from "yup";

const LogInSchema = yup.object({
  email: yup
    .string()
    .email("Ingresa una dirección de correo electrónico válida")
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
});

export default LogInSchema;
