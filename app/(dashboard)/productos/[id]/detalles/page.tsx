"use client"
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import ProductsForm from "../../components/productsForm";

const Details = () => {
  useChangeTitleLayoutAdmin("Dtalles del Producto")
  return (
    <div className="mt-10">
      <ProductsForm isReadOnly />
    </div>
  );
};
export default Details;
