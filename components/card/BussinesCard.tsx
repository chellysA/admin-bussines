import Footer from "../footer/Footer";

interface IBussinesCard {
  src: string;
  bussinesName?: string;
  alt?: string;
}
const BussinesCard = ({ src, bussinesName, alt }: IBussinesCard) => {
  return (
    <div className="w-[200px] h-[200px] min-h-[150px] p-4 flex justify-center items-center text-center rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none ">
      {!bussinesName && (
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      )}
      <p className="text-xl text-navy-700 dark:text-white font-bold">
        {bussinesName}
      </p>
    </div>
  );
};
export default BussinesCard;
