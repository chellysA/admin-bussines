import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="spinner fixed inset-0 bg-navy-900 z-50 flex justify-center items-center">
      <ClipLoader color="#1B254B" size={100} speedMultiplier={1} />
    </div>
  );
};

export default Spinner;
