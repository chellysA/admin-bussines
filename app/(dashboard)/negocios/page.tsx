"use client";
import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import Link from "next/link";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import DeleteConfirmationModal from "@/components/modal/DeleteConfirmationModal";
import { useCallback, useEffect, useState } from "react";
import InputController from "@/components/fields/InputController";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BasicTableSkeleton from "@/components/tables/basicTableSkeleton";
import BasicTable from "@/components/tables/basicTable";
import DeleteBussinesConfirmationSchema from "@/data/validations/Delete-bussines-confirmation-schema";
import { columnsDataBusiness } from "./variables/columnsDataBusiness";
import { useGetBusiness } from "@/hooks/useGetBusiness";
import { useDeleteBusiness } from "@/hooks/useDeleteBusiness";
import toast from "react-hot-toast";
import { BsBuildingAdd } from "react-icons/bs";

const Empresas = () => {
  const [openModal, setOpenModal] = useState(false);
  const [bussinesToBeDeleted, setBussinesToBeDeleted] = useState("");
  const [businesId, setBusinesId] = useState("");
  const {
    data: businessData,
    isPending: isLoading,
    refetch,
  } = useGetBusiness();
  const { mutate: deleteBusiness } = useDeleteBusiness();

  useChangeTitleLayoutAdmin("Negocio");

  const form = useForm({
    defaultValues: { bussinesName: "" },
    resolver: yupResolver(DeleteBussinesConfirmationSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (data: any) => {
    try {
      if (data.bussinesName === bussinesToBeDeleted) {
        deleteBusiness(businesId, {
          onSuccess: (data) => {
            toast.success(data.info.message);
            refetch();
            setOpenModal(false);
            handleReset();
          },
        });
      } else {
        toast.error("El nombre del negocio no coincide.");
      }
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  const handleReset = useCallback(() => {
    reset({ bussinesName: "" });
  }, [reset]);

  const handleDelete = (name: string, id: string) => {
    setOpenModal(true);
    setBussinesToBeDeleted(name);
    setBusinesId(id);
  };
  console.log(businessData);
  useEffect(() => {
    !openModal && handleReset();
  }, [handleReset, openModal]);

  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:gap-5 md:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-1 col-span-2 gap-5 md:grid-cols-3 md:mr-10 mt-2">
          <InputField placeholder="Nombre" id="nombre" />
        </div>
        <div className="md:ml-12 mt-6 md:mt-2 grid grid-cols-1 col-span-1">
          <Button label="Buscar" title="Buscar Negocio" />
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/negocios/agregar-negocio">
          <Button
            label={<BsBuildingAdd className="text-[22px] mx-5" />}
            className="mt-4"
            title="Agregar Negocio"
          />
        </Link>
      </div>
      <DeleteConfirmationModal
        title="Eliminar Negocio"
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        objectToBeDeleted={bussinesToBeDeleted}
        onConfirm={handleSubmit(onSubmit)}
        buttonType="submit"
      >
        <InputController
          id="bussinesName"
          label="Ingresa el nombre del negocio para continuar:"
          control={control}
          isError={!!errors.bussinesName}
          error={errors.bussinesName?.message}
        />
      </DeleteConfirmationModal>
      <div className="mt-8">
        {isLoading ? (
          <BasicTableSkeleton />
        ) : (
          <BasicTable
            columnsData={columnsDataBusiness(handleDelete)}
            tableData={businessData || []}
            title="Lista de Empresas"
          />
        )}
      </div>
    </>
  );
};

export default Empresas;
