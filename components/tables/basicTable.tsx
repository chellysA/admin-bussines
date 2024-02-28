"use client";

import { useMemo, useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";

import CardMenu from "@/components/card/CardMenu";
import Card from "@/components/card";
import Button from "@/components/button";
import InputField from "@/components/fields/InputField";
import Select from "@/components/select";

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
    getPaginationRowModel: getPaginationRowModel(),
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
      <div className="flex items-center justify-end gap-2 my-4">
              <span>Filas por pagina:</span>
              <div className="min-w-[70px] mr-4">
                {" "}
                <Select
                  options={[10, 20, 30, 40, 50]}
                  label=""
                  onChange={(value) => {
                    tableInstance.setPageSize(Number(value));
                  }}
                />
              </div>
              <span className="flex items-center gap-2 mr-4">
                <div>Pagina</div>
                <strong>
                  {tableInstance.getState().pagination.pageIndex + 1}{" "}
                </strong>
                of <strong>{tableInstance.getPageCount()}</strong>
              </span>
              <Button
                onClick={() => tableInstance.setPageIndex(0)}
                disabled={!tableInstance.getCanPreviousPage()}
                label="<<"
                title="Volver a la pag. 1"
              />

              <Button
                onClick={() => tableInstance.previousPage()}
                disabled={!tableInstance.getCanPreviousPage()}
                label="<"
                title="Ir a la pag. anterior"
              />
              <Button
                onClick={() => tableInstance.nextPage()}
                disabled={!tableInstance.getCanNextPage()}
                label=">"
                title="Ir a la siguiente pag."
              />
              <Button
                onClick={() =>
                  tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
                }
                disabled={!tableInstance.getCanNextPage()}
                label=">>"
                title="Ir a la última pag."
              />
      </div>
    </Card>
  );
};

export default ColumnsUsersTable;
