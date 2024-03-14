import { type Metadata } from "next";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Negocios | Horizon UI by Ories",
};

export default function NegociosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen !bg-lightPrimary dark:!bg-navy-900">
      <main>{children}</main>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
