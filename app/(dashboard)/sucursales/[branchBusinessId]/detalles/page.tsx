"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import BranchBusinessForm from "../../components/branchBusinessForm";

const Details = () => {
  useChangeTitleLayoutAdmin("Detalles de la Sucursal");
  return (
    <div className="mt-10">
      <BranchBusinessForm isReadOnly />
    </div>
  );
};
export default Details;
