"use client";

import { BiSupport } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { LuClock2 } from "react-icons/lu";
import { phoneNumber, whatsappNumber } from "@/utils/globals";
import { Link } from "@nextui-org/react";

function Contact() {
  const email = "contact@rimdrivefes.com";
  return (
    <div className="wrapper section flex items-center justify-start sm:justify-around gap-10 gap-y-12 flex-wrap">
      <div className="flex items-center gap-2">
        <MdLocationPin size={46} className="text-slate-800" />
        <p className="text-sm md:text-lg font-medium">Tanger, Maroc</p>
      </div>
      <div className="flex items-center gap-2">
        <BiSupport size={46} className="text-slate-800" />
        <div className="flex flex-col">
          <p className="text-sm md:text-lg font-medium">
            Tel:{" "}
            <Link
              href={`tel:${whatsappNumber}`}
              className="text-sm md:text-lg text-slate-800 underline"
            >
              {phoneNumber}
            </Link>
            ;
          </p>
          <p className="text-sm md:text-lg font-medium">
            Email:{" "}
            <Link
              href={`mailto:${email}`}
              className="text-sm md:text-lg text-slate-800 underline"
            >
              {email}
            </Link>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <LuClock2 size={46} className="text-slate-800" />
        <p className="text-sm md:text-lg font-medium">Lun-Sam, 09h-23h</p>
      </div>
    </div>
  );
}

export default Contact;
