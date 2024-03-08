"use client";
import Link from "next/link";
import {
  MdCancel,
  MdCheckCircle,
  MdDeleteForever,
  MdEdit,
  MdSearch,
} from "react-icons/md";

export const columnsDataProducts = [
  {
    accessorKey: "nombre",
    header: "NOMBRE",
  },
  {
    accessorKey: "categoria",
    header: "CATEGORIA",
  },
  {
    accessorKey: "sede",
    header: "SEDE",
  },
  {
    accessorKey: "presentacion",
    header: "PRESENTACION",
  },
  {
    accessorKey: "precio",
    header: "PRECIO",
  },
  {
    accessorKey: "iva",
    header: "IVA",
    cell: (props: any) => (
      <div>
        {props.row.original.iva === "Incluye" ? (
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
    accessorKey: "cantidad en almacen",
    header: "CANTIDAD EN ALMACEN",
  },
  {
    accessorKey: "stock",
    header: "STOCK",
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
          <MdSearch className="cursor-pointer" />
        </Link>
        <Link
          href={`/productos/${props.row.original.id}/delete`}
          className="text-[22px] text-gray-900 dark:text-white"
          title="Eliminar"
        >
          <MdDeleteForever className="cursor-pointer" />
        </Link>
      </div>
    ),
  },
];
