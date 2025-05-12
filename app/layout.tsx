import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Les métadonnée pour la recherche sur le web
export const metadata: Metadata = {
  title: "ASCCI - Association des Scouts Catholique de Côte d'Ivoire",
  description: "ASSCI est l'Association des Scouts Catholique de Côte d'Ivoire qui régroupe plus 30.000 scouts dans notre association.",
  icons: {
    icon: "/logo_ascci.png", // public/images_logo --- Chemin vers votre favicon
    shortcut: "/logo_ascci.png", // Optionnel : pour les raccourcis
    apple: "/logo_ascci.png", // Optionnel : pour les appareils Apple
  },
  keywords: [
    "scoutisme ivoirien", 
    "ASSCI", 
    "Scout en Côte d'Ivoire", 
    "association des scouts catholique de côte d'ivoire",
    "scouts catholique"
  ],
  authors: [{name:"ASCCI", }],
  // viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  // openGraph: {
  //   title: "ASCCI",
  //   description: "Association des Scouts Catholique de Côte d'Ivoire",
  //   url: "",
  //   siteName: "ASCCI",
  //   images: [
  //     {
  //       url: "/logo_ascci.png",
  //       width: 800,
  //       height: 600,
  //       alt: "Logo de l'ASSCI",
  //     },
  //   ],
  //   locale: "fr_FR",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="fr">
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
