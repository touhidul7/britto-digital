import React from 'react'
import Card from '../Card'
import Graphbg from '../Graphbg'
import Futureimg from "@/public/images/card/linkedin.png";
import designimg from "@/public/images/whycanva/design.png";
import premiumimg from "@/public/images/whycanva/premium.png";
import sharingimg from "@/public/images/whycanva/share.png";
import stockimg from "@/public/images/whycanva/stock.png";
import aiimg from "@/public/images/whycanva/ai.png"
import easyimg from '@/public/images/whycanva/easy.png'
import supportimg from '@/public/images/whycanva/support.png'
export default function WhyCanva() {
  return (
    <Graphbg
          className={"py-10"}
          content={
            <>
              <div>
                <div className="heading text-[40px] font-extrabold flex gap-2 items-center justify-center py-10 text-white">
                  <span className="leading-[65px]">কেন Canva Pro</span> ​{" "}
                  <span className="highlight">সবচেয়ে সাশ্রয়ী এবং কার্যকর?</span>{" "}
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto py-5">
                  <Card
                    img={designimg}
                    heading={"অসীম ডিজাইন সুবিধা"}
                    bg={"white"}
                    text={
                      <>
                        Canva Pro-এর মাধ্যমে আপনি পেয়ে যাবেন অসীম ডিজাইন টেমপ্লেট, প্রিমিয়াম
                        ফিচার এবং প্রফেশনাল গ্রাফিক্স। এটি আপনাকে সময় বাঁচাবে এবং ডিজাইনিংকে 
                        আরও সহজ করবে।
                      </>
                    }
                  />
                  <Card
                    img={premiumimg}
                    heading={"সাশ্রয়ী খরচে প্রিমিয়াম"}
                    bg={"white"}
                    text={
                      <>
                        মাত্র ১৯ টাকায় ১ মাস, ৪৯ টাকায় ৬ মাস এবং ৯৯ টাকায় ১ বছর Canva Pro ব্যবহার করুন। 
                        বাজারের সেরা সেবা, সেরা দামে!
                      </>
                    }
                  />
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto py-5">
                  <Card
                    img={sharingimg}
                    heading={"সহজ শেয়ারিং"}
                    bg={"white"}
                    text={
                      <>
                        সহজেই আপনার ডিজাইন শেয়ার করুন এবং একসাথে টিমের সাথে কাজ করুন। 
                        কাজের সময় কমান এবং সৃষ্টিশীলতাকে বৃদ্ধি করুন।
                      </>
                    }
                  />
                  <Card
                    img={stockimg}
                    heading={"প্রিমিয়াম স্টক ফটো"}
                    bg={"white"}
                    text={
                      <>
                        Canva Pro-এর বিশাল স্টক ফটো লাইব্রেরি থেকে আপনি পাবেন 
                        মিলিয়ন+ প্রিমিয়াম ছবি যা আপনার প্রজেক্টকে আরও আকর্ষণীয় করবে।
                      </>
                    }
                  />
                  <Card
                    img={aiimg}
                    heading={"ডিজাইন এআই"}
                    bg={"white"}
                    text={
                      <>
                        Canva Pro-এর স্মার্ট ডিজাইন টুলস আপনার কাজকে আরও দ্রুত 
                        এবং স্মার্ট করে তুলবে। সময় বাঁচান, দক্ষতা বাড়ান।
                      </>
                    }
                  />
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto py-5">
                  <Card
                    img={easyimg}
                    heading={"সহজ ব্যবহার"}
                    bg={"white"}
                    text={
                      <>
                        Canva Pro-এর ইউজার-ফ্রেন্ডলি ইন্টারফেস আপনাকে দেবে সহজ 
                        এবং ঝামেলামুক্ত ডিজাইন অভিজ্ঞতা।
                      </>
                    }
                  />
                  <Card
                    img={supportimg}
                    heading={"সার্বিক সাপোর্ট"}
                    bg={"white"}
                    text={
                      <>
                        যেকোনো সমস্যায় আমরা আপনার পাশে আছি। সেরা কাস্টমার সাপোর্ট 
                        নিশ্চিত করি, আপনাকে আনন্দিত রাখতে।
                      </>
                    }
                  />
                </div>
              </div>
            </>
          }
        />
  )
}
