import Card from "@/components/card";
import { FC } from "react";

const Enterprise: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <h1 className="shrink text-[33px] capitalize text-navy-700 dark:text-white font-bold mb-8">
        Empresas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-8">
        <Card className="w-[200px] min-h-[150px] p-4 flex justify-center items-center text-center">
          <img src="https://placekitten.com/200/300" alt="" />
        </Card>
      </div>
    </div>
  );
};

export default Enterprise;
