import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import SedeSchema from "@/data/validations/Sede-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type Props = {
  isReadOnly?: boolean;
  buttonLabel?: string | React.ReactElement;
  buttonTitle?: string;
};

const SedeForm = (props: Props) => {
  const form = useForm({
    defaultValues: {
      name: "",
      address: "",
      rif: "",
    },
    resolver: yupResolver(SedeSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;
  const router = useRouter();

  const { isReadOnly = false, buttonLabel = "", buttonTitle } = props;

  const onSubmit = async (data: any) => {
    try {
      await SedeSchema.validate(data);
      console.log("Datos válidos:", data);
      router.push("/negocio");
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
          disabled={isReadOnly && true}
          control={control}
          error={errors.name?.message}
          isError={!!errors.name}
        />
        <InputController
          id="rif"
          label="Rif"
          disabled={isReadOnly && true}
          control={control}
          error={errors.rif?.message}
          isError={!!errors.rif}
        />
        <InputController
          id="address"
          label="Direccion"
          disabled={isReadOnly && true}
          control={control}
          error={errors.address?.message}
          isError={!!errors.address}
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
export default SedeForm;
