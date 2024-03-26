"use client";

import CardMenu from "@/components/card/CardMenu";
import Card from "@/components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { useMemo } from "react";
import Progress from "@/components/progress";
import Skeleton from "react-loading-skeleton";

type Props = {
  columnsData: any[];
  tableData: any[];
  title?: string;
  isLoading: boolean;
};

const ComplexTable = (props: Props) => {
  const { columnsData, tableData, title = "Complex Table", isLoading } = props;

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
  initialState.pageSize = 5;

  return (
    <Card className={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          {isLoading ? <Skeleton /> : title}
        </div>
        <CardMenu isLoading={isLoading} />
      </div>

      <div className="mt-8 overflow-x-auto h-full">
        <table {...getTableProps()} className="w-full">
          {isLoading ? (
            <Skeleton />
          ) : (
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={index}
                      className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    >
                      <p className="text-xs tracking-wide text-gray-600">
                        {column.render("Header")}
                      </p>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          )}
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let renderData;
                    if (cell.column.Header === "NAME") {
                      renderData = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {isLoading ? <Skeleton /> : cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "STATUS") {
                      renderData = (
                        <div className="flex items-center gap-2">
                          {isLoading ? (
                            <Skeleton />
                          ) : (
                            <div className={`rounded-full text-xl`}>
                              {cell.value === "Approved" ? (
                                <MdCheckCircle className="text-green-500" />
                              ) : cell.value === "Disable" ? (
                                <MdCancel className="text-red-500" />
                              ) : cell.value === "Error" ? (
                                <MdOutlineError className="text-orange-500" />
                              ) : null}
                            </div>
                          )}
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {isLoading ? <Skeleton /> : cell.value}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "DATE") {
                      renderData = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {isLoading ? <Skeleton /> : cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "PROGRESS") {
                      renderData = (
                        <Progress width="w-[108px]" value={cell.value} />
                      );
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
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

export default ComplexTable;
