import Button from "@/components/button";
import CheckboxController from "@/components/checkbox/CheckboxController";
import InputController from "@/components/fields/InputController";
import SelectController from "@/components/select/SelectController";
import CreateEnterpriseSchema from "@/data/validations/create-enterprise-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type Props = {
  isReadOnly?: boolean;
  buttonLabel?: string | React.ReactElement;
  buttonTitle?: string;
};

const EnterpriseForm = ({
  isReadOnly = false,
  buttonLabel = "",
  buttonTitle,
}: Props) => {
  const form = useForm({
    defaultValues: {
      enterpriseName: "",
      nameOfRepresentatives: "",
      email: "",
      phone: "",
      sector: "",
      rif: "",
      address: "",
    },
    resolver: yupResolver(CreateEnterpriseSchema),
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
      router.push("/empresa");
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
        <InputController
          id="enterpriseName"
          label="Nombre de la Empresa"
          disabled={isReadOnly}
          control={control}
          error={errors.enterpriseName?.message}
          isError={!!errors.enterpriseName}
        />
        <div>
          <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
            Nombre del Representante
          </p>
          <InputController
            id="nameOfRepresentatives"
            label=""
            disabled={isReadOnly}
            control={control}
            error={errors.nameOfRepresentatives?.message}
            isError={!!errors.nameOfRepresentatives}
          />
        </div>
        <InputController
          id="email"
          label="Email"
          disabled={isReadOnly}
          control={control}
          error={errors.email?.message}
          isError={!!errors.email}
        />
        <InputController
          id="phone"
          label="Telefono"
          disabled={isReadOnly}
          control={control}
          error={errors.phone?.message}
          isError={!!errors.phone}
        />
        <InputController
          id="sector"
          label="Sector"
          disabled={isReadOnly}
          control={control}
          error={errors.sector?.message}
          isError={!!errors.sector}
        />
        <InputController
          id="rif"
          label="Rif"
          disabled={isReadOnly}
          control={control}
          error={errors.rif?.message}
          isError={!!errors.rif}
        />
        <InputController
          id="address"
          label="Direccion"
          disabled={isReadOnly}
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
export default EnterpriseForm;
