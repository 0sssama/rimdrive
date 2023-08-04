"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import React from "react";
import { Button } from "@/components/atom";
import { whatsappNumber } from "@/utils/globals";

import { IoSparklesSharp } from "react-icons/io5";
import { HiCheckBadge } from "react-icons/hi2";
import { BiDollarCircle } from "react-icons/bi";
import { FaCarAlt } from "react-icons/fa";
import { BsPeopleFill, BsFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";

export interface CarCardProps {
  name: string;

  isNewArrival: boolean;
  isBestSeller: boolean;
  isGoodDeal: boolean;

  year: number;
  capacity: number;
  fuel: "Electrique" | "Diesel" | "Essence";
  transmission: "Manuelle" | "Auto.";

  image: string;

  avis: number;
}

function Car({
  name,
  isNewArrival,
  isBestSeller,
  isGoodDeal,
  year,
  capacity,
  fuel,
  transmission,
  image,
  avis,
}: CarCardProps) {
  return (
    <Card className="w-[320px] md:w-[400px] lg:w-[400px]">
      <CardHeader>
        <img
          alt={name}
          className="object-cover rounded-xl min-h-[250px] max-h-[250px] h-[250px] w-full min-w-full max-w-full drop-shadow-xl"
          src={image}
        />
      </CardHeader>
      <CardBody className="overflow-visible pt-1 pb-2">
        <div className="mb-2 flex items-center flex-wrap gap-2">
          {isNewArrival && (
            <Chip
              color="danger"
              size="sm"
              startContent={<IoSparklesSharp size={14} className="mx-1" />}
            >
              <span className="font-bold !text-[10px] md:text-sm">
                NOUVEL ARRIVAGE
              </span>
            </Chip>
          )}
          {isBestSeller && (
            <Chip
              color="success"
              size="sm"
              startContent={<HiCheckBadge size={14} className="mx-1" />}
            >
              <span className="font-bold !text-[10px] md:text-sm">
                PLUS VENDU
              </span>
            </Chip>
          )}
          {isGoodDeal && (
            <Chip
              color="primary"
              size="sm"
              startContent={<BiDollarCircle size={14} className="mx-1" />}
            >
              <span className="font-bold !text-[10px] md:text-sm">
                BON PRIX
              </span>
            </Chip>
          )}
        </div>
        <h1 className="font-bold text-xl md:text-xl lg:text-2xl mt-2">
          {name}
        </h1>
        {avis > 0 && (
          <div className="w-full flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <AiFillStar size={18} className="text-yellow-500" />
            ))}
            <p className="text-xs">{`(${avis} avis)`}</p>
          </div>
        )}
        <div className="w-full flex items-end justify-between bg-gray-100 rounded-xl mt-4 py-4 px-8">
          <Feature type="year">{year}</Feature>
          <Feature type="transmission">{transmission}</Feature>
          <Feature type="fuel">{fuel}</Feature>
          <Feature type="capacity">{capacity}</Feature>
        </div>
      </CardBody>
      <CardFooter className="w-full">
        <Button
          color="black"
          className="font-semibold w-full"
          size="lg"
          as="a"
          href={`https://wa.me/${whatsappNumber}?text=Bonjour! Je suis intéressé par la location de '${name}' chez RimDrive. J'aimerais avoir plus d'informations. `}
          target="_blank"
          rel="noopener noreferrer"
        >
          Louer Maintenant
        </Button>
      </CardFooter>
    </Card>
  );
}

function Feature({
  type,
  children,
}: {
  type: "year" | "capacity" | "fuel" | "transmission";
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      {type === "year" && <FaCarAlt size={18} className="text-gray-500" />}
      {type === "capacity" && (
        <BsPeopleFill size={18} className="text-gray-500" />
      )}
      {type === "fuel" && (
        <BsFuelPumpFill size={18} className="text-gray-500" />
      )}
      {type === "transmission" && (
        <TbManualGearbox size={18} className="text-gray-500" />
      )}
      <span className="text-gray-500 text-xs font-medium">{children}</span>
    </div>
  );
}

export default Car;
