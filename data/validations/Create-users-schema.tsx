import * as yup from "yup";

const CreateUsersSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "El nombre no debe contener números ni caracteres especiales",
    )
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  lastName: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "El apellido no debe contener números ni caracteres especiales",
    )
    .required("El apellido es obligatorio")
    .min(2, "El apellido debe tener al menos 2 caracteres"),

  email: yup
    .string()
    .email("Ingresa una dirección de correo electrónico válida")
    .required("El correo electrónico es obligatorio"),

  userName: yup
    .string()
    .required("El nombre de usuario es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),

  sede: yup.string().required("La sede es obligatoria"),

  rol: yup.string().required("El cargo es obligatorio"),

  document: yup.string().required("El documento es obligatorio"),

  phone: yup.string().required("El numero telefonico es obligatorio"),
});

export default CreateUsersSchema;
