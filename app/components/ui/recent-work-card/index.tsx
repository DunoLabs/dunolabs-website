import React from 'react';
import ViewContainer from '@/components/layouts/view-container';
import Button from '@/components/ui/buttons';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const RecentWorkCard: React.FunctionComponent = () => {
  return (
    <div className="py-24 sm:py-32">
      <ViewContainer>
        <div className="grid items-center content-center grid-cols-1 gap-4 md:grid-cols-2 bg-neutral-900 rounded-3xl">
          <div className="flex flex-col gap-4 p-8">
            <h2 className="text-5xl font-extrabold sm:text-7xl loading-text text-neutral-50">
              Founders Forge Community is now live.
            </h2>
            <p>
              <span className="text-lg sm:text-xl text-neutral-400 ">
                founder's forge is for first-time founders & builders who want
                to build meaningful products and companies.
              </span>
            </p>
            <div className="mt-5">
              <Button
                variant={'white'}
                className="rounded-full"
                border="default"
                size={'lg'}
                asChild>
                <Link href="https://foundersforge.club" target={'_blank'}>
                  foundersforge.club
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden action-image-container">
            <Image
              src="/media/foundersforge.jpeg"
              alt="home image"
              width={'700'}
              height={'400'}
              className="h-[100%] transition-all duration-500 grayscale hover:grayscale-0 rounded-none sm:rounded-r-3xl"
            />
          </div>
        </div>
      </ViewContainer>
    </div>
  );
};

export default RecentWorkCard;
