import { ReactNode } from "react";
import { Header } from "@/components/header";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen antialiased bg-background text-foreground">
      <Header />
      <main className="w-full">{children}</main>
    </div>
  );
}
