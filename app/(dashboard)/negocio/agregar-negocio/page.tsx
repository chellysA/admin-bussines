"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import { MdAddBusiness } from "react-icons/md";
import BussinesForm from "../components/bussinesForm";

const CreateUser = () => {
  useChangeTitleLayoutAdmin("Agregar Negocio");
  return (
    <div className="mt-10">
      <BussinesForm
        buttonLabel={<MdAddBusiness className="text-[25px] mx-5" />}
        buttonTitle="Agregar Negocio"
      />
    </div>
  );
};
export default CreateUser;
