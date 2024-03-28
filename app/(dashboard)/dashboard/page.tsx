"use client";
import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";
import WeeklyRevenue from "./components/WeeklyRevenue";
import TotalSpent from "./components/TotalSpent";
import PieChartCard from "./components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";
import Widget from "@/components/widget/Widget";
import CheckTable from "./components/CheckTable";
import ComplexTable from "./components/ComplexTable";
import DailyTraffic from "./components/DailyTraffic";
import TaskCard from "./components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import useChangeTitleLayoutAdmin from "@/hooks/useChangeTiTleLayout";
import Skeleton from "react-loading-skeleton";

const MiniCalendar = dynamic(
  () => import("@/components/calendar/MiniCalendar"),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  },
);

type Props = {};

const DashboardPage: FC<Props> = () => {
  const [isLoading, setIsLoading] = useState(true);

  useChangeTitleLayoutAdmin("Dashboard");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* Card widget */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          isLoading={isLoading}
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$340.5"}
        />

        <Widget
          isLoading={isLoading}
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={"$642.39"}
        />
        <Widget
          isLoading={isLoading}
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"$574.34"}
        />
        <Widget
          isLoading={isLoading}
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"$1,000"}
        />
        <Widget
          isLoading={isLoading}
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
        />
        <Widget
          isLoading={isLoading}
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
        />
      </div>

      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent isLoading={isLoading} />
        <WeeklyRevenue isLoading={isLoading} />
      </div>

      {/* Tables & Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            isLoading={isLoading}
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic isLoading={isLoading} />
          <PieChartCard isLoading={isLoading} />
        </div>

        {/* Complex Table , Task & Calendar */}
        <ComplexTable
          isLoading={isLoading}
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard isLoading={isLoading} />
          <div className="grid grid-cols-1 rounded-[20px]">
            {isLoading ? <Skeleton /> : <MiniCalendar />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
