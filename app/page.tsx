import { Services } from "./components/services";
import { NewHero } from "./components/newHero";
import { About } from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div>
        <NewHero />
        <About />
        <Services />
        <Footer />
      </div>
    </>
  );
}
