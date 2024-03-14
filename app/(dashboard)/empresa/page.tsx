"use client";
import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import BasicTable from "../../../components/tables/basicTable";
import Link from "next/link";
import { MdDomainAdd } from "react-icons/md";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import tableDataEnterprises from "./variables/tableDataEnterprises.json";
import { columnsDataEnterprise } from "./variables/columnsDataEnterprise";

const Empresa = () => {
  useChangeTitleLayoutAdmin("Empresa");
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
        <Link href="/empresa/agregar-empresa">
          <Button
            label={<MdDomainAdd className="text-[25px] mx-5" />}
            className="mt-4"
            title="Agregar Empresa"
          />
        </Link>
      </div>
      <div className="mt-8">
        <BasicTable
          columnsData={columnsDataEnterprise}
          tableData={tableDataEnterprises}
          title="Lista de Negocios"
        />
      </div>
    </>
  );
};

export default Empresa;
