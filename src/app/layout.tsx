import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { epilogue, plusJakartaSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Rim Location Fes - Votre Compagnon De Route Marocain",
  description:
    "Explorez le Maroc avec style et confort. Choisissez Rim Location Fes, la référence en location de voitures, pour une expérience inégalée et des véhicules de qualité supérieure. Réservez aujourd'hui et découvrez la liberté sur la route.",
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
