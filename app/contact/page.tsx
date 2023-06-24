import Layout from '@/components/layouts';
import Footer from '@/components/layouts/footer';
import ViewContainer from '@/components/layouts/view-container';
import Button from '@/components/ui/buttons';
import CTA from '@/components/ui/cta';
import Calendar from '@/components/ui/calendar';
import HeadingBanner from '@/components/ui/heading-banner';
import Marquee from '@/components/ui/marquee';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <Layout>
      <div className="py-24 bg-zinc-900 sm:py-40">
        <ViewContainer>
          <div className="max-w-3xl">
            <HeadingBanner
              title="Connect and Make It Happen!"
              className="mt-10 text-zinc-50">
              <p className="mt-10 text-lg sm:text-xl text-gray">
                If you have a specific project, a rough idea, or a belief in a
                partnership that you want to discuss with us, sumit loves to
                read your mail.
              </p>

              <div className="my-10 contact-info">
                <p className="mt-2 text-lg uppercase sm:text-xl text-gray">
                  Email:{' '}
                  <Link
                    href={`mailto:dunolabs@gmail.com`}
                    className="lowercase text-zinc-50"
                    target="_blank">
                    dunolabs@gmail.com
                  </Link>
                </p>{' '}
                <p className="mt-2 text-lg uppercase sm:text-xl text-gray">
                  Phone:{' '}
                  <Link
                    href={`tel:8103241455`}
                    className="text-zinc-50"
                    target="_blank">
                    +91 8103241455
                  </Link>
                </p>{' '}
                <p className="mt-2 text-lg uppercase sm:text-xl text-gray">
                  Address:{' '}
                  <Link
                    href={`https://www.google.com/maps?output=search&q=indore+india&entry=mc&sa=X&ved=2ahUKEwjBytadksT_AhVGxDgGHcF_DyoQ0pQJegQIDRAB`}
                    className="lowercase text-zinc-50"
                    target="_blank">
                    Indore, India
                  </Link>
                </p>
              </div>
              <p className="mt-10 text-lg sm:text-xl text-gray">
                By the way, you can also send us an email for unpaid
                pitch-requests.
              </p>
              <Button variant={'white'} className="my-10 rounded-full" asChild>
                <Link href="https://cal.com/wh0sumit/15min" target="_blank">
                  BOOK A MEETING <ArrowUpRight className="ml-1" />
                </Link>
              </Button>
            </HeadingBanner>
            <Calendar />
          </div>
        </ViewContainer>
      </div>

      <Marquee text="Contact us Now" className="bg-zinc-50 text-zinc-900 " />
      <CTA />
      <Footer />
    </Layout>
  );
};

export default Contact;