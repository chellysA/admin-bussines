"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import ProductsForm from "../components/productsForm";
import { MdAdd } from "react-icons/md";

const CreateProduct = () => {
  useChangeTitleLayoutAdmin("Agregar Producto");
  return (
    <div className="mt-10">
      <ProductsForm
        buttonLabel={<MdAdd className="text-[25px] mx-5" />}
        buttonTitle="Agregar Producto"
      />
    </div>
  );
};
export default CreateProduct;
