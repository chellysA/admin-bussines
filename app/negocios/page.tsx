import BussinesCard from "@/components/card/BussinesCard";
import { FC } from "react";

const Bussines: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <h1 className="shrink text-[33px] capitalize text-navy-700 dark:text-white font-bold mb-8">
        Negocios
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-8">
        <BussinesCard src="https://placekitten.com/200/300" />
      </div>
    </div>
  );
};

export default Bussines;
