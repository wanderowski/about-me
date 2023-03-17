import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header";
import React from "react";

interface IMainLayoutProps {
  children: React.ReactNode;
}
function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
