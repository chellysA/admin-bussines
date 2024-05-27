import * as yup from "yup";

const clientDataSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "El nombre no debe contener números ni caracteres especiales",
    )
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  documentNumber: yup.string().required("El documento es obligatorio"),

  documentType: yup.string().required("Obligatorio"),

  address: yup.string().required("La direccion es obligatoria"),
});

export default clientDataSchema;
