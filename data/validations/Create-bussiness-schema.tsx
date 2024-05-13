import * as yup from "yup";

const CreateBussinessSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "El nombre no debe contener números ni caracteres especiales",
    )
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  phone: yup.string().required("El numero telefonico es obligatorio"),

  documentNumber: yup.string().required("El documento es obligatorio"),

  documentType: yup.string().required("Obligatorio"),

  representativeName: yup
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

  address: yup.string().required("La direccion es obligatoria"),
});

export default CreateBussinessSchema;
