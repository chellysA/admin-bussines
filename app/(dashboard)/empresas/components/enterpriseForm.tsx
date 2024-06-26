import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import InputDocumentController from "@/components/fields/InputDocumentController";
import InputPhoneController from "@/components/fields/InputPhoneController";
import CreateEnterpriseSchema from "@/data/validations/Create-enterprise-schema";
import { useCreateEnterprise } from "@/hooks/useCreateEnterprise";
import { useGetEnterpriseById } from "@/hooks/useGetEnterpriseById";
import { useUpdateEnterprise } from "@/hooks/useUpdateEnterprise";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import EnterpriseFormSkeleton from "./enterpriseFormSkeleton";

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
      documentNumber: "",
      documentType: "",
      address: "",
    },
    resolver: yupResolver(CreateEnterpriseSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const router = useRouter();
  const params = useParams();
  const { mutate: createEnterprise } = useCreateEnterprise();
  const { data: enterpriseDetail, isPending: isLoading } = useGetEnterpriseById(
    params?.enterpriseId,
  );
  const { mutate: updateEnterprise } = useUpdateEnterprise();

  const onSubmit = async (formValues: any) => {
    try {
      if (params?.editar) {
        updateEnterprise(
          { enterpriseId: params?.enterpriseId, updatedData: formValues },
          {
            onSuccess: (data) => {
              toast.success(data.info.message);
              router.push("/empresas");
            },
          },
        );
      } else {
        createEnterprise(formValues, {
          onSuccess: (data) => {
            toast.success(data.info.message);
            router.push("/empresas");
          },
          onError: (data) => {
            toast.error(data.info.message);
          },
        });
      }
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  useEffect(() => {
    if (enterpriseDetail) {
      reset({
        name: enterpriseDetail.name,
        representativeName: enterpriseDetail.representativeName,
        documentType: enterpriseDetail.documentType,
        email: enterpriseDetail.email,
        documentNumber: enterpriseDetail.documentNumber,
        phone: enterpriseDetail.phone,
        address: enterpriseDetail.address,
      });
    }
  }, [enterpriseDetail]);

  return (
    <>
      {isLoading && enterpriseDetail ? (
        <EnterpriseFormSkeleton />
      ) : (
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
            <InputController
              id="representativeName"
              label="Nombre del Representante"
              disabled={isReadOnly}
              control={control}
              error={errors.representativeName?.message}
              isError={!!errors.representativeName}
            />
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
      )}
    </>
  );
};
export default EnterpriseForm;
