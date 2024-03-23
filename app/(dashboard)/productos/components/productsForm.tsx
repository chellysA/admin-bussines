import Button from "@/components/button";
import CheckboxController from "@/components/checkbox/CheckboxController";
import InputController from "@/components/fields/InputController";
import InputDocumentController from "@/components/fields/InputDocumentController";
import SelectController from "@/components/select/SelectController";
import ProductsSchema from "@/data/validations/Products-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

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
  const form = useForm({
    defaultValues: {
      name: "",
      categorie: "",
      sede: "",
      presentation: "",
      price: "",
      warehouse: "",
      stock: "",
    },
    resolver: yupResolver(ProductsSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      console.log("Datos válidos:", data);
      router.push("/productos");
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
          id="categorie"
          options={["Alimentos", "hogar", "Higiene"]}
          label="Categoria"
          placeholder="Selecciona una categoria"
          disabled={isReadOnly}
          control={control}
          error={errors.categorie?.message}
          isError={!!errors.categorie}
        />
        <SelectController
          id="sede"
          label="Sede 1"
          options={["1", "2"]}
          disabled={isReadOnly}
          placeholder="Selecciona una sede"
          control={control}
          error={errors.sede?.message}
          isError={!!errors.sede}
        />
        <SelectController
          id="presentation"
          label="Presentación"
          options={["Unidad", "Docena"]}
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
        {/* <CheckboxController
          id="iva"
          label="Incluye Iva?"
          checkboxes={[
            { id: "1check", optionsLabel: "Si", name: "check1" },
            { id: "check2", optionsLabel: "No", name: "check2" },
          ]}
          disabled={isReadOnly}
          control={control}
          isError={!!errors.iva}
          error={errors.iva?.message}
        /> */}
        <InputController
          id="warehouse"
          label="Cantidad en almacén"
          disabled={isReadOnly}
          control={control}
          isError={!!errors.warehouse}
          error={errors.warehouse?.message}
        />
        <InputController
          id="stock"
          label="Stock"
          disabled={isReadOnly}
          control={control}
          isError={!!errors.stock}
          error={errors.stock?.message}
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
