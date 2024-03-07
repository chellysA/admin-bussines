"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import BussinesForm from "../../../components/bussinesForm";

const Details = () => {
  useChangeTitleLayoutAdmin("Detalles de la Sede");
  return (
    <div className="mt-10">
      <BussinesForm
        buttonLabel="Aplicar cambios"
        buttonTitle="Aplicar cambios"
      />
    </div>
  );
};
export default Details;
