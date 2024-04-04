"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import { MdAddBusiness } from "react-icons/md";
import BranchBusinessForm from "../../components/branchBusinessForm";

const Details = () => {
  useChangeTitleLayoutAdmin("Editar Sucursal");
  return (
    <div className="mt-10">
      <BranchBusinessForm isReadOnly />
    </div>
  );
};
export default Details;
