import * as yup from "yup";

const DeleteProductConfirmationSchema = yup.object({
  name: yup.string().required("El nombre del producto es obligatorio"),
});

export default DeleteProductConfirmationSchema;
