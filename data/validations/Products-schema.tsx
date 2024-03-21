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

  categorie: yup.string().required("La categoria es obligatoria"),

  sede: yup.string().required("La sede es obligatoria"),

  presentation: yup.string().required("La presentacion es obligatoria"),

  price: yup.string().required("El precio es requerido"),

  warehouse: yup.string().required("La cantidad en almacen es obligatoria"),

  stock: yup.string().required("El stock es obligatorio"),
});

export default ProductsSchema;
