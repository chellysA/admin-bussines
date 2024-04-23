"use client";
import Link from "next/link";
import { IoMdEye } from "react-icons/io";
import {
  MdCancel,
  MdCheckCircle,
  MdDeleteForever,
  MdEdit,
} from "react-icons/md";

export const columnsDataProducts = (deleteOnClick: (arg0: string) => void) => [
  {
    accessorKey: "name",
    header: "NOMBRE",
  },
  {
    accessorKey: "category",
    header: "CATEGORIA",
    cell: (dataRow: any) => dataRow.row.original?.category?.name,
  },
  {
    accessorKey: "price",
    header: "PRECIO",
  },
  {
    accessorKey: "presentation",
    header: "PRESENTACIÓN",
  },
  {
    accessorKey: "with_iva",
    header: "IVA",
    cell: (props: any) => (
      <div>
        {props.row.original.with_iva ? (
          <MdCheckCircle
            className="text-green-500 text-[28px] cursor-help"
            title="Incluye Iva"
          />
        ) : (
          <MdCancel
            className="text-red-500 text-[28px] cursor-help"
            title="No Incluye Iva"
          />
        )}
      </div>
    ),
  },
  {
    accessorKey: "acciones",
    header: "ACCIONES",
    cell: (props: any) => (
      <div className="flex gap-3">
        <Link
          href={`/productos/${props.row.original.id}/editar`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Editar"
        >
          <MdEdit className="cursor-pointer" />
        </Link>

        <Link
          href={`/productos/${props.row.original.id}/detalles`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Detalles"
        >
          <IoMdEye className="cursor-pointer" />
        </Link>
        <MdDeleteForever
          className="cursor-pointer text-[22px] text-gray-900 dark:text-white"
          title="Eliminar"
          onClick={() => deleteOnClick(props.row.original)}
        />
      </div>
    ),
  },
];
