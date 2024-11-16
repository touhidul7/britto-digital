import Button from "./Components/Button";
import Card from "./Components/Card";
import cardimg from "@/public/images/card/social-media.png";

export default function Home() {
  return (
    <>
      <main className="py-20">
        <section className="hero text-center text-[#000000]">
          <div className=" text-3xl font-semibold">
            আপনার দক্ষতা বাড়ান এবং সফল ক্যারিয়ারের পথে অগ্রসর হন
          </div>
          <div className="text-[#5E17EB] text-[40px] font-bold">
            আপনার ফ্রিল্যান্সিং ক্যারিয়ার কে নেক্সট লেভেলে নিয়ে যেতে চান?
          </div>
          <p className="text-xl font-medium leading-10">
            বিশেষজ্ঞদের গাইড করা কোর্সসমূহের মাধ্যমে ঘরে বসে শেখার সুবিধা পান।
            সহজেই নিজের দক্ষতা উন্নত করুন।
          </p>
          <div className="heading text-[#1D0079] text-[80px] font-bold font-[Poppins]">
            Lead Generation Mastery
          </div>
          <p className="text-[25px] font-normal font-[Poppins]">
            From Basics to Digital Marketing
          </p>
        </section>
        <div className="video section text-center flex items-center justify-center py-10">
          <iframe
            className="rounded-2xl lg:w-[40%]"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SGmmiq70uk4?si=oTFRgoTO9Sntd2cu"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <Button link={"#"} text={"Click Here"} />

        <div className="why-pro">
          <div className="heading text-[50px] font-extrabold flex gap-2 items-center justify-center py-10">
            <span className="leading-[65px]">কেন এবার আমাদের মূল ফোকাস</span> ​{" "}
            <span className="highlight">Lead Generation</span>
          </div>
          <div className="content text-[21px] w-[90%] lg:w-[80%] m-auto text-center">
            আপনি খেয়াল করে দেখবেন, বর্তমানে যেসব জনপ্রিয় সোশ্যাল মিডিয়া
            প্ল্যাটফর্মগুলো আছে, সেগুলোতে একটি কমন ফিচার হলো শর্টস বা রিলস
            ভিডিও। কয়েক বছর আগে পর্যন্ত ফেসবুক, ইন্সটাগ্রাম, ইউটিউবের মতো বড়
            প্ল্যাটফর্মগুলোতেও এই শর্ট ভিডিও বা রিলস ফিচার ছিল না। কিন্তু খুব
            অল্প সময়ের মধ্যে প্রায় সব প্ল্যাটফর্মই এই ফিচারটি যুক্ত করেছে, এবং
            এর একমাত্র কারণ হলো শর্ট ভিডিওর অপ্রতিরোধ্য জনপ্রিয়তা। ইনস্টাগ্রাম,
            ইউটিউব, টিকটকের মতো প্ল্যাটফর্মের অ্যালগরিদম এই শর্ট ভিডিওগুলোকে
            প্রচুর প্রমোট করছে, কারণ এগুলো ব্যবহারকারীদের বেশি সময় ধরে রাখে এবং
            প্ল্যাটফর্মে তাদের সময় কাটানোর হার বাড়ায়। কিন্তু শুধুমাত্র শর্ট
            ভিডিও তৈরি করলেই হবে না, দর্শকদের মন জয় করার জন্য প্রয়োজন আকর্ষণীয়
            এডিটিংয়ের। একটি ভালো এডিটেড শর্টস ভিডিও দর্শকদের মনোযোগ ধরে রাখতে
            পারে, তাদের আকৃষ্ট করতে পারে, এবং কন্টেন্টের মেসেজ অডিয়েন্সের কাছে
            স্পষ্টভাবে পৌঁছে দিতে পারে। চলুন দেখে নেই, কীভাবে এটি আপনার
            ক্যারিয়ারকে অন্য এক লেভেলে নিয়ে যেতে পারে।
          </div>
          <div className="flex gap-5 items-center justify-center w-[80%] m-auto">
          <Card img={cardimg} heading={'ফিউচার ইজ লীডস'} text={'ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই ভবিষ্যতের দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট করে এগিয়ে যেতে পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে শামিল করে নিতে পারেন, তাহলে আপনি সফলতা অন্যদের থেকে বহুগুণ আগে পেয়ে যাবেন। তবে ডিসিশনটা আপনার, আপনি পিছিয়ে থাকবেন নাকি এগিয়ে যাবেন।'} bg={'white'}/>
          <Card img={cardimg} heading={'ফিউচার ইজ লীডস'} text={'ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই ভবিষ্যতের দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট করে এগিয়ে যেতে পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে শামিল করে নিতে পারেন, তাহলে আপনি সফলতা অন্যদের থেকে বহুগুণ আগে পেয়ে যাবেন। তবে ডিসিশনটা আপনার, আপনি পিছিয়ে থাকবেন নাকি এগিয়ে যাবেন।'} bg={'white'}/>
          </div>
        </div>
      </main>
    </>
  );
}
