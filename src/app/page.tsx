import Content from "@/components/Content/Content";
import CustomerService from "@/components/CustomerService/CustomerService";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Header/NavBar";
import Hero from "@/components/Hero/Hero";
import LogoSlider from "@/components/LogoSlider/LogoSlider";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact"

export default function Home() {
  return (
    <main className="flex z-50 min-h-screen bg-black flex-col">
      <div className="">
        <NavBar />
        <Hero />
      </div>
      <Content />
      <Experience />
      <LogoSlider />
      <Projects />
      <Contact />
      <Footer />
      <CustomerService />
    </main>
  );
}