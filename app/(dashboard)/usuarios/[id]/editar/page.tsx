"use client"
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import UsersForm from "../../components/usersForm";

const Edit = () => {
  useChangeTitleLayoutAdmin("Editar Usuario")
  return (
    <div className="mt-10">
      <UsersForm buttonLabel="Aplicar Cambios" />
    </div>
  );
};
export default Edit;
