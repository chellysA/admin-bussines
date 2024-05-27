"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import { MdAddBusiness } from "react-icons/md";
import BranchBusinessForm from "../../components/branchBusinessForm";

const Edit = () => {
  useChangeTitleLayoutAdmin("Editar Sucursal");
  return (
    <div className="mt-10">
      <BranchBusinessForm
        buttonLabel={<MdAddBusiness className="text-[25px] mx-5" />}
        buttonTitle="Aplicar Cambios"
      />
    </div>
  );
};
export default Edit;
