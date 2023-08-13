"use client";

import { Button } from "@/components/atom";
import { syncopate } from "@/fonts";
import classNames from "classnames";
import Router from "next/router";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";

function Footer() {
  return (
    <div
      className="w-full py-6 px-10 bg-gray-900 border-t-1 border-gray-700"
      id="footer"
    >
      <div className="wrapper flex items-center justify-center sm:justify-between gap-x-6 gap-y-8 flex-wrap">
        <h1
          className={classNames(
            "text-gray-50 text-lg font-bold transition-all duration-600 cursor-pointer leading-none",
            syncopate.className
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          RIMDRIVE
        </h1>
        <div className="flex items-center justify-end gap-4 flex-wrap">
          {socialMedia.map((item, i) => (
            <SocialMediaLink key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialMediaLink({
  icon,
  href,
  title,
}: {
  icon: React.ReactNode;
  href: string;
  title: string;
}) {
  return (
    <Button
      variant="flat"
      radius="full"
      className="font-medium !p-0 !w-[32px] !h-[32px] !min-w-[32px] !min-h-[32px] !max-w-[32px] !max-h-[32px] !bg-gray-700 hover:!bg-gray-600"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      as={"a"}
    >
      {icon}
    </Button>
  );
}

const socialMedia = [
  {
    icon: <IoLogoFacebook size={20} className="text-gray-50" />,
    href: "https://www.facebook.com/Rimlocationfes/",
    title: "Facebook",
  },
  {
    icon: <IoLogoInstagram size={20} className="text-gray-50" />,
    href: "https://www.instagram.com/rimlocationfes/",
    title: "Instagram",
  },
  {
    icon: <IoLogoTiktok size={20} className="text-gray-50" />,
    href: "https://www.tiktok.com/@ecppautoecole",
    title: "Tiktok",
  },
];

export default Footer;
