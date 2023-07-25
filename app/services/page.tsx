import Layout from '@/components/layouts';
import Footer from '@/components/layouts/footer';
import ViewContainer from '@/components/layouts/view-container';
import { Badge } from '@/components/ui/badge';
import CTA from '@/components/ui/cta';
import HeadingBanner from '@/components/ui/heading-banner';
import Marquee from '@/components/ui/marquee';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardId,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import Separator from '@/components/ui/seperator';

interface Service {
  title: string;
  status: string;
}

interface ServiceItem {
  id: number;
  name: string;
  title: string;
  description: string;
  services: Service[];
}

const ServicesItems: ServiceItem[] = [
  {
    id: 1,
    name: "web-development",
    title: 'Web Development',
    description:
      'We build websites and web applications that are fast, secure, and easy to manage. We use the latest technologies to build websites that are responsive, mobile-friendly, and SEO optimized.',
    services: [
      { title: 'Web Application', status: 'active' },
      { title: 'Software as a Service (SaaS)', status: 'new' },
      { title: 'Internal Tools & Dashboards', status: 'active' },
      { title: 'Content Management System (CMS)', status: 'active' },
      { title: 'Corporate and Storytelling Websites', status: 'active' },
      { title: 'Community Websites', status: 'new' },
      { title: 'E-commerce and Marketplaces', status: 'coming soon' },
      { title: 'Progressive Web Apps (PWA)', status: 'active' },
      { title: 'Single Page Applications (SPA)', status: 'active' },
      { title: 'Serverless Applications', status: 'coming soon' },
      { title: 'API Development', status: 'active' },
    ],
  },
  {
    id: 2,
    name: "ux-ui-design",
    title: 'Ux & Ui Design',
    description:
      'We design beautiful, user-friendly, and easy to use interfaces that are intuitive and engaging. We use the latest design trends, tools, and technologies to create a unique and unforgettable experience for your users.',
    services: [
      { title: 'User Experience (UX) Design', status: 'active' },
      { title: 'User Interface (UI) Design', status: 'active' },
      { title: 'Wireframing', status: 'active' },
      { title: 'Prototyping', status: 'coming soon' },
      { title: 'Mobile App Design', status: 'new' },
      { title: 'Web App Design', status: 'active' },
      { title: 'Responsive Design', status: 'active' },
      { title: 'Design Systems', status: 'coming soon' },
    ],
  },
];

interface ComponentData {
  id: string;
  title: string;
  description: string;
}

const ComponentData: ComponentData[] = [
  {
    id: '01',
    title: 'Outstanding outcomes require nurturing.',
    description:
      'Creating brilliance demands dedication, attention to detail, and time. At Dunolabs, we invest the necessary effort to deliver exceptional products that respect our users.',
  },
  {
    id: '02',
    title: 'Transparency: What you see is what you get.',
    description:
      'We collaborate with you as a unified team, providing full access to our project management processes, software, and design tools. You can even view the software code.',
  },
  {
    id: '03',
    title: 'Agile is the way to valuable software.',
    description:
      'We embrace the Agile Manifesto, primarily using Scrum for medium or large-scale projects. However, we maintain an agile mindset even when employing traditional methodologies.',
  },
  {
    id: '04',
    title: 'Data privacy is non-negotiable.',
    description:
      'We prioritize user privacy, adhering to data privacy principles and GDPR guidelines. Privacy by design and default are essential requirements in all the websites and apps we develop.',
  },
];

const ServiceItem = ({ title, name, description, id, services }: ServiceItem) => (
  <div key={id} id={name}>
    <h3 className="text-3xl font-bold uppercase text-zinc-900">{title}</h3>
    {/* <p className="mt-10">
      <span className="text-lg sm:text-xl text-gray "> {description}</span>
    </p> */}

    <ul className="px-10 list-disc my-14">
      {services.map((service) => (
        <li
          key={service.title}
          className="my-5 text-xl text-zinc-800 hover:text-zinc-900 hover:underline ">
          {service.title}
          {service.status === 'new' || service.status === 'coming soon' ? (
            <Badge
              className="ml-2 uppercase bg-zinc-900 text-zinc-50"
              variant={'default'}>
              {service.status}
            </Badge>
          ) : null}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <Layout>
      <div className="py-24 sm:py-40">
        <ViewContainer>
          <HeadingBanner
            title="list of things we love to do & we are good at!"
            className="max-w-4xl mt-10 text-zinc-900">
            <div className="max-w-3xl">
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  Below is a list of things we love to do and we are good at, if
                  you don't see what you are looking for, please{' '}
                  <Link href="/contact" className="border-b-2 ">
                    contact
                  </Link>{' '}
                  and we will be happy to help you.
                </span>
              </p>
            </div>
          </HeadingBanner>
          <div className="pt-24 sm:pt-40">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {ServicesItems.map((item) => (
                <>
                  <ServiceItem
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    id={item.id}
                    name={item.name}
                    services={item.services}
                  />
                </>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-20">
            <span className="uppercase text-zinc-900">
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <Separator className="mx-3 text-zinc-900" />
            <span className="italic font-semibold text-zinc-900 text-end">
              don't worry we launching more services soon !
            </span>
          </div>
        </ViewContainer>
      </div>

      <div className="py-10 bg-zinc-900 sm:py-20">
        <ViewContainer>
          <HeadingBanner
            title="Say Goodbye to Average: Elevate Your Brand with Us Today!"
            color="text-zinc-50"
            className="max-w-4xl mt-10 text-zinc-50"
            links={[
              {
                text: 'Know more about us',
                href: '/about',
                linkVariant: 'linkLight',
              },
            ]}>
            <div className="max-w-3xl">
              <p className="mt-10">
                <span className="text-lg sm:text-xl text-gray">
                  We hold one principle that remains unwavering: we consistently
                  operate alongside you with a mindset of cooperation and mutual
                  regard. Your ideas will undoubtedly benefit from our valuable
                  input. If you seek a team solely dedicated to executing your
                  concepts without question, we may not be the right fit for
                  your project.
                </span>
              </p>
            </div>
          </HeadingBanner>
          <div className="flex flex-wrap mt-28">
            <div className="w-full md:w-1/2">
              {
                /// add only odd cards
                ComponentData.filter((_, index) => index % 2 === 0).map(
                  (card) => (
                    <Card
                      className="w-full mb-20 border-none shadow-none sm:mb-40 sm:w-9/12 "
                      key={card.id}>
                      <CardHeader>
                        <CardId className="hidden sm:flex text-zinc-50">
                          {card.id}
                        </CardId>
                        <CardTitle className="mb-3 text-3xl text-zinc-50">
                          {card.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="mt-3 text-zinc-50">
                        <CardDescription className="text-xl ">
                          {card.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ),
                )
              }
            </div>
            <div className="w-full md:w-1/2">
              {
                /// add only even cards
                ComponentData.filter((_, index) => index % 2 !== 0).map(
                  (card) => (
                    <Card
                      className="w-full mb-20 border-none shadow-none sm:my-40 sm:w-9/12 "
                      key={card.id}>
                      <CardHeader>
                        <CardId className="hidden sm:flex text-zinc-50">
                          {card.id}
                        </CardId>
                        <CardTitle className="mb-3 text-3xl text-zinc-50">
                          {card.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="mt-3 text-zinc-50">
                        <CardDescription className="text-xl ">
                          {card.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ),
                )
              }
            </div>
          </div>
        </ViewContainer>
      </div>
      <Marquee text="Contact Now" />

      <CTA />
      <Footer />
    </Layout>
  );
};

export default Services;
