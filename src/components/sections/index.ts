import dynamic from "next/dynamic";

export { default as Banner } from "./Banner";
export const Header = dynamic(() => import("./Header"));
export const Collection = dynamic(() => import("./Collection"));
export const ChooseUs = dynamic(() => import("./ChooseUs"));
export const SubBanner = dynamic(() => import("./SubBanner"));
export const Contact = dynamic(() => import("./Contact"));
export const Footer = dynamic(() => import("./Footer"));
