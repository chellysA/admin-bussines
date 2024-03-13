"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./ThemeProvider";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
export default Providers;
