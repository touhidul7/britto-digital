import Header from "./Components/HomeComponets/Header";
import Faq from "./Components/HomeComponets/Faq";
import WhyPro from "./Components/HomeComponets/WhyPro";
import Review from "./Components/HomeComponets/Review";
import WhyCanva from "./Components/HomeComponets/WhyCanva";
import Pricing from "./Components/HomeComponets/Pricing";
import Hero from "./Components/HomeComponets/Hero";
import Offer from "./Components/Offer";
export default function Home() {
  return (
    <>
      <main className="py-20">
        <Header />
        <Hero/>
        <WhyPro />
        <Review />
        <WhyCanva />
        <Faq />
        <Pricing />
        <Offer/>
      </main>
    </>
  );
}
