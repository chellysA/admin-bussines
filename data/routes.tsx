// Icon Imports
import { IRoute } from "@/types/routes";
import {
  MdHome,
  MdOutlineSupervisorAccount,
  MdBusinessCenter,
  MdDomain,
} from "react-icons/md";

const routes: IRoute[] = [
  {
    name: "Main Dashboard",
    layout: "/dashboard",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "Usuarios",
    layout: "/dashboard",
    path: "usuarios",
    icon: <MdOutlineSupervisorAccount className="h-6 w-6" />,
  },
  {
    name: "Productos",
    layout: "/dashboard",
    path: "productos",
    icon: <MdBusinessCenter className="h-6 w-6" />,
  },

  {
    name: "Empresas",
    layout: "/empresas",
    path: "empresas",
    icon: <MdDomain className="h-6 w-6" />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/dashboard",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/dashboard",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  // },
  // {
  //   name: "Profile",
  //   layout: "/dashboard",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  // },
];

export default routes;
