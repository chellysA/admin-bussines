import type { JSX } from "react";
export interface IReactTable {
  accessorKey: string;
  header: string;
  cell?: (props: CellProps) => JSX.Element;
}
