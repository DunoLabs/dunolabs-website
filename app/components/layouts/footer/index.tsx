import ViewContainer from '@/components/layouts/view-container';

import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

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

interface SocialIconProps {
  href: string;
  target: string;
  icon: React.ReactNode;
}

const SocialIcons = [
  {
    href: 'https://www.instagram.com/dunolabs',
    target: '_blank',
    icon: (
      <Instagram
        size={20}
        className="transition-all duration-300 ease-in-out text-neutral-400 hover:text-neutral-50"
      />
    ),
  },
  {
    href: 'https://www.twitter.com/dunolabs',
    target: '_blank',
    icon: (
      <Twitter
        size={20}
        className="transition-all duration-300 ease-in-out text-neutral-400 hover:text-neutral-50"
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/company/dunolabs',
    target: '_blank',
    icon: (
      <Linkedin
        size={20}
        className="transition-all duration-300 ease-in-out text-neutral-400 hover:text-neutral-50"
      />
    ),
  },
];

const SocialIcon: React.FC<SocialIconProps> = ({ href, target, icon }) => {
  return (
    <Link
      href={href}
      target={target}
      className="p-3 no-underline rounded-full bg-neutral-800">
      {icon}
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="relative pb-32 sm:pb-10 bg-neutral-900">
      <ViewContainer>
        {/* <Separator /> */}

        <div className="flex flex-wrap items-center justify-center w-full h-full sm:justify-between ">
          <div className="text-center sm:text-start">
            <Link
              href="/"
              className="mx-4 text-3xl text-neutral-50 hover:text-neutral-100 sm:mx-0 ">
              dunolabs
            </Link>

            <p className="mt-2 text-sm sm:text-center text-neutral-400 sm:text-lg text-start">
              A design & engineering agency based in India.
            </p>
          </div>
          <div className="gap-4 sm:w-1/4">
            {FooterLinks.map((link) => (
              <Link
                href={link.link}
                className="text-lg ms-4 text-neutral-50 hover:text-neutral-100 text-start">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full h-full mt-5 sm:justify-between">
          <p>
            <span className="text-xs text-center text-neutral-400 sm:text-lg sm:text-start">
              @ {''}2023 dunolabs.
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center w-full h-full gap-6 mt-4 sm:justify-around sm:w-1/6">
            {SocialIcons.map((icon, index) => (
              <SocialIcon
                key={index}
                href={icon.href}
                target={icon.target}
                icon={icon.icon}
              />
            ))}
          </div>
        </div>
      </ViewContainer>
    </div>
  );
};

export default Footer;
