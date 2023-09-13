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
      <div className="relative py-24 sm:py-40">
        <ViewContainer>
          <div className="items-center justify-center w-full h-full ">
            <div className="flex flex-wrap items-center justify-between mt-10">
              <div className="w-full h-full mb-10 sm:w-3/5">
                <p>
                  <span className="text-lg text-zinc-900 sm:text-lg text-gray ">
                    01 / 03
                  </span>
                </p>
                <HeadingBanner
                  title="Tough challenges? Take it easy! We'll assist you."
                  description="We are a team of passionate developers and designers who are dedicated to creating the best possible user experience for our clients."
                  // Removing services link temporarily
                  // links={[
                  //   {
                  //     text: 'View all services',
                  //     linkVariant: 'linkDark',
                  //     href: '/services', // Add the href property
                  //   },
                  // ]}
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
                            className="ml-2 bg-zinc-900 text-zinc-50"
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
      </div>
    </>
  );
};

export default OurServices;
