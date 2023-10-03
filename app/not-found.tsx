import Layout from '@/components/layouts';
import ViewContainer from '@/components/layouts/view-container';
import Button from '@/components/ui/buttons';
import { cn } from '@/lib/cn';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <ViewContainer className={cn('mt-32 sm:mt-40')}>
        <h2 className="text-4xl font-extrabold uppercase sm:text-8xl loading-text">
          404
          <br /> Page not found.
        </h2>

        <div className="flex flex-row items-center justify-start gap-4 mt-12 max-md:justify-center">
          <Button
            variant={'white'}
            className="rounded-full "
            border="default"
            asChild>
            <Link href="/">Go back home</Link>
          </Button>
          <Button className="rounded-full " asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </ViewContainer>
    </Layout>
  );
}
