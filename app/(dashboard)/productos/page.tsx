"use client";
import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import BasicTable from "../../../components/tables/basicTable";
import Select from "@/components/select";
import Link from "next/link";
import { MdAddBusiness } from "react-icons/md";
import { columnsDataProducts } from "./variables/columnsDataProducts";
import tableDataProducts from "./variables/tableDataProducts.json";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";

const Productos = () => {
  useChangeTitleLayoutAdmin("Productos");
  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:gap-5 md:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-1 col-span-2 gap-5 md:grid-cols-3 md:mr-10 mt-2">
          <InputField placeholder="Nombre" />
          <InputField placeholder="Categoria" />
          <Select options={["Unidad", "Kg"]} label="Presentación" />
        </div>
        <div className="md:ml-12 mt-6 md:mt-2 grid grid-cols-1 col-span-1">
          <Button label="Buscar" title="Buscar Usuario" />
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/productos/agregar-producto">
          <Button
            label={<MdAddBusiness className="text-[25px] mx-5" />}
            className="mt-4"
            title="Añadir Producto"
          />
        </Link>
      </div>
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
