"use client";

import { BiSupport } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { LuClock2 } from "react-icons/lu";
import { phoneNumbers, whatsappNumber } from "@/utils/globals";
import { Link } from "@nextui-org/react";
import { cities } from "@/components/molecules/DatePickerModal";

function Contact() {
  const email = "contact@rimdrivefes.com";
  return (
    <div className="wrapper section flex items-center justify-start sm:justify-around gap-10 gap-y-12 flex-wrap">
      <div className="flex items-center gap-3">
        <MdLocationPin size={40} className="text-slate-800" />
        <div className="flex flex-col">
          <p className="text-xs md:text-sm lg:text-base font-medium max-w-[200px]">
            {cities.map((city, i) => (
              <span key={city}>{`${city}${
                i !== cities.length - 1 ? ", " : ""
              }`}</span>
            ))}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <BiSupport size={40} className="text-slate-800" />
        <div className="flex flex-col">
          {phoneNumbers.map((phoneNumber, i) => (
            <p className="text-xs md:text-sm lg:text-base font-medium" key={i}>
              Tel:{" "}
              <Link
                href={`tel:${phoneNumber.tel}`}
                className="text-xs md:text-sm lg:text-base text-slate-800 underline"
              >
                {phoneNumber.display}
              </Link>
              ;
            </p>
          ))}
          <p className="text-xs md:text-sm lg:text-base font-medium">
            Email:{" "}
            <Link
              href={`mailto:${email}`}
              className="text-xs md:text-sm lg:text-base text-slate-800 underline"
            >
              {email}
            </Link>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <LuClock2 size={40} className="text-slate-800" />
        <p className="text-xs md:text-sm lg:text-base font-medium">
          24h/24, 7j/7
        </p>
      </div>
    </div>
  );
}

export default Contact;
