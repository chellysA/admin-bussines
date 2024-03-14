"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./ThemeProvider";
import { ReactNode } from "react";
import AuthProvider from "./AuthProvider";

interface IProps {
  children: ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
export default Providers;
