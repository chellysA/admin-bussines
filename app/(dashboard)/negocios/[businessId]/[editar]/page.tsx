"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import BusinessForm from "../../components/businessForm";
import { BsBuildingAdd } from "react-icons/bs";

const Details = () => {
  useChangeTitleLayoutAdmin("Editar el Negocio");
  return (
    <div className="mt-10">
      <BusinessForm
        buttonLabel={<BsBuildingAdd className="text-[22px] mx-5" />}
        buttonTitle="Aplicar Cambios"
      />
    </div>
  );
};
export default Details;
