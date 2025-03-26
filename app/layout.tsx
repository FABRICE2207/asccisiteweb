import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


export const metadata: Metadata = {
  title: "ASSCI",
  description: "Association des Scouts Catholique de Côte d'Ivoire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        {/* Le header */}
        <Header />
          {children}
        {/* Le footer */}
        <Footer />
      </body>
    </html>
  );
}
