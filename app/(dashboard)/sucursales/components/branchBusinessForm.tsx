import Button from "@/components/button";
import InputController from "@/components/fields/InputController";
import InputDocumentController from "@/components/fields/InputDocumentController";
import InputPhoneController from "@/components/fields/InputPhoneController";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CreateBranchBussinessSchema from "@/data/validations/Create-branch-business-schema";
import { useCreateBranchBusiness } from "@/hooks/useCreateBranchBusiness";
import { useGetBranchBusinessById } from "@/hooks/useGetBranchBusinessById";
import BranchBusinessFormSkeleton from "./brachBusinessSkeleton";
import { useUpdateBranchBusiness } from "@/hooks/useUpdateBranchBusiness";

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
  const { mutate: createBranchBussiness } = useCreateBranchBusiness();
  const { data: branchBusinessDetail, isPending: isLoading } =
    useGetBranchBusinessById(params?.businessId);
  const { mutate: updateBranchBusiness } = useUpdateBranchBusiness();

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
        createBranchBussiness(formValues, {
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
    if (params?.branchBusinessId && branchBusinessDetail) {
      reset({
        name: businessDetail.name,
        phone: businessDetail.phone,
        address: businessDetail.address,
        email: businessDetail.email,
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
