import Layout from '@/components/layouts';
import Footer from '@/components/layouts/footer';
import ViewContainer from '@/components/layouts/view-container';
import CTA from '@/components/ui/cta';
import HeadingBanner from '@/components/ui/heading-banner';
import Marquee from '@/components/ui/marquee';
import Image from 'next/image';
import Link from 'next/link';

interface Photo {
  id: number;
  image: string;
  title: string;
  description: string;
  twitter: string;
}

const photos: Photo[] = [
  {
    id: 1,
    title: 'Sumit Singh',
    description: 'Founder & CEO / Software Engineer',
    image: 'https://github.com/wh0sumit.png',
    twitter: 'http://twitter.com/wh0sumit',
  },
  {
    id: 2,
    title: 'Yash Sehgal',
    description: 'Engineering Manager',
    image: 'https://github.com/yashsehgal.png',
    twitter: 'http://twitter.com/yashsehgaldev',
  },
  {
    id: 3,
    title: 'Aastha Shah',
    description: 'Founders Office (Intern)',
    image: 'https://github.com/aasthashahcodes.png',
    twitter: 'http://twitter.com/aasthaashahh',
  },
];

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {' '}
      <div className="py-24 bg-zinc-900 sm:py-40">
        <ViewContainer>
          <HeadingBanner
            title="Who We Are: The Crazy Minds Behind the Madness"
            className="max-w-4xl mt-10 text-zinc-50">
            <div className="max-w-3xl">
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  We are a group of people who believe that the products can be
                  beauitful and functional at the same time, and that the
                  process of building them can be fun and rewarding for everyone
                  involved.
                </span>
              </p>
            </div>
          </HeadingBanner>
          <div className="mt-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2">
              {photos.map((photo) => (
                <div key={photo.id}>
                  <Link
                    href={photo.twitter}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                      loading="lazy"
                      src={photo.image}
                      alt={photo.title}
                      width={500}
                      height={500}
                      className="w-full h-auto transition-all duration-300 transform rounded-xl grayscale hover:scale-105 hover:grayscale-0 "
                    />
                  </Link>
                  <div className="pt-4 text-zinc-50">
                    <h3 className="text-lg font-semibold uppercase">
                      {photo.title}
                    </h3>
                    <p className="italic text-md">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ViewContainer>
      </div>
      <div className="py-24 bg-zinc-50 sm:py-40">
        <ViewContainer>
          <HeadingBanner
            title="Being a part of dunolabs doesn’t feel like working at the office."
            className="max-w-4xl mt-10 text-zinc-900">
            <div className="max-w-3xl">
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  In fact, it's more like a journey with great friends. On our
                  way to our destination, sometimes we detour to exciting
                  places, but we always keep our shared vision in mind.
                </span>
              </p>
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  We are a group of people who believe that the products can be
                  beauitful and functional at the same time, and that the
                  process of building them can be fun and rewarding for everyone
                  involved.
                </span>
              </p>
            </div>
          </HeadingBanner>{' '}
        </ViewContainer>
      </div>
      <Marquee text="JOIN Now" className="bg-zinc-900 text-zinc-50 " />
      <div className="py-24 bg-zinc-50 sm:py-40">
        <ViewContainer>
          <HeadingBanner
            title="Why Dunolabs website is in black/white?"
            className="max-w-4xl mt-10 text-zinc-900">
            <div className="max-w-3xl">
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  our journey began in mid-2023 with a clear vision and an
                  unwavering commitment. We made a solemn pledge to ourselves,
                  and as a reminder of that vision and pledge, we chose to
                  present our website in black and white. It symbolizes our
                  dedication to staying focused until we achieve our goals and
                  bring our plans to life.
                </span>
              </p>
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  We firmly believe that actions speak louder than words, and we
                  are determined to turn our vision into reality. Once we
                  accomplish what we have planned, we will proudly unveil a new
                  website design with vibrant colors that reflect our
                  achievements.
                </span>
              </p>{' '}
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  We invite you to join us on this extraordinary journey and be
                  a part of making our vision come true. We combine hard work
                  and smart strategies to make things happen, and we are
                  confident that we will succeed.
                </span>
              </p>{' '}
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  Together, let's create a future where possibilities know no
                  bounds. Join us at dunolabs and witness the power of
                  determination and innovation.
                </span>
              </p>
            </div>
          </HeadingBanner>{' '}
        </ViewContainer>
      </div>
      <CTA />
      <Footer />
    </Layout>
  );
};

export default AboutPage;
