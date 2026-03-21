import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { WaitlistModal } from './payload/WaitlistModal';

export interface Cta5Props {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  buttonText: string;
  buttonLink: string;
}

const Cta5 = ({
  title = 'Call to Action',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  image = {
    url: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg',
    alt: 'placeholder hero',
  },
  buttonText = 'Get Started',
  buttonLink = '#',
}: Cta5Props) => {
  return (
    <div className="bg-card border-sm flex w-full flex-col overflow-hidden rounded-lg md:rounded-xl lg:flex-row lg:items-center">
      <div className="w-full shrink-0 self-stretch lg:w-1/2">
        <Image
          src={image.url}
          alt={image.alt}
          width={800}
          height={533}
          className="aspect-3/2 w-full rounded-t-md object-cover md:rounded-t-none md:rounded-l-md"
        />
      </div>
      <div className="w-full shrink-0 px-4 py-6 md:p-8 lg:w-1/2 lg:px-16">
        <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
          {title}
        </h3>
        <p className="text-muted-foreground mb-8 lg:text-lg">{description}</p>
        {buttonLink !== '/waitlist' && (
          <Link href={buttonLink}>
            <Button>{buttonText}</Button>
          </Link>
        )}
        {buttonLink === '/waitlist' && (
          <WaitlistModal>
            <Button>{buttonText}</Button>
          </WaitlistModal>
        )}
      </div>
    </div>
  );
};

export { Cta5 };
