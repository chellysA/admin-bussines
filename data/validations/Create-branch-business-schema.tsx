import * as yup from "yup";

const CreateBranchBussinessSchema = yup.object({
  businessId: yup.string().required("El nombre del negocio es obligatorio"),

  name: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "El nombre no debe contener números ni caracteres especiales",
    )
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  phone: yup.string().required("El numero telefonico es obligatorio"),

  address: yup.string().required("La direccion es obligatoria"),
});

export default CreateBranchBussinessSchema;
