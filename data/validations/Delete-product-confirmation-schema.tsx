import * as yup from "yup";

const DeleteProductConfirmationSchema = yup.object({
  productName: yup.string().required("El nombre del producto es obligatorio"),
});

export default DeleteProductConfirmationSchema;
