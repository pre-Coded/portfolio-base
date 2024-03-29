import Separator from "@/components/molecules/Separator";
import AboutMe from "@/components/products/AboutMe";
import Banner from "@/components/products/Banner";
import Footer from "@/components/products/Footer";
import Navbar from "@/components/products/Navbar";
import Pricing from "@/components/products/Pricing";
import Services from "@/components/products/Services";
import Testimonial from "@/components/products/Testimonial";
import WhyMe from "@/components/products/WhyMe";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Banner/>
      <Separator/>
      <Services/>
      <Separator/>
      <AboutMe/>
      <Separator/>
      <WhyMe/>
      <Separator/>
      <Pricing/>
      <Separator/>
      <Testimonial/>
      <Footer/>
    </main>
  );
}
