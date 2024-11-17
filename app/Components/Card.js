'use client'
import Image from "next/image";
import React from "react";
export default function Card({ img, heading, text, bg, imgsize }) {
  const cardStyle = {
    backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
    url('https://demo.brittosoft.com/wp-content/uploads/2024/11/Add-a-heading-4-1.webp')
  `,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };  
  return (
    <>
      {bg === "white" ? (
        <div className="flex flex-col gap-4 bg-white text-black p-6 rounded-2xl box-border">
          <Image
            className={`${imgsize==="small" ? "w-[8%]":"w-[13%]"}`}
            src={img}
            width={100}
            height={100}
            alt="image"
          />
          <div className="heading text-[32px] font-extrabold">{heading}</div>
          <div className="text">{text}</div>
        </div>
      ) : (
        <div className="flex flex-col gap-4  text-white p-6 rounded-2xl box-border" style={cardStyle}>
          <Image
            className={`${imgsize==="small" ? "w-[8%]":"w-[13%]"}`}
            src={img}
            width={100}
            height={100}
            alt="image"
          />
          <div className="heading text-[32px] font-extrabold">{heading}</div>
          <div className="text">{text}</div>
        </div>
      )}
    </>
  );
}
