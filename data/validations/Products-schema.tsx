import * as yup from "yup";

const ProductsSchema = yup.object({
  nombre: yup
    .string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "El nombre no debe contener números ni caracteres especiales",
    )
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),

  categoria: yup.string().required("La categoria es obligatoria"),

  sede: yup.string().required("La sede es obligatoria"),

  presentacion: yup.string().required("La presentacion es obligatoria"),

  precio: yup.string().required("El precio es requerido"),

  almacen: yup.string().required("La cantidad en almacen es obligatoria"),

  stock: yup.string().required("El stock es obligatorio"),
});

export default ProductsSchema;
