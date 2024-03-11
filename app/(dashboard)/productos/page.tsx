"use client";
import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import BasicTable from "../../../components/tables/basicTable";
import Select from "@/components/select";
import Link from "next/link";
import { MdAddBox, MdAddBusiness } from "react-icons/md";
import { columnsDataProducts } from "./variables/columnsDataProducts";
import tableDataProducts from "./variables/tableDataProducts.json";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import Modal from "@/components/modal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateCategorieSchema from "@/data/validations/Create-Categorie-schema";
import InputController from "@/components/fields/InputController";

const Productos = () => {
  const [openModal, setOpenModal] = useState(false);

  const form = useForm({
    defaultValues: { categoria: "" },
    resolver: yupResolver(CreateCategorieSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (data: any) => {
    try {
      console.log("Datos válidos:", data);
      setOpenModal(false);
      handleReset();
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  const handleReset = () => {
    reset({ categoria: "" });
  };

  useChangeTitleLayoutAdmin("Productos");

  useEffect(() => {
    !openModal && handleReset();
  }, [openModal]);

  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:gap-5 md:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-1 col-span-2 gap-5 md:grid-cols-3 md:mr-10 mt-2">
          <InputField placeholder="Nombre" id="nombre" />
          <InputField placeholder="Categoria" id="categoria" />
          <Select
            options={["Unidad", "Kg"]}
            label="Presentación"
            id="presentacionS"
          />
        </div>
        <div className="md:ml-12 mt-6 md:mt-2 grid grid-cols-1 col-span-1">
          <Button label="Buscar" title="Buscar Usuario" />
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Link href="/productos/agregar-producto">
          <Button
            label={
              <>
                <MdAddBox className="text-[25px] mr-2" /> <p>Producto</p>
              </>
            }
            className="mt-4"
            title="Añadir Producto"
          />
        </Link>
        <Button
          label={
            <>
              <MdAddBox className="text-[25px] mr-2" /> <p>Categoria</p>
            </>
          }
          className="mt-4"
          title="Añadir Categoria"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <Modal
        title="Añadir categoria"
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        onConfirm={handleSubmit(onSubmit)}
        buttonType="submit"
      >
        <form>
          <InputController
            id="categoria"
            label="Nombre de la categoria"
            control={control}
            isError={!!errors.categoria}
            error={errors.categoria?.message}
          />
        </form>
      </Modal>
      <div className="mt-8">
        <BasicTable
          columnsData={columnsDataProducts}
          tableData={tableDataProducts}
          title="Lista de Productos"
        />
      </div>
    </>
  );
};

export default Productos;
