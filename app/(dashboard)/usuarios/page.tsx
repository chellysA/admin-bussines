"use client";
import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import BasicTable from "../../../components/tables/basicTable";
import tableDataUsers from "./variables/tableDataUsers.json";
import { columnsDataUsers } from "./variables/columnsDataUsers";
import Select from "@/components/select";
import { IoMdPersonAdd } from "react-icons/io";
import Link from "next/link";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import Modal from "@/components/modal";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DeleteUserConfirmationSchema from "@/data/validations/Delete-user-confirmation-schema";
import InputController from "@/components/fields/InputController";
import DeleteConfirmationModal from "@/components/modal/DeleteConfirmationModal";

const Usuarios = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userNameToBeDeleted, setUserNameToBeDeleted] = useState("");

  useChangeTitleLayoutAdmin("Usuarios");

  const form = useForm({
    defaultValues: { name: "" },
    resolver: yupResolver(DeleteUserConfirmationSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (data: any) => {
    try {
      if (data.name === userNameToBeDeleted) {
        console.log("Datos válidos:", data);
        setOpenModal(false);
        handleReset();
      }
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  const handleDelete = (name: string) => {
    setOpenModal(true);
    setUserNameToBeDeleted(name);
  };

  const handleReset = useCallback(() => {
    reset({ name: "" });
  }, [reset]);

  useEffect(() => {
    !openModal && handleReset();
  }, [handleReset, openModal]);

  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:gap-5 md:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-1 col-span-2 gap-5 md:grid-cols-3 md:mr-10 mt-2">
          <InputField placeholder="Nombre" id="nombre" />
          <InputField placeholder="Email" id="email" />
          <Select
            options={["Administrador", "Gerente", "Cajero", "Vendedor"]}
            placeholder="Cargo"
            id="cargo"
          />
        </div>
        <div className="md:ml-12 mt-6 md:mt-2 grid grid-cols-1 col-span-1">
          <Button label="Buscar" title="Buscar Usuario" />
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/usuarios/crear-usuario">
          <Button
            label={<IoMdPersonAdd className="text-[25px] mx-5" />}
            className="mt-4"
            title="Crear Usuario"
          />
        </Link>
      </div>
      <div className="mt-8">
        <BasicTable
          columnsData={columnsDataUsers(handleDelete)}
          tableData={tableDataUsers}
          title="Lista de Usuarios"
        />
      </div>
      <DeleteConfirmationModal
        title="Eliminar Usuario"
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        onConfirm={handleSubmit(onSubmit)}
        buttonType="submit"
        objectToBeDeleted={userNameToBeDeleted}
      >
        <InputController
          id="name"
          label="Ingresa el nombre del usuario para continuar:"
          control={control}
          isError={!!errors.name}
          error={errors.name?.message}
        />
      </DeleteConfirmationModal>
    </>
  );
};

export default Usuarios;
