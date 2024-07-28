import Content from "@/components/Content/Content";
import Experience from "@/components/Experience/Experience";
import NavBar from "@/components/Header/NavBar";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col">
      <div className="">
        <NavBar />
        <Hero />
      </div>
      <Content />
      <Experience />
    </main>
  );
}