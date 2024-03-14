"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import ProductsForm from "../../components/productsForm";

const Edit = () => {
  useChangeTitleLayoutAdmin("Editar Producto");
  return (
    <div className="mt-10">
      <ProductsForm buttonLabel="Aplicar Cambios" />
    </div>
  );
};
export default Edit;
