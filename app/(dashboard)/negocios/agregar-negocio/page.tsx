"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import BusinessForm from "../components/businessForm";
import { BsBuildingAdd } from "react-icons/bs";

const CreateBussiness = () => {
  useChangeTitleLayoutAdmin("Agregar Negocio");
  return (
    <div className="mt-10">
      <BusinessForm
        buttonLabel={<BsBuildingAdd className="text-[25px] mx-5" />}
        buttonTitle="Agregar Negocio"
      />
    </div>
  );
};
export default CreateBussiness;
