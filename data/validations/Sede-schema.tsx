import * as yup from "yup";

const SedeSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "El nombre no debe contener números ni caracteres especiales",
    )
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  address: yup.string().required("La direccion es obligatoria"),

  rif: yup.string().required("El rif es obligatorio"),
});

export default SedeSchema;
