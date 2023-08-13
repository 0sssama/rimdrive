"use client";

import { extendVariants, Button as NextUIButton } from "@nextui-org/react";

export const Button = extendVariants(NextUIButton, {
  variants: {
    color: {
      white:
        "text-gray-900 bg-gray-50 border-gray-50 border-2 hover:border-gray-400 hover:bg-gray-400",
      whiteBordered:
        "text-gray-50 bg-transparent border-gray-50 border-2 hover:bg-gray-50 hover:text-gray-900",
      black: "text-gray-50 bg-gray-900 hover:bg-gray-800",
      blackFlat: "text-gray-90 bg-transparent hover:bg-gray-200",
      whatsapp: "text-white bg-[#25D366] hover:bg-[#1DA851]",
    },
  },
});
