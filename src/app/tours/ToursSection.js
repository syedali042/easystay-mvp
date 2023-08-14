'use client';
import React, {useEffect, useState} from 'react';
import Pagination from '@/shared/Pagination';
import TourFilters from './TourFilters';
import Heading2 from '@/shared/Heading2';
import {useSelector} from 'react-redux';
import {
  getEndingDate,
  getStartingDate,
  getToursList,
} from '@/redux/slices/tours';
import ToursCard from '@/components/ToursCard';
import ReactPaginate from 'react-paginate';

const ToursSection = ({className = ''}) => {
  const toursStartingFrom = useSelector(getStartingDate);
  const toursEndingAt = useSelector(getEndingDate);
  const tours = useSelector(getToursList);
  const [toursList, setToursList] = useState(tours);
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + itemsPerPage);
  const [currentItems, setCurrentItems] = useState(
    toursList.slice(itemOffset, endOffset)
  );
  const [pageCount, setPageCount] = useState(
    Math.ceil(toursList.length / itemsPerPage)
  );

  useEffect(() => {
    setEndOffset(itemOffset + itemsPerPage);
    setCurrentItems(toursList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(toursList.length / itemsPerPage));
  }, [toursList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % toursList.length;
    setItemOffset(newOffset);
  };
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
        <TourFilters setToursList={setToursList} toursList={toursList} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {currentItems?.map((tour) => (
          <ToursCard key={tour.id} data={tour} />
        ))}
      </div>
      <div className="flex mt-8 justify-center items-center">
        {/* <Pagination /> */}
        <div className="custom-pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            activeClassName="bg-active-page"
          />
        </div>
      </div>
    </div>
  );
};

export default ToursSection;
