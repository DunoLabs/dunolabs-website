import './globals.css';
import type { Metadata } from 'next';
import Layout from './components/layouts';

export const metadata: Metadata = {
  title: {
    default: 'dunolabs | creative software agency',
    template: '%s | dunolabs ',
  },
  description:
    'Your go-to software agency for creative design, development, and effective web app marketing. We craft web apps, products, and tools to elevate your online presence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={'app-container'}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
