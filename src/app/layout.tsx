import type { Metadata } from "next";
import "./globals.scss";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Main } from "@/components/main";

export const metadata: Metadata = {
  title: "Gestor de comissões",
  description: "Gestão de comissões",
  openGraph: {
    title: 'App de gestao de comissões',
    description: 'App de gestão de comissões'
  },
  robots :{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
          <Header/>
          <Main>
            {children}
          </Main>
          <Footer/>
        </body>
    </html>
  );
}
