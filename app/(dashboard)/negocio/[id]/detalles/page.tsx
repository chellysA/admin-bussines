"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import BasicTable from "@/components/tables/basicTable";
import { columnsDataSedes } from "../../variables/sedes/columnsDataSedes";
import tableDataSedes from "../../variables/sedes/tableDataSedes.json";

const Details = () => {
  useChangeTitleLayoutAdmin("Detalles del Negocio");
  return (
    <div className="mt-10">
      <BasicTable
        columnsData={columnsDataSedes}
        tableData={tableDataSedes}
        title="Sedes"
      />
    </div>
  );
};
export default Details;
