"use client";
import Link from "next/link";
import { MdDeleteForever, MdEdit, MdSearch } from "react-icons/md";

export const columnsDataUsers = [
  {
    accessorKey: "nombre",
    header: "NOMBRE",
  },
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
    cell: (props: any) => (
      <div className="flex gap-3">
        <Link
          href={`/usuarios/${props.row.original.id}/edit`}
          className="text-[22px] text-gray-900 dark:text-white"
        >
          <MdEdit className="cursor-pointer" />
        </Link>

        <Link
          href={`/usuarios/${props.row.original.id}/detalles`}
          className="text-[22px] text-gray-900 dark:text-white"
        >
          <MdSearch className="cursor-pointer" />
        </Link>
        <Link
          href={`/usuarios/${props.row.original.id}/delete`}
          className="text-[22px] text-gray-900 dark:text-white"
        >
          <MdDeleteForever className="cursor-pointer" />
        </Link>
      </div>
    ),
  },
];