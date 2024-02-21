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
import { MdDeleteForever, MdEdit, MdSearch, MdSettings } from "react-icons/md";

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
                    let renderData;
                    if (cell.column.columnDef.header === "ACCIONES") {
                      let currentCell = cell.getValue() as any;
                      renderData = (
                        <div className="flex items-center gap-2">
                          {currentCell.map((item: any, key: any) => {
                            if (item === "eliminar") {
                              return (
                                <div
                                  key={key}
                                  className="text-[22px] text-gray-600 dark:text-white"
                                >
                                  <MdDeleteForever
                                    onClick={() => {}}
                                    className="cursor-pointer"
                                  />
                                </div>
                              );
                            }
                            if (item === "editar") {
                              return (
                                <div
                                  key={key}
                                  className="text-[22px] text-gray-600 dark:text-white"
                                >
                                  <MdEdit
                                    onClick={() => {
                                      row.getAllCells()[0].getValue();
                                    }}
                                    className="cursor-pointer"
                                  />
                                </div>
                              );
                            }

                            if (item === "ver mas") {
                              return (
                                <div
                                  key={key}
                                  className="text-[22px] text-gray-600 dark:text-white"
                                >
                                  <MdSearch
                                    onClick={() => {}}
                                    className="cursor-pointer"
                                  />
                                </div>
                              );
                            }
                          })}
                        </div>
                      );
                    } else {
                      renderData = cell.column.columnDef.cell;
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[20px] sm:text-[14px]"
                        key={index}
                      >
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {flexRender(renderData, cell.getContext())}
                        </p>
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
