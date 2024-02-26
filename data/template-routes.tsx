// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdOutlineSupervisorAccount,
  MdBusinessCenter,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/template",
    path: "/template/dashboard",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "NFT Marketplace",
    layout: "/template",
    path: "/template/nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/template",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "/template/data-tables",
  },
  {
    name: "Profile",
    layout: "/template",
    path: "/template/profile",
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
  },
];

export default routes;
