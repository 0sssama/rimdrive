import { CarCardProps } from "@/components/molecules/Car";

export const cars: CarCardProps[] = [
  {
    name: "Audi Q8 2023",
    image: "/cars/q8.jpeg",

    isNewArrival: true,
    isBestSeller: true,
    isGoodDeal: true,

    year: 2023,
    capacity: 5,
    fuel: "Diesel",
    transmission: "Auto.",

    avis: 1,
  },
  {
    name: "SEAT Arona 2023",
    image: "/cars/arona.jpg",

    isNewArrival: true,
    isBestSeller: true,
    isGoodDeal: false,

    year: 2023,
    capacity: 5,
    fuel: "Diesel",
    transmission: "Auto.",

    avis: 8,
  },
  {
    name: "VOLKSWAGEN Touareg 2023",
    image: "/cars/touareg.jpeg",

    isNewArrival: true,
    isBestSeller: false,
    isGoodDeal: true,

    year: 2023,
    capacity: 5,
    fuel: "Diesel",
    transmission: "Auto.",

    avis: 2,
  },
  {
    name: "DACIA Duster 2023",
    image: "/cars/duster.webp",

    isNewArrival: true,
    isBestSeller: false,
    isGoodDeal: false,

    year: 2023,
    capacity: 5,
    fuel: "Diesel",
    transmission: "Auto.",

    avis: 4,
  },
  {
    name: "RENAULT Clio 4 2022",
    image: "/cars/clio.png",

    isNewArrival: false,
    isBestSeller: true,
    isGoodDeal: false,

    year: 2022,
    capacity: 5,
    fuel: "Diesel",
    transmission: "Manuelle",

    avis: 12,
  },
  {
    name: "VOLKSWAGEN Golf 5 2017",
    image: "/cars/golf.jpeg",

    isNewArrival: false,
    isBestSeller: true,
    isGoodDeal: true,

    year: 2017,
    capacity: 5,
    fuel: "Essence",
    transmission: "Manuelle",

    avis: 19,
  },
];
