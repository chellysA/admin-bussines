"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import BussinesForm from "../../components/bussinesForm";

const Details = () => {
  useChangeTitleLayoutAdmin("Editar Negocio");
  return (
    <div className="mt-10">
      <BussinesForm
        buttonLabel="Aplicar Cambios"
        buttonTitle="Aplicar cambios"
      />
    </div>
  );
};
export default Details;
