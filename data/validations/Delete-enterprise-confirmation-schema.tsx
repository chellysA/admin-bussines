import * as yup from "yup";

const DeleteEnterpriseConfirmationSchema = yup.object({
  enterpriseName: yup
    .string()
    .required("El nombre de la empresa es obligatorio"),
});

export default DeleteEnterpriseConfirmationSchema;
