import { IoMdPersonAdd } from "react-icons/io";
import UsersForm from "../components/usersForm";

const CreateUser = () => {
  return (
    <div className="mt-10">
      <UsersForm
        buttonLabel={<IoMdPersonAdd className="text-[25px] mx-5" />}
        buttonTitle="Agregar Usuario"
      />
    </div>
  );
};
export default CreateUser;
