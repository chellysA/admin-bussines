import * as yup from "yup";

const DeleteBranchBussinesConfirmationSchema = yup.object({
  branchBussinesName: yup
    .string()
    .required("El nombre del negocio es obligatorio"),
});

export default DeleteBranchBussinesConfirmationSchema;
