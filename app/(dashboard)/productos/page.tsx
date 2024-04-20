"use client";
import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import BasicTable from "../../../components/tables/basicTable";
import Select from "@/components/select";
import Link from "next/link";
import { MdAddCircle } from "react-icons/md";
import { columnsDataProducts } from "./variables/columnsDataProducts";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateCategorieSchema from "@/data/validations/create-categorie-schema";
import DeleteProductConfirmationSchema from "@/data/validations/Delete-product-confirmation-schema";
import { useGetProducts } from "@/hooks/useGetProducts";
import Modal from "@/components/modal";
import InputController from "@/components/fields/InputController";
import { useCreateCategory } from "@/hooks/useCreateCategory";
import toast from "react-hot-toast";
import DeleteConfirmationModal from "@/components/modal/DeleteConfirmationModal";
import { useDeleteProduct } from "@/hooks/useDeleteProduct";
import { useGetProductById } from "@/hooks/useGetProductById";

const Productos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [deleteConfirmationOpenModal, setDeleteConfirmationOpenModal] =
    useState(false);
  const [productToBeDeleted, setproductToBeDeleted] = useState("");

  const { data: products } = useGetProducts();
  const { mutate: createCategory } = useCreateCategory();
  const { mutate: deleteProduct } = useDeleteProduct();

  useChangeTitleLayoutAdmin("Productos");

  const form = useForm({
    defaultValues: { name: "" },
    resolver: yupResolver(CreateCategorieSchema),
  });

  const deleteProductForm = useForm({
    defaultValues: { name: "" },
    resolver: yupResolver(DeleteProductConfirmationSchema),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const {
    handleSubmit: deleteConfirmatioHandleSubmit,
    control: deleteConfirmationControl,
    formState: { errors: deleteConfirmatioErrors },
    reset: deleteConfirmationReset,
  } = deleteProductForm;

  const onSubmit = async (formValues: any) => {
    try {
      createCategory(formValues, {
        onSuccess: (data) => {
          toast.success(data.info.message);
          setOpenModal(false);
          handleReset();
        },
      });
    } catch (error) {
      console.error("Error de validación:");
    }
  };
  const deleteConfirmationOnSubmit = async (formValues: any) => {
    try {
      if (formValues.name === productToBeDeleted) {
        deleteProduct(formValues, {
          onSuccess: (data) => {
            toast.success(data.info.message);
            setDeleteConfirmationOpenModal(false);
            deleteConfirmationReset();
          },
        });
      }
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  const handleDelete = (name: any) => {
    setDeleteConfirmationOpenModal(true);
    setproductToBeDeleted(name);
  };

  const handleReset = useCallback(() => {
    reset({ name: "" });
  }, [reset]);

  const deleteConfirmationHandleReset = useCallback(() => {
    deleteConfirmationReset({ name: "" });
  }, [deleteConfirmationReset]);

  useEffect(() => {
    !openModal && handleReset();
  }, [handleReset, openModal]);

  useEffect(() => {
    !deleteConfirmationOpenModal && deleteConfirmationHandleReset();
  }, [deleteConfirmationHandleReset, deleteConfirmationOpenModal]);

  return (
    <>
      <form>
        <div className="mt-3 grid grid-cols-1 md:gap-5 md:grid-cols-3">
          <div className="grid grid-cols-1 grid-rows-1 col-span-2 gap-5 md:grid-cols-3 md:mr-10 mt-2">
            <InputField placeholder="Nombre" id="nombre" />
            <InputField placeholder="Categoria" id="categoria" />
            <div className="h-10">
              <Select
                options={["Unidad", "Kg"]}
                placeholder="Presentación"
                id="presentacion"
              />
            </div>
          </div>
          <div className="mt-6 md:mt-2 grid grid-cols-1 col-span-1">
            <Button label="Buscar" title="Buscar Producto" />
            <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
              <Link href="/productos/agregar-producto" className="w-full">
                <Button
                  label={
                    <>
                      <MdAddCircle className="text-[25px] mr-2" />
                      <>Producto</>
                    </>
                  }
                  title="Añadir Producto"
                  variant="full"
                />
              </Link>

              <Button
                label={
                  <>
                    <MdAddCircle className="text-[25px] mr-2" />
                    <>Categoria</>
                  </>
                }
                title="Añadir Categoria"
                variant="full"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <BasicTable
            columnsData={columnsDataProducts(handleDelete)}
            tableData={products || []}
            title="Lista de Productos"
          />
        </div>
      </form>
      <Modal
        title="Agregar Categoria"
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        onConfirm={handleSubmit(onSubmit)}
      >
        <InputController
          id="name"
          label="Categoria"
          placeholder="Agrega una categoria"
          control={control}
          isError={!!errors.name}
          error={errors.name?.message}
        />
      </Modal>
      <DeleteConfirmationModal
        title="Eliminar Producto"
        isOpen={deleteConfirmationOpenModal}
        closeModal={() => setDeleteConfirmationOpenModal(false)}
        onConfirm={deleteConfirmatioHandleSubmit(deleteConfirmationOnSubmit)}
        objectToBeDeleted={productToBeDeleted}
        buttonType="submit"
      >
        <InputController
          id="name"
          label="Ingresa el nombre del producto para continuar:"
          control={deleteConfirmationControl}
          isError={!!deleteConfirmatioErrors.name}
          error={deleteConfirmatioErrors.name?.message}
        />
      </DeleteConfirmationModal>
    </>
  );
};

export default Productos;
