'use client';
import React, {useEffect} from 'react';
import SectionHero from '@/app/(server-components)/SectionHero';
import BgGlassmorphism from '@/components/BgGlassmorphism';
import {TaxonomyType} from '@/data/types';
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories';
import SectionOurFeatures from '@/components/SectionOurFeatures';
import BackgroundSection from '@/components/BackgroundSection';
import SectionGridFeaturePlaces from '@/components/SectionGridFeaturePlaces';
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox';
import SectionClientSay from '@/components/SectionClientSay';
import {getAllDocumentsFromCollection} from '@/utils/firebase/firestore';
const DEMO_CATS = [
  {
    id: '1',
    href: '/',
    name: 'Skardu',
    taxonomy: 'category',
    count: 188288,
    thumbnail: '/destinations/skardu.jpg',
  },
  {
    id: '2',
    href: '/',
    name: 'Hunza',
    taxonomy: 'category',
    count: 188288,
    thumbnail: '/destinations/hunza.jpg',
  },
  {
    id: '3',
    href: '/',
    name: 'Naran Kaghan',
    taxonomy: 'category',
    count: 188288,
    thumbnail: '/destinations/naran.jpg',
  },
  {
    id: '4',
    href: '/',
    name: 'Neelum, AJK',
    taxonomy: 'category',
    count: 188288,
    thumbnail: '/destinations/neelum.jpg',
  },
  {
    id: '5',
    href: '/',
    name: 'Kalaam',
    taxonomy: 'category',
    count: 188288,
    thumbnail: '/destinations/kalam.jpg',
  },
  {
    id: '6',
    href: '/',
    name: 'Kumrat',
    taxonomy: 'category',
    count: 188288,
    thumbnail: '/destinations/kumrat.jpg',
  },
  {
    id: '7',
    href: '/',
    name: 'Swat',
    taxonomy: 'category',
    count: 188288,
    thumbnail: '/destinations/swat.jpg',
  },
];

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />
        <SectionSliderNewCategories categories={DEMO_CATS} />
        <SectionGridFeaturePlaces cardType="card2" />
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
        <SectionOurFeatures />
        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>
      </div>
    </main>
  );
}

export default PageHome;
