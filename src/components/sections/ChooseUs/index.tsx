import { FaShippingFast } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";
import { MdSupport, MdWhatsapp } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { Button } from "@/components/atom";
import { whatsappNumber } from "@/utils/globals";

function ChooseUs() {
  return (
    <div className="w-full section bg-gray-900" id="choose-us">
      <div className="relative wrapper">
        <div className="w-full flex flex-col items-center gap-3">
          <h1 className="text-gray-50 font-bold text-3xl md:text-5xl lg:text-5xl max-w-[600px] text-center">
            Choisissez l&apos;Excellence
          </h1>
          <p className="text-gray-400 text-xs md:text-sm lg:text-md max-w-[300px] md:max-w-[500px] text-center">
            {
              "Location facile, sans tracas, avec une gamme variée de véhicules et des conditions flexibles. Nous sommes là pour vous."
            }
          </p>
        </div>
        <div className="w-full flex items-start justify-center mt-12 md:mt-20 flex-wrap gap-x-4 gap-y-8">
          {items.map((item, i) => (
            <div
              className="min-w-[280px] max-w-[300px] flex flex-col items-center gap-2 text-gray-50 text-center"
              key={i}
            >
              <div className="w-[60px] h-[60px] rounded-full bg-gray-50 flex items-center justify-center">
                {item.icon}
              </div>
              <h2 className="font-bold text-md md:text-md lg:text-xl mt-2">
                {item.title}
              </h2>
              <p className="text-xs md:text-sm max-w-[80%] text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full mt-16 flex items-center justify-center gap-2 flex-wrap gap-y-4">
          <p className="text-sm text-gray-50">Nous sommes à votre service :</p>
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
    </div>
  );
}

const items = [
  {
    icon: <IoMdPricetags size={24} className="text-gray-900" />,
    title: "Prix Affordables",
    description:
      "Notre gamme de prix compétitifs vous offre le luxe sans compromettre votre budget.",
  },
  {
    icon: <FaShippingFast size={24} className="text-gray-900" />,
    title: "Livraison Rapide & Pratique",
    description:
      "Nous vous livrons votre véhicule où vous voulez, quand vous voulez, sans tracas.",
  },
  {
    icon: <IoSparklesSharp size={24} className="text-gray-900" />,
    title: "Qualité Royale",
    description:
      "Nous ne fournissons pas simplement des voitures; nous vous donnons une promesse, un bijou sur quatre roues.",
  },
  {
    icon: <MdSupport size={24} className="text-gray-900" />,
    title: "Assistance Inégalée",
    description:
      "Notre équipe dévouée est là pour vous, 24/7. Avec RimDrive, vous n'êtes jamais seul sur la route.",
  },
];

export default ChooseUs;
