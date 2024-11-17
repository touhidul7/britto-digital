import React from 'react'
import Accordionitem from '../accordion/Accordionitem'
import Accordion from '../accordion/Accordion'

export default function Faq() {
  return (
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
  )
}
