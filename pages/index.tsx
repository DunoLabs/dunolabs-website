import About from "components/layouts/about";
import CTA from "components/ui/cta";
import Hero from "components/layouts/hero";
import OurServices from "components/layouts/services";

import Marquee from "components/ui/marquee";
import FAQ from "components/layouts/faq";
import Footer from "components/layouts/footer";
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
