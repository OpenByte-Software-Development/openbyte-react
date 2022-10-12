import React from "react";
import Image from "next/image";

// Images
import one from "../../public/case-studies/numbers/1.svg";
import two from "../../public/case-studies/numbers/2.svg";
import three from "../../public/case-studies/numbers/3.svg";
import four from "../../public/case-studies/numbers/4.svg";

const NUMBERS_VARIATIONS = {
  1: one,
  2: two,
  3: three,
  4: four,
};

const BackgroundNumber = ({ variant = "1" }) => {
  const src = NUMBERS_VARIATIONS[variant];
  return (
    <div className="absolute mr-auto ml-auto right-0 left-0 lg:-top-16 -top-10 w-fit lg:max-w-full max-w-[113px]">
      <Image
        src={src}
        alt={`number ${variant}`}
        height={src.height}
        width={src.width}
      />
    </div>
  );
};

export default BackgroundNumber;
