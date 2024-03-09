"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import UsersForm from "../../components/usersForm";

const Details = () => {
  useChangeTitleLayoutAdmin("Detalles del Usuario");
  return (
    <div className="mt-10">
      <UsersForm isReadOnly />
    </div>
  );
};
export default Details;
