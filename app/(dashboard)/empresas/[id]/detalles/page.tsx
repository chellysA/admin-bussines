"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import EnterpriseForm from "../../components/enterpriseForm";

const Details = () => {
  useChangeTitleLayoutAdmin("Detalles de la Empresa");
  return (
    <div className="mt-10">
      <EnterpriseForm isReadOnly />
    </div>
  );
};
export default Details;
