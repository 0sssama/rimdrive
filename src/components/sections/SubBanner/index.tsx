import { Button } from "@/components/atom";
import { whatsappNumber } from "@/utils/globals";
import React from "react";
import { MdWhatsapp } from "react-icons/md";
import subBannerImage from "@/assets/images/subbanner.jpeg";
import classNames from "classnames";
import { epilogue } from "@/fonts";

function SubBanner() {
  return (
    <div
      className="w-full relative h-[250px] flex items-center justify-center"
      id="subbanner"
    >
      <div className="relative wrapper h-full flex flex-col justify-center gap-4 z-[2] section">
        <h1
          className={classNames(
            "font-medium text-gray-50 text-md md:text-xl lg:text-4xl md:max-w-[500px] lg:max-w-[600px] !leading-tight",
            epilogue.className
          )}
        >
          À votre disposition, 24h/24, 7j/7
        </h1>
        <div className="w-full flex items-center">
          <Button
            color="white"
            radius="full"
            className="font-medium"
            startContent={<MdWhatsapp size={20} />}
            href={`https://wa.me/${whatsappNumber}?text=Bonjour! Je suis intéressé par la location d'une voiture avec RimDrive et j'aimerais avoir plus d'informations. `}
            target="_blank"
            rel="noopener noreferrer"
            as={"a"}
          >
            Contactez-nous
          </Button>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-[1] bg-gray-900/70"></div>

      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
        <img
          className="min-h-full h-full max-h-full w-full max-w-full min-w-full object-cover"
          src={subBannerImage.src}
          alt="subbanner"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default SubBanner;
