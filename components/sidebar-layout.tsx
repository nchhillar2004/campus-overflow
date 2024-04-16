import { Loading } from "./loading";
import Sidebar from "./sidebar/sidebar";
import { Suspense } from "react";

export default function SidebarLayout({
  children,
  selectedOption,
}: {
  children: React.ReactNode;
  selectedOption: string;
}) {
  return (
    <div className="flex">
      <Sidebar selectedOption={selectedOption} />
      <main className="w-full px-4 py-4 lg:py-5 lg:px-6">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </div>
  );
}
