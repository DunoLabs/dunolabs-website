import Layout from '@/components/layouts';
import ViewContainer from '@/components/layouts/view-container';
import Button from '@/components/ui/buttons';
import { cn } from '@/lib/cn';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <ViewContainer className={cn('mt-32 sm:mt-40')}>
        <h2 className="text-5xl font-extrabold sm:text-8xl loading-text max-md:text-center">
          right place, just a wrong page
        </h2>
        <div className="flex flex-row items-center justify-start gap-4 mt-12 max-md:justify-center">
          <Button variant={'subtle'} size={'lg'} href={'/'} target={'_self'}>
            {'Back to home'}
          </Button>
          <Button size={'lg'} href={'/about'} target={'_self'}>
            Know more about us
          </Button>
        </div>
      </ViewContainer>
    </Layout>
  );
}
