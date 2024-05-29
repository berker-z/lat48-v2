import Image from "next/image";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow w-full max-w-7xl font-ubuntu mx-auto gap-y-20">
      <Hero />
      <Services />
    </main>
  );
}
