"use client";
import { IReactTable } from "@/types/react-table";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";
import { MdDeleteForever, MdEdit, MdSearch } from "react-icons/md";

export const columnsDataEnterprise: (
  deleteOnClick: (arg0: string) => void,
) => IReactTable[] = (deleteOnClick) => [
  {
    accessorKey: "name",
    header: "NOMBRE DE LA EMPRESA",
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "phone",
    header: "TELEFONO",
  },
  {
    accessorKey: "address",
    header: "DIRECCION",
  },
  {
    accessorKey: "acciones",
    header: "ACCIONES",
    cell: ({ row }) => (
      <div className="flex gap-3">
        <Link
          href={`/empresas/${row.original._id}/editar`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Editar"
        >
          <MdEdit className="cursor-pointer" />
        </Link>

        <Link
          href={`/empresas/${row.original._id}/detalles`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Detalles"
        >
          <IoMdEye className="cursor-pointer" />
        </Link>
        <MdDeleteForever
          className="cursor-pointer text-[22px] text-gray-900 dark:text-white"
          title="Eliminar"
          onClick={() => deleteOnClick(row.original.name)}
        />
      </div>
    ),
  },
];
