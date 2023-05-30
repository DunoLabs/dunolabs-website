import About from "components/layouts/About";
import CTA from "components/ui/CTA";
import Header from "components/layouts/Header";
import Hero from "components/layouts/Hero";
import OurServices from "components/layouts/Services";

import Marquee from "components/ui/Marquee";
import FAQ from "components/layouts/FAQ";
import Footer from "components/layouts/Footer";
import Layout from "components/layouts";

const Home = () => {
  return (
    <Layout>
      <Hero />

      <About />
      <OurServices />
      <Marquee text="Contact us Now" className="bg-zinc-900 text-zinc-50 " />
      <FAQ />
      <CTA />
      <Footer />
    </Layout>
  );
};

export default Home;
