'use client';
import React from 'react';
import SectionHero from '@/app/(server-components)/SectionHero';
import BgGlassmorphism from '@/components/BgGlassmorphism';
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories';
import SectionOurFeatures from '@/components/SectionOurFeatures';
import BackgroundSection from '@/components/BackgroundSection';
import SectionGridFeaturePlaces from '@/components/SectionGridFeaturePlaces';
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox';
import SectionClientSay from '@/components/SectionClientSay';
import {useSelector} from 'react-redux';
import {getDestinationsList} from '@/redux/slices/destinations';

function PageHome() {
  const destinations = useSelector(getDestinationsList);

  return (
    <main className='nc-PageHome relative overflow-hidden'>
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />
      <div className='container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28'>
        {/* SECTION HERO */}
        <SectionHero className='pt-10 lg:pt-16 lg:pb-16' />
        <SectionSliderNewCategories categories={destinations} />
        <SectionGridFeaturePlaces cardType='card2' />
        <div className='relative py-16'>
          <BackgroundSection />
          <SectionClientSay />
        </div>
        <SectionOurFeatures />
        <div className='relative py-16'>
          <BackgroundSection className='bg-orange-50 dark:bg-black dark:bg-opacity-20 ' />
          <SectionGridAuthorBox />
        </div>
      </div>
    </main>
  );
}

export default PageHome;
