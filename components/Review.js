import React from "react";
import Image from "next/image";
import Link from "next/link";

const Review = ({
  avatar,
  name,
  company,
  position,
  review,
  clutchReview,
  clutchLink,
  className = "",
}) => (
  <div className="pl-2 pb-2 flex h-full">
    <div className={`border-2 rounded-3xl relative p-8 ${className}`}>
      <div className="flex gap-4 items-center">
        <div className="bg-avatar-background bg-no-repeat bg-center p-2 flex justify-center items-center bg-[length:100%_100%]">
          <Image src={avatar} alt={`${name}'s avatar`} />
        </div>

        <div>
          <span className="text-base text-light-black font-bold">{name}</span>
          <div>
            <span className="text-orange text-xs font-semibold">{company}</span>{" "}
            <span className="text-light-black text-xs font-semibold">
              {position}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between mt-[20px]">
        <div>
          <p className="font-lato text-light-black text-lg leading-7">
            {review}
          </p>
        </div>

        <div className="pt-8">
          <Link prefetch={false}  href={clutchLink}>
            <a target="_blank" rel="noreferrer">
              <Image src={clutchReview} alt="clutch review" />
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-yellow absolute -bottom-2 -left-2 rounded-3xl min-w-[100%] min-h-[100%] -z-10"></div>
    </div>
  </div>
);

export default Review;
