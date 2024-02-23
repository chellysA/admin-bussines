import ProductsForm from "../components/productsForm";
import { MdAddBusiness } from "react-icons/md";

const CreateUser = () => {
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
