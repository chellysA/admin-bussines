"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import ProfleSettingsForm from "../components/settingsForm";

const CreateUser = () => {
  useChangeTitleLayoutAdmin("Configurar Perfil");
  return (
    <div className="mt-10">
      <ProfleSettingsForm />
    </div>
  );
};
export default CreateUser;
