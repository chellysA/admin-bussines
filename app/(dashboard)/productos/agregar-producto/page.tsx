"use client";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import ProductsForm from "../components/productsForm";
import { MdAddBusiness } from "react-icons/md";

const CreateUser = () => {
  useChangeTitleLayoutAdmin("Agregar Producto");
  return (
    <div className="mt-10">
      <ProductsForm
        buttonLabel={<MdAddBusiness className="text-[25px] mx-5" />}
        buttonTitle="Agregar Producto"
      />
    </div>
  );
};
export default CreateUser;
