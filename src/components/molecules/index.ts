import dynamic from "next/dynamic";

export const Car = dynamic(() => import("./Car"));
