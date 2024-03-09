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

const Usuarios = () => {
  useChangeTitleLayoutAdmin("Usuarios");
  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:gap-5 md:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-1 col-span-2 gap-5 md:grid-cols-3 md:mr-10 mt-2">
          <InputField placeholder="Nombre" />
          <InputField placeholder="Email" />
          <Select
            options={["Administrador", "Gerente", "Cajero", "Vendedor"]}
            label="Cargo"
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
          columnsData={columnsDataUsers}
          tableData={tableDataUsers}
          title="Lista de Usuarios"
        />
      </div>
    </>
  );
};

export default Usuarios;
