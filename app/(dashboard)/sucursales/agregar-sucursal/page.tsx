"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import { MdAddBusiness, MdDomainAdd } from "react-icons/md";
import BranchBusinessForm from "../components/branchBusinessForm";

const CreateBranchBussiness = () => {
  useChangeTitleLayoutAdmin("Agregar Sucursal");
  return (
    <div className="mt-10">
      <BranchBusinessForm
        buttonLabel={<MdAddBusiness className="text-[25px] mx-5" />}
        buttonTitle="Agregar Sucursal"
      />
    </div>
  );
};
export default CreateBranchBussiness;
