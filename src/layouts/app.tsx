import { ReactNode } from "react";
import { Header } from "@/components/header";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen antialiased bg-gray-100 text-gray-900">
      <Header />
      <main className="w-full">{children}</main>
    </div>
  );
}