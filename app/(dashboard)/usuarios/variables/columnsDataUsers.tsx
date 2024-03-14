"use client";
import Link from "next/link";
import { MdDeleteForever, MdEdit, MdSearch } from "react-icons/md";

export const columnsDataUsers = (deleteOnClick: (arg0: string) => void) => [
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
          href={`/usuarios/${props.row.original.id}/editar`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Editar"
        >
          <MdEdit className="cursor-pointer" />
        </Link>

        <Link
          href={`/usuarios/${props.row.original.id}/detalles`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Detalles"
        >
          <MdSearch className="cursor-pointer" />
        </Link>
        <MdDeleteForever
          className="cursor-pointer text-[22px] text-gray-900 dark:text-white"
          title="Eliminar"
          onClick={() => deleteOnClick(props.row.original.nombre)}
        />
      </div>
    ),
  },
];
