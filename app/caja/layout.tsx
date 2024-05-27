export default function RegisterBoxLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex relative justify-center !bg-lightPrimary dark:!bg-navy-900">
      <main className="w-full h-full">
        <div className="m-4">{children}</div>
      </main>
    </div>
  );
}
