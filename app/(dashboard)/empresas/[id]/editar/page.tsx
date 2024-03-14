"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import EnterpriseForm from "../../components/enterpriseForm";
import { MdDomainAdd } from "react-icons/md";

const Edit = () => {
  useChangeTitleLayoutAdmin("Editar la Empresa");
  return (
    <div className="mt-10">
      <EnterpriseForm
        buttonLabel={<MdDomainAdd className="text-[25px] mx-5" />}
        buttonTitle="Aplicar Cambios"
      />
    </div>
  );
};
export default Edit;
