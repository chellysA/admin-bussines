import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import InputPhoneController from "@/components/fields/InputPhoneController";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CreateBranchBussinessSchema from "@/data/validations/Create-branch-business-schema";
import { useCreateBranchBusiness } from "@/hooks/useCreateBranchBusiness";
import { useGetBranchBusinessById } from "@/hooks/useGetBranchBusinessById";
import BranchBusinessFormSkeleton from "./brachBusinessSkeleton";
import { useUpdateBranchBusiness } from "@/hooks/useUpdateBranchBusiness";
import { useGetBusiness } from "@/hooks/useGetBusiness";
import SelectController from "@/components/select/SelectController";

type Props = {
  isReadOnly?: boolean;
  buttonLabel?: string | React.ReactElement;
  buttonTitle?: string;
};

const BranchBusinessForm = ({
  isReadOnly = false,
  buttonLabel = "",
  buttonTitle,
}: Props) => {
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      businessId: "",
    },
    resolver: yupResolver(CreateBranchBussinessSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const router = useRouter();
  const params = useParams();
  const { mutate: createBranchBusiness } = useCreateBranchBusiness();
  const { data: branchBusinessDetail, isPending: isLoading } =
    useGetBranchBusinessById(params?.branchBusinessId);
  const { mutate: updateBranchBusiness } = useUpdateBranchBusiness();
  const { data: businessData } = useGetBusiness();

  const businessOptions = useMemo(() => {
    return businessData?.length
      ? businessData?.map((business) => {
          return { label: business.name, value: business._id };
        })
      : [];
  }, [businessData]);

  const onSubmit = async (formValues: any) => {
    try {
      if (params?.editar) {
        updateBranchBusiness(
          {
            branchBusinessId: params?.branchBusinessId,
            updatedData: formValues,
          },
          {
            onSuccess: (data) => {
              toast.success(data.info.message);
              router.push("/sucursales");
            },
          },
        );
      } else {
        console.log(formValues);
        createBranchBusiness(formValues, {
          onSuccess: (data) => {
            toast.success(data.info.message);
            router.push("/sucursales");
          },
        });
      }
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  useEffect(() => {
    console.log(branchBusinessDetail);
    if (params?.branchBusinessId && branchBusinessDetail) {
      reset({
        name: branchBusinessDetail.name,
        phone: branchBusinessDetail.phone,
        address: branchBusinessDetail.address,
        businessId: branchBusinessDetail.business.name,
      });
    }
  }, [params.branchBusinessId, branchBusinessDetail]);

  return (
    <>
      {isLoading && branchBusinessDetail ? (
        <BranchBusinessFormSkeleton />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
            <SelectController
              id="businessId"
              label="Nombre del negocio"
              placeholder=""
              disabled={isReadOnly}
              control={control}
              error={errors.businessId?.message}
              isError={!!errors.businessId}
              options={businessOptions}
            />
            <InputController
              id="name"
              label="Nombre de la Sucursal"
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
export default BranchBusinessForm;
