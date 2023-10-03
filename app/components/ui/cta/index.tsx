import ViewContainer from '@/components/layouts/view-container';
import HeadingBanner from '@/components/ui/heading-banner';
import Button from '@/components/ui/buttons';
import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <div className="relative py-24 bg-zinc-900 sm:py-32">
      {/* <ViewContainer>
        <HeadingBanner
          title={'Let’s do this together!'}
          className="text-zinc-50"
          links={[
            {
              href: 'mailto:dunolabs@gmail.com',
              text: 'dunolabs@gmail.com',
              linkVariant: 'linkLight',
            },
          ]}>
          <div className="max-w-3xl mt-10">
            <p className="mt-10">
              <span className="text-lg sm:text-xl text-gray ">
                we specialize in building human-centered systems that solve
                real-world problems. We understand that you know your customers
                and industry best, and that&apos;s why we believe in
                collaborating with you to create digital products that truly
                resonate with your target audience.
              </span>
            </p>
            <p className="mt-10">
              <span className="text-lg sm:text-xl text-gray ">
                Whether you have a specific project in mind or just a rough
                idea, we would love to hear from you. So, if you&apos;re ready
                to take your digital product to the next level, drop us a line
                and tell us your idea.
              </span>
            </p>

            <p className="mt-10">
              <span className="text-lg sm:text-xl text-gray ">
                By the way: If you would like to talk to us in Hindi,
                that&apos;s fine. We do speak Hindi too.
              </span>
            </p>
          </div>
        </HeadingBanner>
      </ViewContainer> */}
      <ViewContainer>
        {/* <h1 className="font-extrabold text-center heading-large text-zinc-50">
          dunolabs.in
        </h1> */}

        <div className="items-center justify-center w-full h-full my-10">
          <div className="flex flex-wrap items-center justify-between ">
            <div className="w-full h-full mb-10 sm:w-3/5">
              <HeadingBanner
                title="let's turn your customers into fans."
                className=" text-zinc-50"
              />
            </div>
            <div className="sm:w-[28rem] w-full flex flex-col justify-between gap-10">
              <div className="">
                <p className="text-lg text-zinc-50">
                  <span className="text-lg sm:text-xl text-gray">
                    Whether you have a specific project in mind or just a rough
                    idea, we would love to hear from you. So, if you&apos;re
                    ready to take your digital product to the next level, drop
                    us a line and tell us your idea.
                  </span>
                </p>{' '}
                <p className="mt-3 text-lg text-zinc-50">
                  <span className="text-lg sm:text-xl text-gray">
                    By the way: If you would like to talk to us in Hindi,
                    that&apos;s fine. We do speak Hindi too.
                  </span>
                </p>{' '}
              </div>
              <div className="">
                <Button className="rounded-full" asChild variant={'white'}>
                  <Link href="/contact">
                    let&apos;s be frens
                    <ArrowUpRight className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center justify-center w-full my-4 bg-zinc-800 rounded-3xl h-96">
            <ArrowDown size={150} className="text-zinc-50" />
          </div>
          <div className="flex items-center justify-center w-full my-4 bg-zinc-100 rounded-3xl h-96">
            <Asterisk size={150} className="text-zinc-900" />
          </div>
        </div>
      </ViewContainer>
    </div>
  );
};

export default CTA;
