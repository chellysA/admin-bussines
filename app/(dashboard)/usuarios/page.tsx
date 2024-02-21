import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import ColumnsUsersTable from "./components/ColumnsUsersTable";
import tableDataUsers from "./variables/tableDataUsers.json";
import { columnsDataUsers } from "./variables/columnsDataUsers";

const Usuarios = () => {
  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:gap-5 md:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-1 col-span-2 md:gap-5 md:grid-cols-3 md:mr-10 mt-2">
          <InputField placeholder="Nombre" />
          <InputField placeholder="Email" />
          <InputField placeholder="Cargo" />
        </div>
        <div className="md:ml-12 mt-4 md:mt-0 grid grid-cols-1 col-span-1">
          <Button label="Buscar" />
          <Button label="Crear Usuario" />
        </div>
      </div>
      <div className="mt-8">
        <ColumnsUsersTable
          columnsData={columnsDataUsers}
          tableData={tableDataUsers}
          title="Lista de Usuarios"
        />
      </div>
    </>
  );
};

export default Usuarios;