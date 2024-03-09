"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

export interface CurrentRouteInterface {
  currentRoute: string;
  changeRoute: (state: string) => void;
}

export const CurrentRouteContext = createContext({} as CurrentRouteInterface);

type Props = {
  children: ReactNode;
};

export const CurrentRouteProvider = ({ children }: Props) => {
  const [currentRoute, setCurrentRoute] = useState("");

  const changeRoute = (newRoute: string) => {
    setCurrentRoute(newRoute);
  };

  return (
    <CurrentRouteContext.Provider value={{ currentRoute, changeRoute }}>
      {children}
    </CurrentRouteContext.Provider>
  );
};

export const useCurrentRouteContext = () => {
  return useContext(CurrentRouteContext);
};
