import React from 'react';
import ViewContainer from 'components/layouts/view-container';
import Separator from 'components/ui/seperator';
import Button from 'components/ui/buttons';
import Image from 'next/image';
import HeadingBanner from 'components/ui/heading-banner';

interface Link {
  href: string;
  text: string;
}

const About: React.FC = () => {
  const links: Link[] = [{ href: '/about', text: 'learn more' }];

  return (
    <div className="relative py-24 bg-zinc-900 sm:py-32">
      <div className="absolute right-0 flex items-center py-4 text-zinc-50 rounded-full -top-[21.3rem]">
        <Image
          src="/media/greek-statue.png"
          alt="logo"
          className="hidden transition-all duration-500 sm:flex grayscale hover:grayscale-0"
          width={300}
          height={300}
        />
      </div>

      <ViewContainer>
        <div className="absolute  flex items-center py-4 text-zinc-50 rounded-full -top-[2.2rem]">
          <Button
            className="left-0 p-4 rounded-full text-zinc-50 bg-zinc-900"
            border="borderLight">
            LET'S FIND OUT MORE ABOUT US
          </Button>
        </div>
        <div className="items-center justify-center w-full h-full ">
          <HeadingBanner
            title="about"
            description="We strive to foster a culture of collaboration, creativity, and innovation, where our team members are encouraged to bring their whole selves to work."
            className="w-full text-zinc-50 sm:w-1/3"
            links={links}
          />

          <div className="flex flex-col items-end justify-end">
            <Image
              src="/media/about.png"
              className="transition-all duration-500 grayscale hover:grayscale-0"
              alt="about"
              width={500}
              height={200}
            />
            <p className="w-full my-10 text-lg text-zinc-50 sm:w-1/3 text-end">
              <span className="text-lg sm:text-xl text-gray">
                By putting people first, we aim to create a company that not
                only delivers exceptional products and services but also makes a
                positive impact on the world around us.
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-zinc-50">2023</span>
            <Separator className="mx-3" />
            <span className="italic font-semibold text-zinc-50 text-end">
              the more you fuck around, the more you're gonna find out !!
            </span>
          </div>
        </div>
      </ViewContainer>
    </div>
  );
};

export default About;