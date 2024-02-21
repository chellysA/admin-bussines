"use client";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();
export const columnsDataUsers = [
  columnHelper.accessor("nombre", {
    header: "NOMBRE",
  }),
  { accessorKey: "id", header: "id" },
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
