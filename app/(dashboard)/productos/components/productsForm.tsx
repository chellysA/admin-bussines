import Button from "@/components/button";
import CheckboxController from "@/components/checkbox/CheckboxController";
import InputController from "@/components/fields/InputController";
import InputRadioController from "@/components/fields/InputRadioController";
import SelectController from "@/components/select/SelectController";
import ProductsSchema from "@/data/validations/Products-schema";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { DevTool } from "@hookform/devtools";

type Props = {
  isReadOnly?: boolean;
  buttonLabel?: string | React.ReactElement;
  buttonTitle?: string;
};

const ProductsForm = ({
  isReadOnly = false,
  buttonLabel = "",
  buttonTitle,
}: Props) => {
  const router = useRouter();

  const { mutate: createProduct } = useCreateProduct();

  const form = useForm({
    defaultValues: {
      // categoryId: "",
      // businessId: "",
      name: "",
      presentation: "",
      price: "",
      with_iva: "",
    },
    resolver: yupResolver(ProductsSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (formValues: any) => {
    console.log(formValues);
    try {
      // createProduct(formValues, {
      //   onSuccess: (data) => {
      //     toast.success("Producto creado exitosamente!");
      //   },
      // });
      // router.push("/productos");
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
        <InputController
          id="name"
          label="Nombre"
          disabled={isReadOnly}
          control={control}
          error={errors.name?.message}
          isError={!!errors.name}
        />
        <SelectController
          id="presentation"
          label="Presentación"
          options={[
            { label: "Unidad", value: "unidad" },
            { label: "Kg", value: "kg" },
          ]}
          placeholder="Selecciona una presentación"
          disabled={isReadOnly}
          control={control}
          isError={!!errors.presentation}
          error={errors.presentation?.message}
        />
        <InputController
          id="price"
          label="Precio"
          disabled={isReadOnly}
          control={control}
          isError={!!errors.price}
          error={errors.price?.message}
        />
        <InputRadioController
          id="with_iva"
          label="Incluye Iva?"
          name="iva"
          options={[
            { value: "si", label: "si" },
            { value: "no", label: "no" },
          ]}
          disabled={isReadOnly}
          control={control}
          isError={!!errors.with_iva}
          error={errors.with_iva?.message}
        />
      </div>
      {!isReadOnly && (
        <div className="flex justify-end mt-8">
          <Button
            label={buttonLabel}
            className="px-8"
            title={buttonTitle}
            type="submit"
          />
        </div>
      )}{" "}
      <DevTool control={control} />
    </form>
  );
};
export default ProductsForm;
