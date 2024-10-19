import Image from "next/image";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { NewHero } from "./components/newHero";
import { About } from "./components/about";

export default function Home() {
  return (
    <>
      <div>
        <NewHero />
        <About />
        <Services />
      </div>
    </>
  );
}
