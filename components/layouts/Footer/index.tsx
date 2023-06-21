import ViewContainer from 'components/layouts/view-container';
import Separator from 'components/ui/seperator';

import { Instagram, Link, Linkedin, Twitter } from 'lucide-react';

const FooterLinks = [
  {
    title: 'legal notice',
    link: '/legal',
  },
  {
    title: 'Privacy Policy',
    link: '/privacy',
  },
  {
    title: 'Terms',
    link: '/terms',
  },
];

const Footer: React.FC = () => {
  return (
    <div className="relative pb-32 sm:pb-10 bg-zinc-900">
      <ViewContainer>
        <Separator />

        {/* <div className="flex flex-wrap items-center justify-center w-full h-full my-5 sm:justify-between sm:w-1/4">
          {FooterLinks.map((link) => (
            <Link
              href={link.link}
              className="mx-4 text-lg text-zinc-50 hover:text-zinc-100 sm:mx-0 text-start"
            >
              {link.title}
            </Link>
          ))}
        </div> */}
        <div className="flex flex-wrap items-center justify-center w-full h-full mt-4 sm:justify-between">
          <p className="mt-5">
            <span className="text-lg text-zinc-50 sm:text-lg text-gray">
              Made with 🤍 in India
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center w-full h-full gap-6 mt-4 sm:justify-around sm:w-1/6 ">
            <Link href="https://www.instagram.com/dunolabs">
              <Instagram
                size={24}
                className="mx-4 text-lg border-0 hover:border-b-2 text-zinc-50 hover:text-zinc-100 sm:mx-0"
              />
            </Link>
            <Link href="https://www.twitter.com/dunolabs">
              <Twitter
                size={24}
                className="mx-4 text-lg border-0 hover:border-b-2 text-zinc-50 hover:text-zinc-100 sm:mx-0"
              />
            </Link>

            <Link href="https://www.linkedin.com/company/dunolabs">
              <Linkedin
                size={24}
                className="mx-4 text-lg border-0 hover:border-b-2 text-zinc-50 hover:text-zinc-100 sm:mx-0"
              />
            </Link>
          </div>
        </div>
      </ViewContainer>
    </div>
  );
};

export default Footer;
