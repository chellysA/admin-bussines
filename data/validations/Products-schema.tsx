import * as yup from "yup";

const ProductsSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "El nombre no debe contener números ni caracteres especiales",
    )
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  // categoryId: yup.string().required("La categoria es obligatoria"),

  // businessId: yup.string().required(""),

  presentation: yup.string().required("La presentacion es obligatoria"),

  price: yup.string().required("El precio es requerido"),

  with_iva: yup.string().required("obligatorio"),
});

export default ProductsSchema;
