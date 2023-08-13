import { atom } from "jotai";

export const dateModalOpenAtom = atom<{
  open: boolean;
  car: {
    name: string;
  } | null;
}>({
  open: false,
  car: null,
});
