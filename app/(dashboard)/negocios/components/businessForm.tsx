import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import InputDocumentController from "@/components/fields/InputDocumentController";
import InputPhoneController from "@/components/fields/InputPhoneController";
import CreateBussinessSchema from "@/data/validations/Create-bussiness-schema";
import { useCreateBusiness } from "@/hooks/useCreateBusiness";
import { useGetBusinessById } from "@/hooks/useGetBusinessById";
import { useUpdateBusiness } from "@/hooks/useUpdateBusiness";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import BusinessFormSkeleton from "./businessFormSkeleton";
import SelectController from "@/components/select/SelectController";
import { useGetEnterprise } from "@/hooks/useGetEnterprise";

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
      email: "",
      representativeName: "",
      enterpriseId: "",
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
  const { data: businessDetail, isPending: isLoading } = useGetBusinessById(
    params?.businessId,
  );
  const { mutate: updateBusiness } = useUpdateBusiness();
  const { data: enterprises } = useGetEnterprise();

  const enterprisesOptions = useMemo(() => {
    return enterprises?.length
      ? enterprises?.map((enterprise) => {
          return { label: enterprise.name, value: enterprise._id };
        })
      : [];
  }, [enterprises]);

  const onSubmit = async (formValues: any) => {
    try {
      if (params?.editar) {
        updateBusiness(
          { businessId: params?.businessId, updatedData: formValues },
          {
            onSuccess: (data) => {
              toast.success(data.info.message);
              router.push("/negocios");
            },
          },
        );
      } else {
        createBussiness(formValues, {
          onSuccess: (data) => {
            console.log(data);
            toast.success(data.info.message);
            router.push("/negocios");
          },
        });
      }
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  useEffect(() => {
    if (params?.businessId && businessDetail) {
      reset({
        name: businessDetail.data?.name,
        documentType: businessDetail.data?.documentType,
        documentNumber: businessDetail.data?.documentNumber,
        phone: businessDetail.data?.phone,
        address: businessDetail.data?.address,
        email: businessDetail.data?.email,
        representativeName:
          businessDetail.data?.enterpriseId[0].representativeName,
        enterpriseId: businessDetail.data?.enterpriseId[0].name,
      });
    }
  }, [params.businessId, businessDetail]);

  return (
    <>
      {isLoading && businessDetail ? (
        <BusinessFormSkeleton />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
            <SelectController
              id="enterpriseId"
              label="Nombre de la empresa"
              placeholder=""
              disabled={isReadOnly}
              control={control}
              error={errors.enterpriseId?.message}
              isError={!!errors.enterpriseId}
              options={enterprisesOptions}
            />
            <InputController
              id="name"
              label="Nombre del Negocio"
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
export default BusinessForm;
