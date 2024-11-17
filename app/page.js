import Button from "./Components/Button";
import Card from "./Components/Card";
import Futureimg from "@/public/images/card/social-media.png";
import businessgrow from "@/public/images/card/business.png";
import Image from "next/image";
import client1 from "@/public/images/temp/client-1.jpg";
import review from "@/public/images/client.jpg";
import Graphbg from "./Components/Graphbg";
import Accordion from "./Components/accordion/Accordion";
import Accordionitem from "./Components/accordion/Accordionitem";
import Header from "./Components/HomeComponets/Header";
export default function Home() {
  return (
    <>
      <main className="py-20">
        <Header />
        <div className="video section text-center flex items-center justify-center py-10">
          <iframe
            className="rounded-2xl lg:w-[40%] w-full"
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
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto my-10">
            <Card
              img={Futureimg}
              heading={"ফিউচার ইজ লীডস"}
              text={
                <>
                  ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই ভবিষ্যতের
                  দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট করে এগিয়ে যেতে
                  পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে শামিল করে নিতে পারেন,
                  তাহলে আপনি সফলতা অন্যদের থেকে বহুগুণ আগে পেয়ে যাবেন। তবে
                  ডিসিশনটা আপনার, আপনি পিছিয়ে থাকবেন নাকি এগিয়ে যাবেন।
                </>
              }
              bg={"black"}
            />
            <Card
              img={businessgrow}
              heading={"নিজের বিজনেস গ্রো"}
              text={
                <>
                  আমি দেখেছি অনেক ব্যবসায়ী শুধু লিড জেনারেশন কৌশল ব্যবহার করে
                  তাদের ছোট ব্যবসাকে লাখো কাস্টমারের কাছে পৌঁছে দিয়েছে। তারা এটি
                  করতে পেরেছে সঠিক কৌশল এবং ডিজিটাল মার্কেটিং অ্যালগরিদম ব্যবহার
                  করে। কারণ এখন প্রতিটি প্ল্যাটফর্ম প্রমোট করছে লিড জেনারেশন
                  কনটেন্টকে এবং খুব কম সময়ের মধ্যে কেউ তার পণ্য বা সার্ভিসের
                  মাধ্যমে বিপুল পরিমাণ গ্রাহক অর্জন করে, কম সময়ের মধ্যে হয়ে উঠছে
                  সফল ব্যবসায়ী।
                </>
              }
              bg={"white"}
            />
          </div>
          <div className="grid grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto my-10">
            <Card
              img={businessgrow}
              imgsize={"small"}
              heading={"নিজের বিজনেস গ্রো"}
              text={
                <>
                  আমি দেখেছি অনেক ব্যবসায়ী শুধু লিড জেনারেশন কৌশল ব্যবহার করে
                  তাদের ছোট ব্যবসাকে লাখো কাস্টমারের কাছে পৌঁছে দিয়েছে। তারা এটি
                  করতে পেরেছে সঠিক কৌশল এবং ডিজিটাল মার্কেটিং অ্যালগরিদম ব্যবহার
                  করে। কারণ এখন প্রতিটি প্ল্যাটফর্ম প্রমোট করছে লিড জেনারেশন
                  কনটেন্টকে এবং খুব কম সময়ের মধ্যে কেউ তার পণ্য বা সার্ভিসের
                  মাধ্যমে বিপুল পরিমাণ গ্রাহক অর্জন করে, কম সময়ের মধ্যে হয়ে উঠছে
                  সফল ব্যবসায়ী।
                </>
              }
              bg={"white"}
            />
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto my-10">
            <Card
              img={Futureimg}
              heading={"ফিউচার ইজ লীডস"}
              text={
                <>
                  ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই ভবিষ্যতের
                  দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট করে এগিয়ে যেতে
                  পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে শামিল করে নিতে পারেন,
                  তাহলে আপনি সফলতা অন্যদের থেকে বহুগুণ আগে পেয়ে যাবেন। তবে
                  ডিসিশনটা আপনার, আপনি পিছিয়ে থাকবেন নাকি এগিয়ে যাবেন।
                </>
              }
              bg={"white"}
            />
            <Card
              img={businessgrow}
              heading={"নিজের বিজনেস গ্রো"}
              text={
                <>
                  আমি দেখেছি অনেক ব্যবসায়ী শুধু লিড জেনারেশন কৌশল ব্যবহার করে
                  তাদের ছোট ব্যবসাকে লাখো কাস্টমারের কাছে পৌঁছে দিয়েছে। তারা এটি
                  করতে পেরেছে সঠিক কৌশল এবং ডিজিটাল মার্কেটিং অ্যালগরিদম ব্যবহার
                  করে। কারণ এখন প্রতিটি প্ল্যাটফর্ম প্রমোট করছে লিড জেনারেশন
                  কনটেন্টকে এবং খুব কম সময়ের মধ্যে কেউ তার পণ্য বা সার্ভিসের
                  মাধ্যমে বিপুল পরিমাণ গ্রাহক অর্জন করে, কম সময়ের মধ্যে হয়ে উঠছে
                  সফল ব্যবসায়ী।
                </>
              }
              bg={"white"}
            />
          </div>
        </div>
        {/* freedom */}
        <div className="">
          <div className="heading text-[40px] font-extrabold flex gap-2 items-center justify-center py-10">
            <span className="leading-[65px]">
              কীভাবে ভিডিও এডিটিং স্কিল দিয়ে আমি
            </span>{" "}
            ​ <span className="highlight">ফিন্যান্সিয়াল ফ্রিডম</span>{" "}
            <span className="leading-[65px]">পেলাম</span>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto">
            <div className="content text-xl ">
              Hello everyone, <br />
              আমি আলী ফিয়াদ রুদ্র, কাজ করছি ফুলটাইম ফ্রিল্যান্স ডিজিটাল
              মার্কেটার এবং ওয়েব ডেভেলপার হিসেবে National এবং International
              অসংখ্য ব্র্যান্ড এবং ব্যবসার সাথে গত ৫ বছর ধরে। আমার ডিজিটাল
              মার্কেটিং এবং ওয়েব ডেভেলপমেন্টের প্রতি ভালোবাসাটা অনেকটাই আর্লি
              স্টেজে হয়ে যাওয়াতে আমি কখনো এটাকে কাজ হিসেবে ধরিনি বরং সবসময়
              পেশনের জায়গা থেকে এটাকে করেছি। আমার সবচেয়ে স্ট্রং পয়েন্ট- আমি
              ট্রেন্ড এবং ট্রেন্ড থেকে একধাপ এগিয়ে থাকার চেষ্টা করেছি সবসময়, যার
              ফলে আমি আপনাদের যেইসকল বিষয় নিয়ে শেখাতে পারবো তা ১০-২০টি কোর্স
              করেও কখনো খুঁজে পাবেন না। আমি বিশ্বাস করি যে, ডিজিটাল মার্কেটিং
              এবং ওয়েব ডেভেলপমেন্টে সফল হতে হলে আপনাকে সবসময় নতুন কৌশল এবং
              প্রযুক্তি শিখতে হবে।
            </div>
            <div className="image">
              <Image
                className="lg:w-[84%] w-full rounded-[20px]"
                src={client1}
                alt="client"
              />
            </div>
          </div>
        </div>
        {/* Review-- */}
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

        {/* Why Canva pro is best for you */}
        <Graphbg
          className={"py-10"}
          content={
            <>
              <div>
                <div className="heading text-[40px] font-extrabold flex gap-2 items-center justify-center py-10 text-white">
                  <span className="leading-[65px]">কেন এই কোর্সটি</span> ​{" "}
                  <span className="highlight">সবচেয়ে এডভান্স এবং ইউনিক?</span>{" "}
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto py-5">
                  <Card
                    img={Futureimg}
                    heading={"ফিউচার ইজ লীডস"}
                    bg={"white"}
                    text={
                      <>
                        ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই
                        ভবিষ্যতের দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট
                        করে এগিয়ে যেতে পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে
                        শামিল করে নিতে পারেন, তাহলে আপনি সফলতা অন্যদের থেকে
                        বহুগুণ আগে পেয়ে যাবেন। তবে ডিসিশনটা আপনার, আপনি পিছিয়ে
                        থাকবেন নাকি এগিয়ে যাবেন।
                      </>
                    }
                  />
                  <Card
                    img={Futureimg}
                    heading={"ফিউচার ইজ লীডস"}
                    bg={"white"}
                    text={
                      <>
                        ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই
                        ভবিষ্যতের দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট
                        করে এগিয়ে যেতে পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে
                        শামিল করে নিতে পারেন, তাহলে আপনি সফলতা অন্যদের থেকে
                        বহুগুণ আগে পেয়ে যাবেন। তবে ডিসিশনটা আপনার, আপনি পিছিয়ে
                        থাকবেন নাকি এগিয়ে যাবেন।
                      </>
                    }
                  />
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto py-5">
                  <Card
                    img={Futureimg}
                    heading={"ফিউচার ইজ লীডস"}
                    bg={"white"}
                    text={
                      <>
                        ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই
                        ভবিষ্যতের দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট
                        করে এগিয়ে যেতে পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে
                        শামিল করে নিতে পারেন, তাহলে আপনি সফলতা অন্যদের থেকে
                        বহুগুণ আগে পেয়ে যাবেন। তবে ডিসিশনটা আপনার, আপনি পিছিয়ে
                        থাকবেন নাকি এগিয়ে যাবেন।
                      </>
                    }
                  />
                  <Card
                    img={Futureimg}
                    heading={"ফিউচার ইজ লীডস"}
                    bg={"white"}
                    text={
                      <>
                        ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই
                        ভবিষ্যতের দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট
                        করে এগিয়ে যেতে পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে
                        শামিল করে নিতে পারেন, তাহলে আপনি সফলতা অন্যদের থেকে
                        বহুগুণ আগে পেয়ে যাবেন। তবে ডিসিশনটা আপনার, আপনি পিছিয়ে
                        থাকবেন নাকি এগিয়ে যাবেন।
                      </>
                    }
                  />
                  <Card
                    img={Futureimg}
                    heading={"ফিউচার ইজ লীডস"}
                    bg={"white"}
                    text={
                      <>
                        ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই
                        ভবিষ্যতের দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট
                        করে এগিয়ে যেতে পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে
                        শামিল করে নিতে পারেন, তাহলে আপনি সফলতা অন্যদের থেকে
                        বহুগুণ আগে পেয়ে যাবেন। তবে ডিসিশনটা আপনার, আপনি পিছিয়ে
                        থাকবেন নাকি এগিয়ে যাবেন।
                      </>
                    }
                  />
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto py-5">
                  <Card
                    img={Futureimg}
                    heading={"ফিউচার ইজ লীডস"}
                    bg={"white"}
                    text={
                      <>
                        ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই
                        ভবিষ্যতের দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট
                        করে এগিয়ে যেতে পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে
                        শামিল করে নিতে পারেন, তাহলে আপনি সফলতা অন্যদের থেকে
                        বহুগুণ আগে পেয়ে যাবেন। তবে ডিসিশনটা আপনার, আপনি পিছিয়ে
                        থাকবেন নাকি এগিয়ে যাবেন।
                      </>
                    }
                  />
                  <Card
                    img={Futureimg}
                    heading={"ফিউচার ইজ লীডস"}
                    bg={"white"}
                    text={
                      <>
                        ফিউচার ইজ লিড জেনারেশন এবং আমরা এখন বসে আছি সেই
                        ভবিষ্যতের দ্বারপ্রান্তে। যদি আপনি এই পরিবর্তনকে এক্সেপ্ট
                        করে এগিয়ে যেতে পারেন এবং অন্যদের আগে নিজেকে এই জার্নিতে
                        শামিল করে নিতে পারেন, তাহলে আপনি সফলতা অন্যদের থেকে
                        বহুগুণ আগে পেয়ে যাবেন। তবে ডিসিশনটা আপনার, আপনি পিছিয়ে
                        থাকবেন নাকি এগিয়ে যাবেন।
                      </>
                    }
                  />
                </div>
              </div>
            </>
          }
        />
        {/* FAQ */}
        <div className="lg:w-[70%] w-full m-auto py-5">
          <div className="heading text-[50px] font-[Poppins] font-extrabold flex gap-2 items-center justify-center pt-10 pb-5">
            <span className="leading-[65px]">Frequently Asked</span> ​{" "}
            <span className="highlight">Questions...</span>{" "}
          </div>
          <Accordion Item={
              <>
                <Accordionitem
                  title="Canva Pro কী এবং এটি কেন ব্যবহার করব?"
                  content="Canva Pro Canva-এর একটি প্রিমিয়াম সংস্করণ যা প্রিমিয়াম টেমপ্লেট, আনলিমিটেড ক্লাউড স্টোরেজ, টিম সহযোগিতা টুলস এবং উন্নত ডিজাইন টুলস সরবরাহ করে। এটি পেশাদার, ব্যবসায়ী এবং ক্রিয়েটরদের জন্য আদর্শ, যারা তাদের ডিজাইন আরও আকর্ষণীয় করতে চান।"
                  checked={true}
                />
                <Accordionitem
                  title="Canva Pro ব্যবহার করার জন্য কি ডিজাইনের অভিজ্ঞতা প্রয়োজন?"
                  content="না, Canva Pro এমনভাবে ডিজাইন করা হয়েছে যাতে এটি সহজ এবং ব্যবহারকারী-বান্ধব হয়। এটি নতুনদের এবং পেশাদারদের জন্যও উপযোগী, কারণ এতে ড্র্যাগ-এন্ড-ড্রপ টুলস এবং কাস্টমাইজযোগ্য টেমপ্লেট রয়েছে।"
                />
                <Accordionitem
                  title="Canva Pro-তে কী কী ফিচার অন্তর্ভুক্ত আছে?"
                  content="Canva Pro-তে প্রিমিয়াম টেমপ্লেট, মিলিয়ন মিলিয়ন স্টক ফটো, ভিডিও এবং অডিও, ব্যাকগ্রাউন্ড রিমুভার টুল, ব্র্যান্ড কিট, ম্যাজিক রিসাইজ এবং আরও অনেক ফিচার রয়েছে যা আপনার কাজকে আরও সহজ এবং কার্যকরী করবে।"
                />
                <Accordionitem
                  title="আমি কি আমার টিমের সাথে Canva Pro-তে কাজ করতে পারবো?"
                  content="হ্যাঁ, Canva Pro-তে টিম সহযোগিতা করার সুবিধা রয়েছে। আপনি ডিজাইন শেয়ার করতে, ব্র্যান্ড কিট তৈরি করতে এবং রিয়েল-টাইমে একসাথে কাজ করতে পারবেন।"
                />
                <Accordionitem
                  title="Canva Pro-এর দাম কত?"
                  content="Canva Pro একটি সাশ্রয়ী মূল্যে মাসিক বা বার্ষিক সাবস্ক্রিপশনে পাওয়া যায়। বিস্তারিত জানার জন্য বা বিশেষ অফার পেতে আমাদের সাথে যোগাযোগ করুন।"
                />
                <Accordionitem
                  title="Canva Pro শুরু করার পদ্ধতি কী?"
                  content="Canva Pro ব্যবহার শুরু করতে, সরাসরি সাবস্ক্রাইব করতে পারেন অথবা আমাদের সার্ভিসের মাধ্যমে সাবস্ক্রিপশন কিনতে পারেন। আমরা আপনাকে সেটআপ এবং অ্যাক্টিভেশনে সাহায্য করব যাতে আপনি সহজেই ডিজাইন তৈরি করতে পারেন।"
                />
              </>
            }
          />
        </div>
      </main>
    </>
  );
}
