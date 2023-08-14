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

export const cities = ["Tanger", "Fes", "Rabat", "Casablanca", "Marrakech"];
export type City = (typeof cities)[number];

export const readableDate = (date: Date) =>
  moment(date).locale("fr").format("Do MMM YYYY");

export const whatsappMessage = ({
  carName,
  city,
  startDate,
  endDate,
}: {
  carName: string;
  city: string;
  startDate: Date;
  endDate: Date;
}) =>
  `Bonjour! Je suis intéressé par la location de la voiture *${carName}* chez RimDrive du *${readableDate(
    startDate
  )}* au *${readableDate(
    endDate
  )}* sur *${city}*. J'aimerais avoir plus d'informations.`;

function DatePickerModal() {
  const [dateModal, setDateModal] = useAtom(dateModalOpenAtom);

  const [formData, setFormData] = useState({
    startDate: new Date(),
    endDate: new Date(),
    city: "Tanger",
  });

  const [error, setError] = useState<string | null>(null);

  const setStartDate = (date: Date) =>
    setFormData((old) => ({ ...old, startDate: date }));

  const setEndDate = (date: Date) =>
    setFormData((old) => ({ ...old, endDate: date }));

  const setCity = (city: City) => setFormData((old) => ({ ...old, city }));

  const validate = () =>
    new Promise((res, rej) => {
      if (!formData.startDate || !formData.endDate)
        return rej("Les dates sont obligatoires");

      if (formData.startDate.getTime() > formData.endDate.getTime())
        return rej("La date de départ doit être avant la date de fin");

      if (formData.startDate.getTime() === formData.endDate.getTime())
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
              selected={formData.startDate}
              onChange={(date) => date && setStartDate(date)}
              selectsStart
              startDate={formData.startDate}
              endDate={formData.endDate}
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
              selected={formData.endDate}
              onChange={(date) => date && setEndDate(date)}
              selectsEnd
              startDate={formData.startDate}
              endDate={formData.endDate}
              minDate={formData.startDate || new Date()}
              dateFormat="MMM d, yyyy"
              locale={"fr"}
              popperClassName="calendar-popper"
              placeholderText="Date de fin"
              className="date-input w-full"
            />
          </div>
          <div className="date-input-wrapper w-full mt-1">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              La ville
            </label>
            <select
              value={formData.city}
              onChange={(e) => setCity(e.target.value)}
              className="date-input w-full"
            >
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
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
                    `https://wa.me/${whatsappNumber}?text=${whatsappMessage({
                      ...formData,
                      carName: dateModal.car?.name || "",
                    })}`
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
