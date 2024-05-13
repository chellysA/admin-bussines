import * as yup from "yup";

const DeleteBussinesConfirmationSchema = yup.object({
  bussinesName: yup.string().required("El nombre del negocio es obligatorio"),
});

export default DeleteBussinesConfirmationSchema;
