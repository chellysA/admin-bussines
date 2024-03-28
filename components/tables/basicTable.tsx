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
import Select from "@/components/select";
import SkeletonComponent from "../loading/SkeletonComponent";
import { IReactTable } from "@/types/react-table";

interface CellProps {
  row: {
    original: {
      iva: string;
    };
  };
}

type Props = {
  columnsData: IReactTable[];
  tableData: any[];
  title?: string;
  isLoading: boolean;
};

const ColumnsUsersTable = (props: Props) => {
  const {
    columnsData,
    tableData,
    title = "4-Columns Table",
    isLoading,
  } = props;

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
        <CardMenu isLoading={isLoading} />
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
                    {isLoading ? (
                      <SkeletonComponent />
                    ) : (
                      <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-600">
                        {flexRender(
                          column.column.columnDef.header,
                          column.getContext(),
                        )}
                      </div>
                    )}
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
                        className="pt-[14px] pb-[20px] pr-6 sm:text-[14px]"
                        key={index}
                      >
                        {isLoading ? (
                          <SkeletonComponent />
                        ) : (
                          <div>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-3 my-4">
        <div className="flex gap-2 mb-2 md:mb-0">
          {isLoading ? (
            <SkeletonComponent />
          ) : (
            <span className="flex items-center gap-2 mr-4">
              <div>Pagina</div>
              <strong>
                {tableInstance.getState().pagination.pageIndex + 1}{" "}
              </strong>
              of
              <strong>{tableInstance.getPageCount()}</strong>
            </span>
          )}
          {isLoading ? (
            <SkeletonComponent />
          ) : (
            <Button
              onClick={() => tableInstance.setPageIndex(0)}
              disabled={!tableInstance.getCanPreviousPage()}
              label="<<"
              title="Volver a la pag. 1"
            />
          )}

          {isLoading ? (
            <SkeletonComponent />
          ) : (
            <Button
              onClick={() => tableInstance.previousPage()}
              disabled={!tableInstance.getCanPreviousPage()}
              label="<"
              title="Ir a la pag. anterior"
            />
          )}
          {isLoading ? (
            <SkeletonComponent />
          ) : (
            <Button
              onClick={() => tableInstance.nextPage()}
              disabled={!tableInstance.getCanNextPage()}
              label=">"
              title="Ir a la siguiente pag."
            />
          )}
          {isLoading ? (
            <SkeletonComponent />
          ) : (
            <Button
              onClick={() =>
                tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
              }
              disabled={!tableInstance.getCanNextPage()}
              label=">>"
              title="Ir a la última pag."
            />
          )}
        </div>
        <div className="flex gap-2 items-center ">
          <span>{isLoading ? <SkeletonComponent /> : "Filas por pagina:"}</span>
          <div className="min-w-[70px] mr-4">
            {isLoading ? (
              <SkeletonComponent />
            ) : (
              <Select
                id="page"
                options={[10, 20, 30, 40, 50]}
                placeholder=""
                onChange={(value) => {
                  tableInstance.setPageSize(Number(value));
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ColumnsUsersTable;
