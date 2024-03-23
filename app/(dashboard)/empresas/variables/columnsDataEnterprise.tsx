"use client";
import Link from "next/link";
import { MdDeleteForever, MdEdit, MdSearch } from "react-icons/md";

export const columnsDataEnterprise = (
  deleteOnClick: (arg0: string) => void,
) => [
  {
    accessorKey: "name",
    header: "NOMBRE DE LA EMPRESA",
  },
  {
    accessorKey: "representativeName",
    header: "NOMBRE DEL REPRESENTANTE",
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
    accessorKey: "rif",
    header: "DOCUMENTO",
  },
  {
    accessorKey: "address",
    header: "DIRECCION",
  },
  {
    accessorKey: "acciones",
    header: "ACCIONES",
    cell: (props: any) => (
      <div className="flex gap-3">
        <Link
          href={`/empresas/${props.row.original._id}/editar`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Editar"
        >
          <MdEdit className="cursor-pointer" />
        </Link>

        <Link
          href={`/empresas/${props.row.original._id}/detalles`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Detalles"
        >
          <MdSearch className="cursor-pointer" />
        </Link>
        <MdDeleteForever
          className="cursor-pointer text-[22px] text-gray-900 dark:text-white"
          title="Eliminar"
          onClick={() => deleteOnClick(props.row.original.name)}
        />
      </div>
    ),
  },
];
