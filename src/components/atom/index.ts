import dynamic from "next/dynamic";
import { Button } from "./Button";

export { Button };

export const WhatsappButton = dynamic(() => import("./WhatsappButton"));
