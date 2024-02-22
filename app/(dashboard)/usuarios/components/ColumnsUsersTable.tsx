"use client";

import { useMemo, useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";

import CardMenu from "@/components/card/CardMenu";
import Card from "@/components/card";

type Props = {
  columnsData: any[];
  tableData: any[];
  title?: string;
};

const ColumnsUsersTable = (props: Props) => {
  const { columnsData, tableData, title = "4-Columns Table" } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const [filtering, setFiltering] = useState("");

  const tableInstance = useReactTable({
    columns: columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });
  return (
    <Card className={"w-full pb-10 p-4 h-full"}>
      <header className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          {title}
        </div>
        <CardMenu />
      </header>

      <div className="mt-8 h-full overflow-x-auto">
        <table className="w-full">
          <thead>
            {tableInstance.getHeaderGroups().map((headerGroup, index) => (
              <tr key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={index}
                    className="border-b border-gray-200 pr-14 pb-[10px] dark:!border-navy-700"
                  >
                    <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-600">
                      {flexRender(
                        column.column.columnDef.header,
                        column.getContext()
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {tableInstance.getRowModel().rows.map((row, index) => {
              return (
                <tr key={index}>
                  {row.getVisibleCells().map((cell, index) => {
                    return (
                      <td
                        className="pt-[14px] pb-[20px] sm:text-[14px]"
                        key={index}
                      >
                        <div>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
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

export default ColumnsUsersTable;
