"use client";

import {
  Modal,
  ModalBody,
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
import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("fr", fr);

moment.locale("fr", {
  monthsShort:
    "Janv._Févr._Mars_Avr._Mai_Juin_Juil._Août_Sept._Oct._Nov._Déc.".split("_"),
});

function DatePickerModal() {
  const [dateModal, setDateModal] = useAtom(dateModalOpenAtom);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState<string | null>(null);

  const validate = () =>
    new Promise((res, rej) => {
      if (!startDate || !endDate) return rej("Les dates sont obligatoires");

      if (startDate.getTime() > endDate.getTime())
        return rej("La date de départ doit être avant la date de fin");

      if (startDate.getTime() === endDate.getTime())
        return rej("La date de départ doit être différente de la date de fin");

      return res("Les dates sont valides!");
    });

  if (!dateModal.car || !dateModal.open) return null;

  return (
    <Modal
      isOpen={dateModal.open}
      placement="auto"
      onClose={() => setDateModal({ open: false, car: null })}
      scrollBehavior="inside"
    >
      <ModalContent>
        <ModalHeader>
          <h1 className="text-2xl font-bold">Selectionner vos Dates</h1>
        </ModalHeader>
        <ModalBody className="w-full">
          {error && (
            <div className="text-red w-full rounded-lg bg-red-100 p-4">
              <p className="text-center text-danger font-bold text-sm">
                {error}
              </p>
            </div>
          )}
          <div className="w-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Date de début
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => date && setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              dateFormat="MMM d, yyyy"
              locale={"fr"}
              popperClassName="calendar-popper"
              placeholderText="Date de début"
              className="date-input w-full"
            />
          </div>
          <div className="date-input-wrapper w-full mt-1">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Date de fin
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => date && setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || new Date()}
              dateFormat="MMM d, yyyy"
              locale={"fr"}
              popperClassName="calendar-popper"
              placeholderText="Date de fin"
              className="date-input w-full"
            />
          </div>
        </ModalBody>
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
            onPress={() => {
              setError(null);

              validate()
                .then(() => {
                  window.open(
                    `https://wa.me/${whatsappNumber}?text=Bonjour! Je suis intéressé par la location de '${
                      dateModal.car?.name
                    }' chez RimDrive du ${moment(startDate)
                      .locale("fr")
                      .format("Do MMM. YYYY")} au ${moment(endDate)
                      .locale("fr")
                      .format(
                        "Do MMM. YYYY"
                      )}. J'aimerais avoir plus d'informations.`
                  );
                })
                .catch((err) => {
                  setError(err);
                });
            }}
          >
            Louer Maintenant
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DatePickerModal;
