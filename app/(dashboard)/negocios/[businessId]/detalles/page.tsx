"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import BusinessForm from "../../components/businessForm";

const Details = () => {
  useChangeTitleLayoutAdmin("Detalles del Negocio");
  return (
    <div className="mt-10">
      <BusinessForm isReadOnly />
    </div>
  );
};
export default Details;
