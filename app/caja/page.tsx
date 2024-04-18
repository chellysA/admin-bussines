"use client";
import Button from "@/components/button";
import Card from "@/components/card";
import InputController from "@/components/fields/InputController";
import InputDocumentController from "@/components/fields/InputDocumentController";
import Modal from "@/components/modal";
import BasicTable from "@/components/tables/basicTable";
import clientDataSchema from "@/data/validations/client-data-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdArrowBack } from "react-icons/md";
import { columnsDataClientsData } from "./variables/columnsDataClientsData";
import clientsData from "./variables/clientsData.json";

const Caja = () => {
  const route = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      documentNumber: "",
      documentType: "",
      address: "",
    },
    resolver: yupResolver(clientDataSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = async (data: any) => {
    try {
      if (data) {
        console.log(data);
        toast.success("Cliente agregado exitosamente!!");
        setOpenModal(false);
      }
    } catch (error) {
      console.error("Error de validación:");
    }
  };

  const handleReset = useCallback(() => {
    reset({ name: "", documentNumber: "", documentType: "", address: "" });
  }, [reset]);

  useEffect(() => {
    !openModal && handleReset();
  }, [handleReset, openModal]);

  return (
    <>
      <div className="fixed z-20 top-4">
        <Button
          label={<MdArrowBack className="text-[25px]" />}
          title="Volver"
          onClick={route.back}
        />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        <Card className="col-span-2 p-4">
          <div className="grid grid-cols-4 gap-1">
            <div className="flex justify-center items-center text-center text-xl font-bold">
              "Logo del Negocio"
            </div>
            <div className="col-span-2 grid grid-rows-3 gap-2 pr-8">
              <p className="font-bold">Documento del Cliente:</p>
              <p>...</p>
              <p className="font-bold">Nombre del Cliente:</p>
              <p>...</p>
              <p className="font-bold">Dirección del Cliente:</p>
              <p>...</p>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-bold">Factura N°:</p>
                <p>...</p>
              </div>
              <Button
                label="Agregar Cliente"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>
        </Card>
        <Card className="px-6 py-4">
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-3 gap-8">
              <p className="font-bold">Sub Total:</p>
              <p className="font-bold">IVA:</p>
              <p className="font-bold">Total:</p>
            </div>
            <div className="grid grid-rows-3 gap-8 justify-end">
              <p className="text-xl font-bold">890.85</p>
              <p className="text-xl font-bold">85.36</p>
              <p className="text-[27px] font-bold text-red-400">950.20</p>
            </div>
          </div>
        </Card>
      </div>
      {openModal && (
        <Modal
          title="Agregar Cliente"
          isOpen={openModal}
          closeModal={() => setOpenModal(false)}
          onConfirm={handleSubmit(onSubmit)}
        >
          <InputController
            id="name"
            label="Nombre"
            control={control}
            error={errors.name?.message}
            isError={!!errors.name}
            className="mb-4"
          />
          <InputDocumentController
            id="documentNumber"
            idType="documentType"
            label="Documento"
            control={control}
            isError={!!errors.documentNumber}
            error={errors.documentNumber?.message}
            isErrorType={!!errors.documentType}
            errorType={errors.documentType?.message}
          />
          <InputController
            id="address"
            label="Dirección"
            control={control}
            error={errors.address?.message}
            isError={!!errors.address}
            className="mt-4"
          />
        </Modal>
      )}
      <Card className="mt-2">
        <BasicTable
          columnsData={columnsDataClientsData}
          tableData={clientsData}
          title=""
          pager={false}
        />
      </Card>
      <Card></Card>
    </>
  );
};
export default Caja;
