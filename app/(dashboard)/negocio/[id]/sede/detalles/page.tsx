"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import BussinesForm from "../../../components/bussinesForm";

const Details = () => {
  useChangeTitleLayoutAdmin("Detalles de la Sede");
  return (
    <div className="mt-10">
      <BussinesForm isReadOnly />
    </div>
  );
};
export default Details;
