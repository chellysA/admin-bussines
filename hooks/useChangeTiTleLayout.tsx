"use client";
import { useCurrentRouteContext } from "@/providers/CurrentRouteProvider";
import { useEffect } from "react";

const useChangeTitleLayoutAdmin = (title: string) => {
  const { changeRoute } = useCurrentRouteContext();

  useEffect(() => {
    changeRoute && changeRoute(title);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [title, changeRoute]);
};

export default useChangeTitleLayoutAdmin;
