import Image from 'next/image'
import React from 'react'
import review from "@/public/images/client.jpg";

export default function Review() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto py-20">
    <div className="image h-[]">
      <Image src={review} className="rounded-2xl" alt="client" />
    </div>
    <div className="content">
      <h2 className="text-[84px] font-extrabold">ক্লায়েন্ট</h2>
      <h3 className="text-[#1A015E] text-[200px] font-extrabold leading-[1]">
        রিভিউ
      </h3>
    </div>
  </div>
  )
}
