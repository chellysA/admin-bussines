import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import InputRadioController from "@/components/fields/InputRadioController";
import SelectController from "@/components/select/SelectController";
import ProductsSchema from "@/data/validations/Products-schema";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetCategory } from "@/hooks/useGetCategory";
import { useMemo } from "react";

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
  const { data: categories } = useGetCategory();

  const form = useForm({
    defaultValues: {
      categoryId: "",
      name: "",
      presentation: "",
      price: "",
    },
    resolver: yupResolver(ProductsSchema),
  });

  const categoriesOptions = useMemo(() => {
    return categories?.length
      ? categories?.map((category) => {
          return { label: category.name, value: category._id };
        })
      : [];
  }, [categories]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (formValues: any) => {
    console.log(formValues);
    try {
      createProduct(formValues, {
        onSuccess: (data) => {
          toast.success(data.info.message);
          router.push("/productos");
        },
      });
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
        <SelectController
          id="categoryId"
          label="Categoria"
          options={categoriesOptions}
          placeholder="Selecciona una categoria"
          disabled={isReadOnly}
          control={control}
          isError={!!errors.categoryId}
          error={errors.categoryId?.message}
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
            { value: true, label: "Si" },
            { value: false, label: "No" },
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
      )}
    </form>
  );
};
export default ProductsForm;
