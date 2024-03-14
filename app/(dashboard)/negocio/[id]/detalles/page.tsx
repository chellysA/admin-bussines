"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import BasicTable from "@/components/tables/basicTable";
import { columnsDataBussines } from "../../variables/columnsDataBussines";
import tableDataBussines from "../../variables/tableDataBussines.json";

const Details = () => {
  useChangeTitleLayoutAdmin("Detalles del Negocio");
  return (
    <div className="mt-10">
      <BasicTable
        columnsData={columnsDataBussines}
        tableData={tableDataBussines}
        title="Sedes"
      />
    </div>
  );
};
export default Details;
