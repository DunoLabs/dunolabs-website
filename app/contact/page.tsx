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
    <>
      <div className="py-24 bg-neutral-900 sm:py-40">
        <ViewContainer>
          <div className="max-w-3xl">
            <HeadingBanner
              title="Connect and Make It Happen!"
              className="mt-10 text-neutral-50">
              <p className="mt-10 text-lg sm:text-xl text-neutral-400 ">
                If you have a specific project, a rough idea, or a belief in a
                partnership that you want to discuss with us,{' '}
                <span>
                  {' '}
                  @
                  <a
                    href="https://twitter.com/wh0sumit"
                    target={'_blank'}
                    className="border-b-2">
                    sumit
                  </a>
                </span>{' '}
                & team dunolabs loves to read your mail.
              </p>

              <div className="my-10 contact-info">
                <p className="mt-2 text-lg uppercase sm:text-xl text-neutral-400 ">
                  Email:{' '}
                  <Link
                    href={`mailto:dunolabs@gmail.com`}
                    className="lowercase border-b-2 text-neutral-50"
                    target="_blank">
                    dunolabs@gmail.com
                  </Link>
                </p>{' '}
                {/* <p className="mt-2 text-lg uppercase sm:text-xl text-neutral-400 ">
                  Phone:{' '}
                  <Link
                    href={`tel:8103241455`}
                    className="text-neutral-50"
                    target="_blank">
                    +91 8103241455
                  </Link>
                </p>{' '} */}
                <p className="mt-2 text-lg uppercase sm:text-xl text-neutral-400 ">
                  Address:{' '}
                  <Link
                    href={`https://www.google.com/maps?output=search&q=indore+india&entry=mc&sa=X&ved=2ahUKEwjBytadksT_AhVGxDgGHcF_DyoQ0pQJegQIDRAB`}
                    className="lowercase text-neutral-50"
                    target="_blank">
                    Indore, India
                  </Link>
                </p>
              </div>
              <p className="mt-10 text-lg sm:text-xl text-neutral-400 ">
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

      <Marquee
        text="Contact us Now"
        className="bg-neutral-50 text-neutral-900 "
      />
      <CTA />
      <Footer />
    </>
  );
};

export default Contact;
