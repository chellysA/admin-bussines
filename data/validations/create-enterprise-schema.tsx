import * as yup from "yup";

const CreateEnterpriseSchema = yup.object({
  nombre: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "El nombre no debe contener números ni caracteres especiales",
    )
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  nombreDeLosRepresentantes: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "El nombre no debe contener números ni caracteres especiales",
    )
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  email: yup
    .string()
    .email("Ingresa una dirección de correo electrónico válida")
    .required("El correo electrónico es obligatorio"),

  telefono: yup.string().required("El numero telefonico es obligatorio"),

  rif: yup.string().required("El numero de rif es obligatorio"),

  sector: yup.string().required("El sector es obligatorio"),

  direccion: yup.string().required("La direccion es obligatoria"),
});

export default CreateEnterpriseSchema;
