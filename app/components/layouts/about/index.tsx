import React from 'react';
import ViewContainer from '@/components/layouts/view-container';
import Separator from '@/components/ui/seperator';
import Button from '@/components/ui/buttons';
import Image from 'next/image';
import HeadingBanner from '@/components/ui/heading-banner';

interface Link {
  href: string;
  text: string;
}

const About: React.FC = () => {
  const links: Link[] = [{ href: '/about', text: 'learn more' }];

  return (
    <div className="relative py-24 bg-neutral-900 sm:py-32">
      <div className="absolute right-0 flex items-center py-4 text-neutral-50 rounded-full -top-[21.3rem]">
        <Image
          src="/media/greek-statue.png"
          alt="logo"
          className="hidden transition-all duration-500 sm:flex grayscale hover:grayscale-0"
          width={300}
          height={300}
        />
      </div>

      <ViewContainer>
        <div className="absolute  flex items-center py-4 text-neutral-50 rounded-full -top-[2.2rem]">
          <Button className="left-0 p-4 uppercase rounded-full text-neutral-50 bg-gradient-to-tr from-neutral-900 to-neutral-700">
            LET'S FIND OUT MORE ABOUT US
          </Button>
        </div>
        <div className="items-center justify-center w-full h-full ">
          <HeadingBanner
            title="about"
            description="We strive to foster a culture of collaboration, creativity, and innovation, where our team members are encouraged to bring their whole selves to work."
            className="w-full text-neutral-50 sm:w-1/3"
            links={links}
          />

          <div className="flex flex-col items-end justify-end">
            {/* <div className="p-2 border border-neutral-800 rounded-5xl bg-gradient-to-tr from-neutral-800 to-neutral-900"> */}
            <Image
              src="/media/old-macintosh.png"
              className="transition-all duration-500 grayscale hover:grayscale-0 rounded-4xl"
              alt="about"
              width={500}
              height={200}
            />
            {/* </div> */}
            <p className="w-full my-10 text-lg text-neutral-50 sm:w-1/3 text-end">
              <span className="text-lg sm:text-xl text-neutral-400">
                By putting people first, we aim to create a company that not
                only delivers exceptional products and services but also makes a
                positive impact on the world around us.
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="uppercase text-neutral-50">
              {' '}
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <Separator className="mx-3" />
            <span className="italic font-semibold text-neutral-50 text-end">
              the more you fuck around, the more you're gonna find out !!
            </span>
          </div>
        </div>
      </ViewContainer>
    </div>
  );
};

export default About;
