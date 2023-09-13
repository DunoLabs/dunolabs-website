import './globals.css';
import type { Metadata } from 'next';
import Layout from './components/layouts';

export const metadata: Metadata = {
  title: {
    default: 'dunolabs',
    template: '%s | dunolabs ',
  },
  description: 'we design & develop products & tools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'app-container'}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
