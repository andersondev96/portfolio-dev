import { ReactNode } from "react";
import { Header } from "@/components/header";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen antialiased bg-gray-100">
      <Header />
      <main className="flex flex-1 flex-row pt-6">{children}</main>
    </div>
  );
}