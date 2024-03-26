import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import InputDocumentController from "@/components/fields/InputDocumentController";
import InputPhoneController from "@/components/fields/InputPhoneController";
import CreateEnterpriseSchema from "@/data/validations/create-enterprise-schema";
import { useCreateEnterprise } from "@/hooks/useCreateEnterprise";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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
      name: "",
      representativeName: "",
      email: "",
      phone: "",
      sector: "",
      document: "",
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
  const { mutate: createEnterprise } = useCreateEnterprise();

  const onSubmit = async (formValues: any) => {
    try {
      createEnterprise(
        { ...formValues, rif: formValues.document },
        {
          onSuccess: (data) => {
            toast.success(data.info.message);
            router.push("/empresas");
            console.log({ data });
          },
        },
      );
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
        <InputController
          id="name"
          label="Nombre de la Empresa"
          disabled={isReadOnly}
          control={control}
          error={errors.name?.message}
          isError={!!errors.name}
        />
        <div>
          <p className="mb-3 ml-3 text-sm text-navy-700 dark:text-white font-bold">
            Nombre del Representante
          </p>
          <InputController
            id="representativeName"
            label=""
            disabled={isReadOnly}
            control={control}
            error={errors.representativeName?.message}
            isError={!!errors.representativeName}
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
        <InputPhoneController
          id="phone"
          label="Telefono"
          control={control}
          isError={!!errors.phone}
          error={errors.phone?.message}
          disabled={isReadOnly}
        />
        <InputController
          id="sector"
          label="Sector"
          disabled={isReadOnly}
          control={control}
          error={errors.sector?.message}
          isError={!!errors.sector}
        />
        <InputDocumentController
          id="document"
          label="Documento"
          disabled={isReadOnly}
          control={control}
          error={errors.document?.message}
          isError={!!errors.document}
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
