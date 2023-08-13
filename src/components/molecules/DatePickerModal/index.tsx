"use client";

import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useAtom } from "jotai";
import { dateModalOpenAtom } from "@/atoms";
import { whatsappNumber } from "@/utils/globals";
import { useState } from "react";
import moment from "moment";
import { Button } from "@/components/atom";

function DatePickerModal() {
  const [dateModal, setDateModal] = useAtom(dateModalOpenAtom);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  if (!dateModal.car || !dateModal.open) return null;

  return (
    <Modal
      isOpen={dateModal.open}
      placement="auto"
      onClose={() => setDateModal({ open: false, car: null })}
    >
      <ModalContent>
        <ModalHeader>
          <h1 className="text-2xl font-bold">Selectionner vos Dates</h1>
        </ModalHeader>
        <ModalFooter>
          <Button
            color="blackFlat"
            className="font-bold"
            onPress={() => setDateModal({ open: false, car: null })}
          >
            Annuler
          </Button>
          <Button
            className="font-bold"
            color="black"
            as={"a"}
            href={`https://wa.me/${whatsappNumber}?text=Bonjour! Je suis intéressé par la location de '${
              dateModal.car.name
            }' chez RimDrive  du ${moment(startDate)
              .locale("fr")
              .format("MMM Do YYYY")} au ${moment(endDate)
              .locale("fr")
              .format("MMM Do YYYY")}. J'aimerais avoir plus d'informations.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Louer Maintenant
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DatePickerModal;
