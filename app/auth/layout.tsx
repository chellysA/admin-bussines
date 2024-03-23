import { type Metadata } from "next";
import Link from "next/link";
import FixedPlugin from "@/components/fixedPlugin/FixedPlugin";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Auth | Horizon UI by Ories",
};

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-center items-center flex-col !bg-lightPrimary dark:!bg-navy-900">
        <FixedPlugin />
        <main>
          <div className="my-16 md:w-[403px] flex rounded-xl items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start shadow-xl bg-white dark:bg-navy-700">
            <div className="m-12 mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
