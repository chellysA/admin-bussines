"use client";
import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import BasicTable from "../../../components/tables/basicTable";
import Select from "@/components/select";
import Link from "next/link";
import { MdAddCircle } from "react-icons/md";
import { columnsDataProducts } from "./variables/columnsDataProducts";
import tableDataProducts from "./variables/tableDataProducts.json";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";

const Productos = () => {
  useChangeTitleLayoutAdmin("Productos");
  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:gap-5 md:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-1 col-span-2 gap-5 md:grid-cols-3 md:mr-10 mt-2">
          <InputField placeholder="Nombre" id="nombre" />
          <InputField placeholder="Categoria" id="categoria" />
          <div className="h-10">
            <Select
              options={["Unidad", "Kg"]}
              label="Presentación"
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
            />
          </div>
        </div>
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
