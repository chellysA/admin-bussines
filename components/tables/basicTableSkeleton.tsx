import CardMenu from "@/components/card/CardMenu";
import Card from "@/components/card";
import Button from "@/components/button";
import Select from "@/components/select";
import Skeleton from "../skeleton";

const ColumnsUsersTable = () => {
  return (
    <Card className={"w-full pb-10 p-4 h-full"}>
      <header className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          <Skeleton className="w-40 h-4" />
        </div>
        <CardMenu />
      </header>

      <div className="mt-8 h-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>
                <Skeleton className="w-20 h-4" />
              </th>
              <th>
                <Skeleton className="w-20 h-4" />
              </th>
              <th>
                <Skeleton className="w-20 h-4" />
              </th>
              <th>
                <Skeleton className="w-20 h-4" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
            </tr>
            <tr>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
            </tr>
            <tr>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
            </tr>
            <tr>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
              <td className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]">
                <Skeleton className="w-30 h-4" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-3 my-4">
        <div className="flex gap-2 mb-2 md:mb-0">
          <span className="flex items-center gap-2 mr-4">
            <Skeleton className="w-20 h-4" />
          </span>
          <Skeleton className="w-10 h-6" />
          <Skeleton className="w-10 h-6" />
          <Skeleton className="w-10 h-6" />
          <Skeleton className="w-10 h-6" />
        </div>
        <div className="flex gap-2 items-center ">
          <Skeleton className="w-10 h-4" />
          <Skeleton className="w-15 h-8" />
        </div>
      </div>
    </Card>
  );
};

export default ColumnsUsersTable;
