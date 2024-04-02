"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import BusinessForm from "../../components/businessForm";
import { MdAddBusiness } from "react-icons/md";

const Details = () => {
  useChangeTitleLayoutAdmin("Editar el Negocio");
  return (
    <div className="mt-10">
      <BusinessForm
        buttonLabel={<MdAddBusiness className="text-[25px] mx-5" />}
        buttonTitle="Aplicar Cambios"
      />
    </div>
  );
};
export default Details;
