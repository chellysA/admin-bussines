import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import InputDocumentController from "@/components/fields/InputDocumentController";
import InputPhoneController from "@/components/fields/InputPhoneController";
import CreateBussinessSchema from "@/data/validations/Create-bussiness-schema";
import { useCreateBusiness } from "@/hooks/useCreateBusiness";
import { useGetBusinessById } from "@/hooks/useGetBusinessById";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {
  isReadOnly?: boolean;
  buttonLabel?: string | React.ReactElement;
  buttonTitle?: string;
};

const BusinessForm = ({
  isReadOnly = false,
  buttonLabel = "",
  buttonTitle,
}: Props) => {
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      documentNumber: "",
      documentType: "",
      address: "",
    },
    resolver: yupResolver(CreateBussinessSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const router = useRouter();
  const params = useParams();
  const { mutate: createBussiness } = useCreateBusiness();
  const { data: businessDetail } = useGetBusinessById(params?.businessId);

  const onSubmit = async (formValues: any) => {
    try {
      createBussiness(formValues, {
        onSuccess: (data) => {
          console.log({ data });
          toast.success(data.info.message);
          router.push("/negocios");
        },
      });
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  useEffect(() => {
    if (params?.businessId && businessDetail) {
      reset({
        name: businessDetail.name,
        documentType: businessDetail.documentType,
        documentNumber: businessDetail.documentNumber,
        phone: businessDetail.phone,
        address: businessDetail.address,
      });
    }
  }, [params, businessDetail]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
        <InputController
          id="name"
          label="Nombre del Negocio"
          disabled={isReadOnly}
          control={control}
          error={errors.name?.message}
          isError={!!errors.name}
        />
        <InputPhoneController
          id="phone"
          label="Telefono"
          control={control}
          isError={!!errors.phone}
          error={errors.phone?.message}
          disabled={isReadOnly}
        />
        <InputDocumentController
          id="documentNumber"
          idType="documentType"
          label="Documento"
          disabled={isReadOnly}
          control={control}
          error={errors.documentNumber?.message}
          isError={!!errors.documentNumber}
          errorType={errors.documentType?.message}
          isErrorType={!!errors.documentType}
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
export default BusinessForm;
