import React from "react";

import Card from "@/components/card";
import CardMenu from "@/components/card/CardMenu";
import Checkbox from "@/components/checkbox/Checkbox";
import { MdDragIndicator, MdCheckCircle } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

type Props = {
  isLoading: boolean;
};

const TaskCard = ({ isLoading }: Props) => {
  return (
    <Card className="pb-7 p-[20px]">
      {/* task header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
            {isLoading ? (
              <Skeleton />
            ) : (
              <MdCheckCircle className="h-6 w-6 text-brand-500 dark:text-brand-300" />
            )}
          </div>
          <h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">
            {isLoading ? <Skeleton /> : "Tasks"}
          </h4>
        </div>
        <CardMenu isLoading={isLoading} />
      </div>

      {/* task content */}

      <div className="h-full w-full">
        <div className="mt-5 flex items-center justify-between p-2">
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-base font-bold text-navy-700 dark:text-white">
                Landing Page Design
              </p>
            </div>
          )}
          <div>
            {isLoading ? (
              <Skeleton />
            ) : (
              <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
            )}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-base font-bold text-navy-700 dark:text-white">
                Mobile App Design
              </p>
            </div>
          )}
          <div>
            {isLoading ? (
              <Skeleton />
            ) : (
              <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
            )}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-base font-bold text-navy-700 dark:text-white">
                Dashboard Builder
              </p>
            </div>
          )}
          <div>
            {isLoading ? (
              <Skeleton />
            ) : (
              <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
            )}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-base font-bold text-navy-700 dark:text-white">
                Landing Page Design
              </p>
            </div>
          )}
          <div>
            {isLoading ? (
              <Skeleton />
            ) : (
              <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
            )}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Checkbox />
              <p className="text-base font-bold text-navy-700 dark:text-white">
                Dashboard Builder
              </p>
            </div>
          )}
          <div>
            {isLoading ? (
              <Skeleton />
            ) : (
              <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
