"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import { MdDomainAdd } from "react-icons/md";
import EnterpriseForm from "../components/enterpriseForm";

const CreateEnterprise = () => {
  useChangeTitleLayoutAdmin("Agregar Empresa");
  return (
    <div className="mt-10">
      <EnterpriseForm
        buttonLabel={<MdDomainAdd className="text-[25px] mx-5" />}
        buttonTitle="Agregar Empresa"
      />
    </div>
  );
};
export default CreateEnterprise;
