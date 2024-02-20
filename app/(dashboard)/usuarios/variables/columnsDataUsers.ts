"use client";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();
export const columnsDataUsers = [
  columnHelper.accessor("nombre", {
    header: "NOMBRE",
  }),
  {
    accessorKey: "cargo",
    header: "CARGO",
  },

  {
    accessorKey: "email",
    header: "EMAIL",
  },

  {
    accessorKey: "acciones",
    header: "ACCIONES",
  },
];
