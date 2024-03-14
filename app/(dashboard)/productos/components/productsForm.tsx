import Button from "@/components/button";
import CheckboxController from "@/components/checkbox/CheckboxController";
import InputController from "@/components/fields/InputController";
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
      nombre: "",
      categoria: "",
      sede: "",
      presentacion: "",
      precio: "",
      almacen: "",
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
          id="nombre"
          label="Nombre"
          disabled={isReadOnly}
          control={control}
          error={errors.nombre?.message}
          isError={!!errors.nombre}
        />
        <div>
          <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
            Categoria
          </p>
          <SelectController
            id="categoria"
            options={["Alimentos", "hogar", "Higiene"]}
            label="Categoria"
            disabled={isReadOnly}
            control={control}
            error={errors.categoria?.message}
            isError={!!errors.categoria}
          />
        </div>
        <div>
          <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
            Sede
          </p>
          <SelectController
            id="sede"
            label="Sede 1"
            options={["1", "2"]}
            disabled={isReadOnly}
            control={control}
            error={errors.sede?.message}
            isError={!!errors.sede}
          />
        </div>
        <div>
          <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
            Presentación
          </p>
          <SelectController
            id="presentacion"
            label="Kg"
            options={["Unidad", "Docena"]}
            disabled={isReadOnly}
            control={control}
            isError={!!errors.presentacion}
            error={errors.presentacion?.message}
          />
        </div>
        <InputController
          id="precio"
          label="Precio"
          disabled={isReadOnly}
          control={control}
          isError={!!errors.precio}
          error={errors.precio?.message}
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
          id="almacen"
          label="Cantidad en almacén"
          disabled={isReadOnly}
          control={control}
          isError={!!errors.almacen}
          error={errors.almacen?.message}
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
