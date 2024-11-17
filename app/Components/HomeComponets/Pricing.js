import React from "react";
import Graphbg from "../Graphbg";
import Image from "next/image";
import pricingimg from "@/public/images/pricing.png";
import Button from "../Button";
export default function Pricing() {
  return (
    <Graphbg
      className={"py-20"}
      content={
        <>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:w-[80%] m-auto w-full">
            <div className="text-center flex flex-col justify-center items-center">
              <div className="rounded-[5px] bg-[#FFC30F] text-[35px] font-medium w-fit px-6">
                Canva Premium?
              </div>
              <div className="text-white text-2xl font-bold mt-4">চিন্তার কোনো কারণ নেই, প্রতি মাসে মাত্র </div>
              <div className="text-white text-[114px] font-extrabold">১৯ টাকা</div>
            <Button link={"https://www.facebook.com/brittodigitalbd"} text={"Order Now"} />

            </div>
            <Image src={pricingimg} alt="Pricing" />
          </div>
        </>
      }
    />
  );
}
