"use client";

import { Button } from "@/components/atom";
import { plusJakartaSans } from "@/fonts";
import { whatsappNumber } from "@/utils/globals";
import classNames from "classnames";
import { MdWhatsapp } from "react-icons/md";

function Banner() {
  return (
    <div className="relative w-full h-[500px] lg:h-[700px] bg-gray-900 overflow-hidden">
      <div className="absolute w-full h-full flex flex-col items-center justify-center top-0 left-0 z-[2] p-10">
        <h1 className="font-medium text-gray-50 text-2xl md:text-3xl lg:text-5xl text-center md:max-w-[600px] lg:max-w-[800px] !leading-tight">
          Explorez la beauté du Maroc avec l'élégance des quatre roues!
        </h1>
        <p className="text-gray-400 text-sm lg:text-md text-center md:text-sm  md:max-w-[400px] lg:max-w-[500px] mt-2 mb-6">
          {
            "Sélectionnez votre véhicule idéal et contactez-nous sur WhatsApp pour le prendre en main dès aujourd'hui!"
          }
        </p>
        <div
          className={classNames(
            "flex items-center justify-center gap-2 md:gap-4 flex-wrap button-container",
            plusJakartaSans.className
          )}
        >
          <Button
            color="white"
            radius="full"
            className="font-medium"
            startContent={<MdWhatsapp size={20} />}
            href={` https://wa.me/${whatsappNumber}?text=Bonjour! Je suis intéressé par la location d'une voiture avec RimDrive et j'aimerais avoir plus d'informations. `}
            target="_blank"
            rel="noopener noreferrer"
            as={"a"}
          >
            Contactez-nous
          </Button>
          <Button
            color="whiteBordered"
            radius="full"
            className="font-medium"
            href="#collection"
            as="a"
          >
            Notre Collection
          </Button>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-[1] bg-gray-900/50"></div>
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
        <video
          className="min-h-full h-full max-h-full w-full max-w-full min-w-full object-cover"
          preload="auto"
          playsInline
          muted
          loop
          poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
          autoPlay
          src="/videos/banner.webm"
        ></video>
      </div>
    </div>
  );
}

export default Banner;
