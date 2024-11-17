import React from 'react'
import Card from '../Card'
import templateimg from "@/public/images/whycanva/templates.png";
import brandkitimg from "@/public/images/whycanva/brandkit.png";
import cloundimg from "@/public/images/whycanva/cloudstorage.png";
import resizeimg from "@/public/images/whycanva/resize.png"
import businessfeature from "@/public/images/card/business.png";
export default function WhyPro() {
    return (
        <>
            <div className="why-pro">
                <div className="heading text-[50px] font-extrabold flex gap-2 items-center justify-center py-10">
                    <span className="leading-[65px]">কেন নিবেন</span> ​{" "}
                    <span className="highlight">Canva Pro</span>
                </div>
                <div className="content text-[21px] w-[90%] lg:w-[80%] m-auto text-center">
                    Canva Pro আপনার ডিজাইনিং অভিজ্ঞতাকে এক নতুন উচ্চতায় নিয়ে যেতে পারে।
                    এটি আপনাকে প্রদান করে অগণিত টেমপ্লেট, কাস্টম ব্র্যান্ড কিট, এবং আরও অনেক কিছু।
                    চলুন দেখে নেই Canva Pro-এর অসাধারণ বৈশিষ্ট্যসমূহ।
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto my-10">
                    <Card
                        img={templateimg}
                        heading={"অগণিত প্রিমিয়াম টেমপ্লেট"}
                        text={
                            <>
                                Canva Pro আপনাকে ৬০,০০০+ প্রিমিয়াম টেমপ্লেট প্রদান করে।
                                যেকোনো প্রজেক্টের জন্য টেমপ্লেট খুঁজুন এবং ব্যবহার করুন।
                                আপনার ডিজাইনিং অভিজ্ঞতাকে সহজতর করে তুলুন।
                            </>
                        }
                        bg={"black"}
                    />
                    <Card
                        img={brandkitimg}
                        heading={"কাস্টম ব্র্যান্ড কিট"}
                        text={
                            <>
                                আপনার ব্র্যান্ডের লোগো, ফন্ট, এবং কালার প্যালেট সহজেই সংরক্ষণ করুন
                                এবং এক ক্লিকে ব্যবহার করুন। আপনার ব্র্যান্ডের ধারাবাহিকতা বজায় রাখতে এটি অপরিহার্য।
                            </>
                        }
                        bg={"white"}
                    />
                </div>
                <div className="grid grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto my-10">
                    <Card
                        img={cloundimg}
                        imgsize={"small"}
                        heading={"ক্লাউড স্টোরেজ"}
                        text={
                            <>
                                Canva Pro-তে আপনি ১ টেরাবাইট ক্লাউড স্টোরেজ পাবেন, যা আপনার ডিজাইনগুলো সংরক্ষণ এবং যেকোনো জায়গা থেকে অ্যাক্সেস করতে সাহায্য করবে। এছাড়া, ১০০+ মিলিয়ন প্রিমিয়াম স্টক ফটো, ভিডিও, এবং গ্রাফিক্স ব্যবহার করতে পারবেন। ব্র্যান্ড কিট ফিচারের মাধ্যমে আপনার ব্র্যান্ডের কালার, ফন্ট, এবং লোগো সংরক্ষণ করে প্রতিটি ডিজাইন ব্র্যান্ডেড রাখতে পারবেন।
                            </>
                        }
                        bg={"white"}
                    />
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto my-10">
                    <Card
                        img={resizeimg}
                        heading={"ম্যাজিক রিসাইজ"}
                        text={
                            <>
                                আপনার ডিজাইনগুলো সোশ্যাল মিডিয়া প্ল্যাটফর্মের জন্য দ্রুত রিসাইজ করুন।
                                একটি ডিজাইন তৈরি করেই বিভিন্ন ফরম্যাটে ব্যবহার করতে পারবেন।
                            </>
                        }
                        bg={"white"}
                    />
                    <Card
                        img={businessfeature}
                        heading={"বিজনেস ফিচার"}
                        text={
                            <>
                                Canva Pro-তে আপনি প্রিমিয়াম গ্রাফিক্স, ভিডিও, এবং অ্যানিমেশন ব্যবহার করতে পারবেন।
                                এটি আপনার কনটেন্টকে আরও পেশাদার এবং আকর্ষণীয় করে তুলবে।
                            </>
                        }
                        bg={"white"}
                    />
                </div>
            </div>

            {/* freedom */}
            <div className="">
                <div className="heading text-[40px] font-extrabold flex gap-2 items-center justify-center py-10">
                    <span className="leading-[65px]">কীভাবে Canva Pro দিয়ে</span>{" "}
                    <span className="highlight">আপনার ডিজাইনিং</span>{" "}
                    <span className="leading-[65px]">ক্যারিয়ার উন্নত করবেন</span>
                </div>
                <div className="grid lg:grid-cols-1 grid-cols-1 gap-5 items-stretch justify-center lg:w-[70%] w-full m-auto ">
                    <div className="content text-xl flex justify-center h-full items-center">
                        Canva Pro ব্যবহার করে আপনার ডিজাইনিং ক্যারিয়ার উন্নত করতে পারেন সহজেই। প্রিমিয়াম
                        টেমপ্লেট, স্টক ফটো এবং ভিডিওর মাধ্যমে আপনার ডিজাইনকে আরও আকর্ষণীয় এবং
                        পেশাদার করে তুলুন। ব্র্যান্ড কিট ফিচারটি ব্যবহার করে প্রতিটি ডিজাইন ব্র্যান্ডের সাথে
                        সামঞ্জস্যপূর্ণ রাখা সম্ভব। দ্রুত এবং সহজে কাজ সম্পন্ন করার জন্য এটি সময় সাশ্রয়ী।
                        আকর্ষণীয় ডিজাইনের মাধ্যমে ক্লায়েন্টদের মন জয় করে ফ্রিল্যান্স ক্যারিয়ার বা ব্যবসায়িক
                        পরিধি বাড়ানো সহজ। Canva Pro-এর মাধ্যমে আপনি স্থানীয় এবং আন্তর্জাতিক উভয়
                        বাজারেই প্রতিযোগিতা করতে পারবেন।
                    </div>
                    {/* <div className="image">
                        <Image
                            className="lg:w-[70%] w-full rounded-[20px]"
                            src={client1}
                            alt="client"
                        />
                    </div> */}
                </div>
            </div>
        </>
    )
}
