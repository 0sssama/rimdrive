import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { plusJakartaSans } from "@/fonts";

export const metadata: Metadata = {
  title: "RimDrive - Votre Compagnon De Route Marocain",
  description:
    "Explorez le Maroc avec style et confort. Choisissez Rim Location Fes, la référence en location de voitures, pour une expérience inégalée et des véhicules de qualité supérieure. Réservez aujourd'hui et découvrez la liberté sur la route.",
  openGraph: {
    type: "website",
    url: "https://rimdrivefes.com",
    title: "RimDrive - Votre Compagnon De Route Marocain",
    description:
      "Explorez le Maroc avec style et confort. Choisissez RimDrive, la référence en location de voitures, pour une expérience inégalée et des véhicules de qualité supérieure. Réservez aujourd'hui et découvrez la liberté sur la route.",
    siteName: "RimDrive",
    images: [
      {
        url: "/og-image.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={plusJakartaSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
