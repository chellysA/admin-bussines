"use client";

import { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

import CardMenu from "@/components/card/CardMenu";
import Checkbox from "@/components/checkbox/Checkbox";
import Card from "@/components/card";
import Skeleton from "react-loading-skeleton";

type Props = {
  columnsData: any[];
  tableData: any[];
  title?: string;
  isLoading: boolean;
};

const CheckTable = (props: Props) => {
  const { columnsData, tableData, title = "Check Table", isLoading } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;

  initialState.pageSize = 11;

  return (
    <Card className={"w-full h-full sm:overflow-auto px-6 pb-5"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          {isLoading ? <Skeleton /> : title}
        </div>

        <CardMenu isLoading={isLoading} />
      </header>

      <div className="mt-8 h-full overflow-x-auto">
        <table
          {...getTableProps()}
          className="w-full"
          // variant="simple"
          color="gray-500"
          // mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    key={index}
                  >
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                      {isLoading ? <Skeleton /> : column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let renderData;
                    if (cell.column.Header === "NAME") {
                      renderData = (
                        <div className="flex items-center gap-2">
                          {isLoading ? <Skeleton /> : <Checkbox />}
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {isLoading ? <Skeleton /> : cell.value[0]}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "PROGRESS") {
                      renderData = (
                        <div className="flex items-center">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {isLoading ? <Skeleton /> : cell.value}%
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "QUANTITY") {
                      renderData = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {" "}
                          {isLoading ? <Skeleton /> : cell.value}{" "}
                        </p>
                      );
                    } else if (cell.column.Header === "DATE") {
                      renderData = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {isLoading ? <Skeleton /> : cell.value}
                        </p>
                      );
                    }
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        {isLoading ? <Skeleton /> : renderData}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default CheckTable;
