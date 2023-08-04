import { Car } from "@/components/molecules";
import { cars } from "@/data/cars";
import React from "react";

function Collection() {
  return (
    <div className="relative wrapper section" id="collection">
      <div className="w-full flex flex-col items-center gap-3">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-5xl max-w-[600px] text-center">
          Collection RimDrive
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-md max-w-[300px] md:max-w-[500px] text-center">
          {
            "Découvrez notre sélection variée de véhicules et trouvez celui qui est parfait pour votre besoin"
          }
        </p>
      </div>
      <div className="mt-12 w-full flex items-center justify-center gap-4 flex-wrap">
        {cars.map((car, i) => (
          <Car {...car} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
