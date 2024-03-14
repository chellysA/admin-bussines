import * as yup from "yup";

const DeleteUserConfirmationSchema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
});

export default DeleteUserConfirmationSchema;
