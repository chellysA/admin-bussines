"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import { MdAddBusiness, MdDomainAdd } from "react-icons/md";
import BusinessForm from "../components/businessForm";

const CreateBussiness = () => {
  useChangeTitleLayoutAdmin("Agregar Negocio");
  return (
    <div className="mt-10">
      <BusinessForm
        buttonLabel={<MdAddBusiness className="text-[25px] mx-5" />}
        buttonTitle="Agregar Negocio"
      />
    </div>
  );
};
export default CreateBussiness;
