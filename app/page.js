import Header from "./Components/HomeComponets/Header";
import Faq from "./Components/HomeComponets/Faq";
import WhyPro from "./Components/HomeComponets/WhyPro";
import Review from "./Components/HomeComponets/Review";
import WhyCanva from "./Components/HomeComponets/WhyCanva";
export default function Home() {
  return (
    <>
      <main className="py-20">
        <Header />
        <WhyPro/>
        <Review/>
        <WhyCanva/>
       <Faq/>
      </main>
    </>
  );
}
