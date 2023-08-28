import Features from "@/components/views/Features";
import Hero from "@/components/views/Hero";
import NewsLetter from "@/components/views/NewsLetter";
import Products from "@/components/views/Products";
import Promotion from "@/components/views/Promotion";

export default async function Home() {


  return (
    <main>
      <Hero />
      <Promotion />
      <Products />
      <Features />
      <NewsLetter />
    </main>
  );
}
