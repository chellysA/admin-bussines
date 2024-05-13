"use client";
import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import Link from "next/link";
import { MdDomainAdd } from "react-icons/md";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import DeleteConfirmationModal from "@/components/modal/DeleteConfirmationModal";
import { useCallback, useEffect, useState } from "react";
import InputController from "@/components/fields/InputController";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DeleteEnterpriseConfirmationSchema from "@/data/validations/Delete-enterprise-confirmation-schema";
import { useGetEnterprise } from "@/hooks/useGetEnterprise";
import BasicTableSkeleton from "@/components/tables/basicTableSkeleton";
import { columnsDataEnterprise } from "./variables/columnsDataEnterprise";
import BasicTable from "@/components/tables/basicTable";

const Empresas = () => {
  const [openModal, setOpenModal] = useState(false);
  const [enterpriseToBeDeleted, setEnterpriseToBeDeleted] = useState("");
  const { data: enterprisesData, isPending: isLoading } = useGetEnterprise();

  useChangeTitleLayoutAdmin("Empresa");

  const form = useForm({
    defaultValues: { enterpriseName: "" },
    resolver: yupResolver(DeleteEnterpriseConfirmationSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (data: any) => {
    try {
      if (data.enterpriseName === enterpriseToBeDeleted) {
        console.log("Datos válidos:", data);
        setOpenModal(false);
        handleReset();
      }
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  const handleReset = useCallback(() => {
    reset({ enterpriseName: "" });
  }, [reset]);

  const handleDelete = (name: string) => {
    setOpenModal(true);
    setEnterpriseToBeDeleted(name);
  };

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
          <Button label="Buscar" title="Buscar Empresa" />
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/empresas/agregar-empresa">
          <Button
            label={<MdDomainAdd className="text-[25px] mx-5" />}
            className="mt-4"
            title="Agregar Empresa"
          />
        </Link>
      </div>
      <DeleteConfirmationModal
        title="Eliminar Empresa"
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        objectToBeDeleted={enterpriseToBeDeleted}
        onConfirm={handleSubmit(onSubmit)}
        buttonType="submit"
      >
        <InputController
          id="enterpiseName"
          label="Ingresa el nombre de la empresa para continuar:"
          control={control}
          isError={!!errors.enterpriseName}
          error={errors.enterpriseName?.message}
        />
      </DeleteConfirmationModal>
      <div className="mt-8">
        {isLoading ? (
          <BasicTableSkeleton />
        ) : (
          <BasicTable
            columnsData={columnsDataEnterprise(handleDelete)}
            tableData={enterprisesData || []}
            title="Lista de Empresas"
          />
        )}
      </div>
    </>
  );
};

export default Empresas;
