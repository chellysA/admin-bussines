import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import BasicTable from "../../../components/tables/basicTable";
import Select from "@/components/select";

const Productos = () => {
  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:gap-5 md:grid-cols-3">
        <div className="grid grid-cols-1 grid-rows-1 col-span-2 md:gap-5 md:grid-cols-3 md:mr-10 mt-2">
          <InputField placeholder="Nombre" mt={true} />
          <InputField placeholder="Email" mt={true} />
          <Select
            options={["Administrador", "Gerente", "Cajero", "Vendedor"]}
            label="Cargo"
          />
        </div>
        <div className="md:ml-12 mt-4 md:mt-0 grid grid-cols-1 col-span-1">
          <Button label="Buscar" mt={true} />
          <Button label="Crear Usuario" mt={true} />
        </div>
      </div>
      <div className="mt-8">
        {/* <BasicTable
          columnsData={columnsDataUsers}
          tableData={tableDataUsers}
          title="Lista de Usuarios"
        /> */}
      </div>
    </>
  );
};

export default Productos;
