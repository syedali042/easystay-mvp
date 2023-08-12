import React from 'react';
import {DEMO_EXPERIENCES_LISTINGS} from '@/data/listings';
import Pagination from '@/shared/Pagination';
import TabFilters from './TabFilters';
import Heading2 from '@/shared/Heading2';
import CardCategory3 from '@/components/CardCategory3';

const DEMO_DESTINATIONS = [
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

const SectionGridFilterCard = ({className = '', data = DEMO_DESTINATIONS}) => {
  return (
    <div className={`nc-SectionGridFilterCard ${className} pt-16`}>
      <Heading2
        heading="Top Destinations in Pakistan"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            7 desinations
            <span className="mx-2">·</span>307,803 visitors every year
          </span>
        }
      />

      <div className="mb-8 lg:mb-11">
        <TabFilters />
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data.map((destination) => (
          <CardCategory3 key={destination.id} taxonomy={destination} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
