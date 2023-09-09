'use client';
import React, {useEffect, useState} from 'react';
import TabFilters from './TabFilters';
import Heading2 from '@/shared/Heading2';
import CardCategory3 from '@/components/CardCategory3';
import {useSelector} from 'react-redux';
import {getDestinationsList} from '@/redux/slices/destinations';
import ReactPaginate from 'react-paginate';

const DestinationsSections = () => {
  const destinations = useSelector(getDestinationsList);
  const [destinationsList, setDestinationsList] = useState(destinations);
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + itemsPerPage);
  const [currentItems, setCurrentItems] = useState(
    destinationsList.slice(itemOffset, endOffset)
  );

  const [pageCount, setPageCount] = useState(
    Math.ceil(destinationsList.length / itemsPerPage)
  );

  useEffect(() => {
    setEndOffset(itemOffset + itemsPerPage);
    setCurrentItems(destinationsList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(destinationsList.length / itemsPerPage));
  }, [destinationsList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % destinationsList.length;
    setItemOffset(newOffset);
  };
  return (
    <div className={`nc-SectionGridFilterCard pt-16`}>
      <Heading2
        heading="Top Destinations in Pakistan"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            {destinations?.length} desinations
            <span className="mx-2">·</span>307,803 visitors every year
          </span>
        }
      />

      <div className="mb-8 lg:mb-11">
        <TabFilters setDestinationsList={setDestinationsList} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {currentItems?.map((destination) => (
          <CardCategory3 key={destination.id} taxonomy={destination} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
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

export default DestinationsSections;
