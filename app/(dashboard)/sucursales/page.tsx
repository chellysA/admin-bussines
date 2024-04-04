"use client";
import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import Link from "next/link";
import { MdAddBusiness } from "react-icons/md";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import DeleteConfirmationModal from "@/components/modal/DeleteConfirmationModal";
import { useCallback, useEffect, useState } from "react";
import InputController from "@/components/fields/InputController";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BasicTableSkeleton from "@/components/tables/basicTableSkeleton";
import BasicTable from "@/components/tables/basicTable";
import toast from "react-hot-toast";
import { useGetBranchBusiness } from "@/hooks/useGetBranchBusiness";
import { useDeleteBranchBusiness } from "@/hooks/useDeleteBranchBusiness";
import DeleteBranchBussinesConfirmationSchema from "@/data/validations/Delete-branch-business-confirmation-schema";
import { columnsDataBranchBusiness } from "./variables/columnsDataBranchBusiness";

const Sucursales = () => {
  const [openModal, setOpenModal] = useState(false);
  const [branchToBeDeleted, setBranchToBeDeleted] = useState("");
  const [branchId, setBranchId] = useState("");
  const {
    data: branchBusinessData,
    isPending: isLoading,
    refetch,
  } = useGetBranchBusiness();
  const { mutate: deleteBusiness } = useDeleteBranchBusiness();

  useChangeTitleLayoutAdmin("Sucursales");

  const form = useForm({
    defaultValues: { branchBussinesName: "" },
    resolver: yupResolver(DeleteBranchBussinesConfirmationSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (data: any) => {
    try {
      if (data.branchBussinesName === branchToBeDeleted) {
        deleteBusiness(branchId, {
          onSuccess: (data) => {
            toast.success(data.info.message);
            refetch();
            setOpenModal(false);
            handleReset();
          },
        });
      } else {
        toast.error("El nombre de la sucursal no coincide.");
      }
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  const handleReset = useCallback(() => {
    reset({ branchBussinesName: "" });
  }, [reset]);

  const handleDelete = (name: string, id: string) => {
    setOpenModal(true);
    setBranchToBeDeleted(name);
    setBranchId(id);
  };

  useEffect(() => {
    !openModal && handleReset();
  }, [handleReset, openModal]);

  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:gap-5 md:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-1 col-span-2 gap-5 md:grid-cols-3 md:mr-10 mt-2">
          <InputField placeholder="Direccion" id="address" />
        </div>
        <div className="md:ml-12 mt-6 md:mt-2 grid grid-cols-1 col-span-1">
          <Button label="Buscar" title="Buscar Sucursal" />
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/sucursales/agregar-sucursal">
          <Button
            label={<MdAddBusiness className="text-[25px] mx-5" />}
            className="mt-4"
            title="Agregar Negocio"
          />
        </Link>
      </div>
      <DeleteConfirmationModal
        title="Eliminar Sucursal"
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        objectToBeDeleted={branchToBeDeleted}
        onConfirm={handleSubmit(onSubmit)}
        buttonType="submit"
      >
        <InputController
          id="branchBussinesName"
          label="Ingresa el nombre de la sucursal para continuar:"
          control={control}
          isError={!!errors.branchBussinesName}
          error={errors.branchBussinesName?.message}
        />
      </DeleteConfirmationModal>
      <div className="mt-8">
        {isLoading ? (
          <BasicTableSkeleton />
        ) : (
          <BasicTable
            columnsData={columnsDataBranchBusiness(handleDelete)}
            tableData={branchBusinessData || []}
            title="Lista de Empresas"
          />
        )}
      </div>
    </>
  );
};

export default Sucursales;
