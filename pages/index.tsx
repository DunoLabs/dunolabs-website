import About from "@/components/layouts/About";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Marquee from "@/components/ui/Marquee";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Marquee text="We are Launching Soon" />
      <Hero />

      <About />
    </>
  );
};

export default Home;
