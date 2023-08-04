import { MdWhatsapp } from "react-icons/md";
import { Button } from "@/components/atom";
import { whatsappNumber } from "@/utils/globals";

function WhatsappButton() {
  return (
    <Button
      color="whatsapp"
      radius="full"
      className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-[1337] flex items-center justify-center w-[62px] h-[62px] min-w-[62px] min-h-[62px] max-w-[62px] max-h-[62px] rounded-full !p-0"
      href={`https://wa.me/${whatsappNumber}?text=Bonjour! Je suis intéressé par la location d'une voiture avec RimDrive et j'aimerais avoir plus d'informations. `}
      target="_blank"
      rel="noopener noreferrer"
      as={"a"}
    >
      <MdWhatsapp size={48} className="text-white" />
    </Button>
  );
}

export default WhatsappButton;
