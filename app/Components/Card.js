import Image from "next/image";
import React from "react";
export default function Card({img, heading, text, bg}) {
  return (
     <>
     {bg==='white' ? (
        <div className="flex flex-col gap-4 bg-white text-black">
          <Image
            className="w-[13%]"
            src={img}
            width={100}
            height={100}
            alt="image"
          />
          <div className="heading text-[32px] font-extrabold">
            {heading}
          </div>
          <div className="text">
            {text}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 bg-black text-white">
          <Image
            className="w-[13%]"
            src={cardimg}
            width={100}
            height={100}
            alt="image"
          />
          <div className="heading text-[32px] font-extrabold">
            ফিউচার ইজ লীডস c
          </div>
          <div className="text">
            ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই ভবিষ্যতের
            দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট করে এগিয়ে যেতে পারেন
            এবং অন্যদের আগে নিজেকে এই জার্নিতে শামিল করে নিতে পারেন, তাহলে আপনি
            সফলতা অন্যদের থেকে বহুগুণ আগে পেয়ে যাবেন। তবে ডিসিশনটা আপনার, আপনি
            পিছিয়ে থাকবেন নাকি এগিয়ে যাবেন।
          </div>
        </div>
      )}
     </>
    
  );
}
