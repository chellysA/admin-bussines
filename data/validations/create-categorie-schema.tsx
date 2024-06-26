import * as yup from "yup";

const CreateCategorieSchema = yup.object({
  name: yup
    .string()
    .required("La categoria es obligatoria")
    .min(2, "La categoria debe tener al menos 2 caracteres"),
});

export default CreateCategorieSchema;
