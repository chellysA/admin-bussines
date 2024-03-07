"use client";
import Link from "next/link";
import { MdDeleteForever, MdEdit, MdSearch } from "react-icons/md";

export const columnsDataBussines = [
  {
    accessorKey: "nombre",
    header: "NOMBRE",
  },
  {
    accessorKey: "sector",
    header: "SECTOR",
  },
  {
    accessorKey: "rif",
    header: "RIF",
  },
  {
    accessorKey: "acciones",
    header: "ACCIONES",
    cell: (props: any) => (
      <div className="flex gap-3">
        <Link
          href={`/negocio/${props.row.original.id}/editar`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Editar"
        >
          <MdEdit className="cursor-pointer" />
        </Link>

        <Link
          href={`/negocio/${props.row.original.id}/detalles`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Detalles"
        >
          <MdSearch className="cursor-pointer" />
        </Link>
        <Link
          href={`/negocio/${props.row.original.id}/delete`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Eliminar"
        >
          <MdDeleteForever className="cursor-pointer" />
        </Link>
      </div>
    ),
  },
];
