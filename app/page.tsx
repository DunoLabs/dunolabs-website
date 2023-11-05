import About from '@/components/layouts/about';
import CTA from '@/components/ui/cta';
import Hero from '@/components/layouts/hero';
import OurServices from '@/components/layouts/services';

import Marquee from '@/components/ui/marquee';
import FAQ from '@/components/layouts/faq';
import Footer from '@/components/layouts/footer';
import Layout from '@/components/layouts';
import RecentWork from './components/layouts/recent-work';

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <OurServices />
        <Marquee
          text={['Design', 'Development', 'Marketing']}
          className="text-4xl font-bold bg-gradient-to-r from-neutral-700 to-neutral-900 text-neutral-50"
          separator="✺"
        />
        <FAQ />
        <RecentWork />
        <CTA />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
