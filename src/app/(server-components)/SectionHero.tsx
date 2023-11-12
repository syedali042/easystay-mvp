import React, {FC} from 'react';
import {useRouter} from 'next/navigation';
import imagePng from '@/images/easystay-hero.svg';
import HeroSearchForm from '../(client-components)/(HeroSearchForm)/HeroSearchForm';
import Image from 'next/image';
import ButtonPrimary from '@/shared/ButtonPrimary';

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({className = ''}) => {
  const router = useRouter();
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-3xl md:text-5xl xl:text-6xl !leading-[114%] ">
            Discover, Engage, & Inspire!
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Experience Pakistan&apos;s Enchanting Beauty: Where Adventure Meets
            Serenity. Discover the Unexplored Gems of the East
          </span>
          <ButtonPrimary
            onClick={() => router.push('/tours')}
            sizeClass="px-5 py-4 sm:px-7"
          >
            Start Exploring
          </ButtonPrimary>
        </div>
        <div className="flex-grow">
          <Image
            className="w-full -translate-y-4 hidden md:block"
            src={imagePng}
            alt="hero"
            priority
          />
        </div>
      </div>

      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
