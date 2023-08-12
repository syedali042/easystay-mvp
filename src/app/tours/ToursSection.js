'use client';
import React, {FC} from 'react';
import {DEMO_EXPERIENCES_LISTINGS} from '@/data/listings';
import Pagination from '@/shared/Pagination';
import TourFilters from './TourFilters';
import Heading2 from '@/shared/Heading2';
import ExperiencesCard from '@/components/ExperiencesCard';
import {useSelector} from 'react-redux';
import {
  getEndingDate,
  getStartingDate,
  getToursList,
} from '@/redux/slices/tours';
import ToursCard from '@/components/ToursCard';

const ToursSection = ({className = ''}) => {
  const toursStartingFrom = useSelector(getStartingDate);
  const toursEndingAt = useSelector(getEndingDate);
  const tours = useSelector(getToursList({}));
  return (
    <div className={`nc-SectionGridFilterCard mt-8 ${className}`}>
      <Heading2
        heading="Tours"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            {tours?.length <= 1
              ? `${tours?.length} Tour`
              : `${tours?.length} Tours`}
            <span className="mx-2">·</span>
            {new Date(toursStartingFrom).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            -{' '}
            {new Date(toursEndingAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        }
      />

      <div className="mb-8 lg:mb-11">
        <TourFilters />
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {tours?.map((tour) => (
          <ToursCard key={tour.id} data={tour} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default ToursSection;
