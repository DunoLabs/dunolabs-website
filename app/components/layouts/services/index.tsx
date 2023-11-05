import React from 'react';
import ViewContainer from '@/components/layouts/view-container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import HeadingBanner from '@/components/ui/heading-banner';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowUpRight, Asterisk } from 'lucide-react';
import Button from '@/components/ui/buttons';
import Link from 'next/link';

interface OurServicesItem {
  title: string;
  content: string;
  status?: string;
}
const OurServicesList: OurServicesItem[] = [
  {
    title: 'UX / UI Design',
    content:
      'We design beautiful and functional interfaces, from scratch or based on your existing design.',
    status: 'active',
  },
  {
    title: 'Product Design',
    content:
      'We design beautiful and functional interfaces, from scratch or based on your existing design.',
    status: 'active',
  },
  {
    title: 'Web Development',
    content:
      'We provide you with better and modern web interfaces for your company website and web products.',
    status: 'active',
  },
  {
    title: 'App Development',
    content:
      'We build mobile apps for iOS and Android, using the latest technologies.',
    status: 'coming soon',
  },
];

const OurServices: React.FC = () => {
  return (
    <>
      <div className="py-24 sm:py-40">
        <ViewContainer>
          <div className="items-center justify-center w-full h-full ">
            <div className="flex flex-wrap items-center justify-between mt-10">
              <div className="w-full h-full mb-10 sm:w-3/5">
                <p>
                  <span className="text-lg text-neutral-900 sm:text-lg ">
                    01 / 03
                  </span>
                </p>
                <HeadingBanner
                  title="Tough challenges? Take it easy! We'll assist you."
                  description="We are a team of passionate developers and designers who are dedicated to creating the best possible user experience for our clients."
                  // Removing services link temporarily
                  links={[
                    {
                      text: 'View all services',
                      linkVariant: 'linkDark',
                      href: '/services', // Add the href property
                    },
                  ]}
                />
              </div>
              <div className="sm:w-[28rem] w-full">
                <Accordion
                  type="single"
                  collapsible
                  className="sm:w-[28rem] w-full">
                  {OurServicesList.map((item, index) => (
                    <AccordionItem
                      value={index.toString()} // Ensuring value is always a string
                      className="py-3"
                      key={index.toString()} // Ensuring key is always a string
                    >
                      <AccordionTrigger className="text-lg uppercase sm:text-xl hover:no-underline">
                        {item.title}{' '}
                        {item.status === 'coming soon' ? (
                          <Badge
                            className="ml-2 bg-neutral-900 text-neutral-50"
                            variant={'default'}>
                            {item.status}
                          </Badge>
                        ) : null}
                      </AccordionTrigger>
                      <AccordionContent className="text-lg">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </ViewContainer>

        <ViewContainer className="my-2">
          <div className="flex flex-col gap-4 my-10 sm:flex-row sm:gap-20">
            <Card className="relative rounded-3xl bg-gradient-to-tr from-neutral-800 to-neutral-900 h-96 c ">
              <CardHeader className="p-2">
                <Asterisk size={50} className="animate-pulse text-neutral-50" />
              </CardHeader>
              <CardFooter className="absolute bottom-0 w-full">
                <div className="flex items-center justify-between min-w-full gap-2">
                  <div className="heading">
                    <p className="my-1 text-2xl font-semibold uppercase text-neutral-50">
                      Design
                    </p>
                    <p className=" text-neutral-200">
                      We design beautiful & functional interfaces, from scratch.
                    </p>
                  </div>
                  <Button
                    className="p-2 rounded-full"
                    asChild
                    variant={'white'}>
                    <Link href="/contact">
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
            <Card className="relative rounded-3xl bg-gradient-to-tr from-neutral-800 to-neutral-900 h-96 c ">
              <CardHeader className="p-2">
                <Asterisk size={50} className="animate-pulse text-neutral-50" />
              </CardHeader>
              <CardFooter className="absolute bottom-0 w-full">
                <div className="flex items-center justify-between min-w-full gap-2">
                  <div className="heading">
                    <p className="my-1 text-2xl font-semibold uppercase text-neutral-50">
                      Develop
                    </p>
                    <p className=" text-neutral-200">
                      We develop modern web and mobile apps from scratch.
                    </p>
                  </div>
                  <Button
                    className="p-2 rounded-full"
                    asChild
                    variant={'white'}>
                    <Link href="/contact">
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>{' '}
            <Card className="relative rounded-3xl bg-gradient-to-tr from-neutral-800 to-neutral-900 h-96 c ">
              <CardHeader className="p-2">
                <Asterisk size={50} className="animate-pulse text-neutral-50" />
              </CardHeader>
              <CardFooter className="absolute bottom-0 w-full">
                <div className="flex items-center justify-between min-w-full gap-2">
                  <div className="heading">
                    <p className="my-1 text-2xl font-semibold uppercase text-neutral-50">
                      Market
                    </p>
                    <p className=" text-neutral-200">
                      We help you to market your product and services.
                    </p>
                  </div>
                  <Button
                    className="p-2 rounded-full"
                    asChild
                    variant={'white'}>
                    <Link href="/contact">
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>{' '}
          </div>
        </ViewContainer>
      </div>
    </>
  );
};

export default OurServices;
