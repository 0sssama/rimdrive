import dynamic from "next/dynamic";

export const Car = dynamic(() => import("./Car"));
export const DatePickerModal = dynamic(() => import("./DatePickerModal"));
