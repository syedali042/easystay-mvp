'use client';

import React, {Fragment, useEffect, useState} from 'react';
import {Popover, Transition} from '@headlessui/react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonThird from '@/shared/ButtonThird';
import Checkbox from '@/shared/Checkbox';

import {
  filterDestinationsList,
  getDestinationsList,
} from '@/redux/slices/destinations';
import {useSelector} from 'react-redux';
import {DESTINATIONS_TYPES_ARRAY} from '@/constants/common';

const TourFilters = ({setDestinationsList}) => {
  // Number Of Days
  const [typesToFilter, setTypesToFilter] = useState([]);
  // Active Filters
  const [activeFilters, setActiveFilter] = useState({
    types: false,
  });

  const destinations = useSelector(getDestinationsList);

  const filterDestinations = (filter) => {
    const filteredDestinations = filterDestinationsList({
      filterByTypes: typesToFilter,
      list: destinations,
    });
    setDestinationsList(filteredDestinations);
    setActiveFilter({...activeFilters, [filter]: true});
  };

  const renderXClear = (filter) => {
    return (
      <span
        onClick={() => {
          if (filter == 'types') {
            setTypesToFilter([]);
            setDestinationsList(
              filterDestinationsList({
                list: destinations,
              })
            );
          }
          setActiveFilter({...activeFilters, [filter]: false});
        }}
        className="w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-3 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  };

  const renderTabsTimeOfDay = () => {
    return (
      <Popover className="p-1 relative w-1/2 md:w-auto">
        {({open, close}) => (
          <>
            <Popover.Button
              className={`w-full flex items-center justify-center px-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-6000 focus:outline-none ${
                open ? '!border-primary-500 ' : ''
              } ${
                activeFilters?.types == true
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : ''
              }`}
            >
              <span>Filter By Type</span>
              {activeFilters?.types == true ? (
                renderXClear('types')
              ) : (
                <i className="las la-angle-down ml-2"></i>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900   border border-neutral-200 dark:border-neutral-700">
                  <div className="relative flex flex-col px-5 py-6 space-y-5">
                    {DESTINATIONS_TYPES_ARRAY.map((destination) => {
                      const key = destination[0];
                      const label = destination[1];
                      const value = destination[2];
                      return (
                        <div key={key} className="">
                          <Checkbox
                            name={value}
                            label={label}
                            defaultChecked={typesToFilter.includes(value)}
                            onChange={(checked) => {
                              if (checked)
                                setTypesToFilter([...typesToFilter, value]);
                              else {
                                setTypesToFilter(
                                  typesToFilter.filter(
                                    (number) => number !== value
                                  )
                                );
                              }
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                    <ButtonThird onClick={close} sizeClass="px-4 py-2 sm:px-5">
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={() => {
                        filterDestinations('types');
                        close();
                      }}
                      sizeClass="px-4 py-2 sm:px-5"
                    >
                      Apply
                    </ButtonPrimary>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  return (
    <div className="">
      <div className="flex flex-wrap">{renderTabsTimeOfDay()}</div>
    </div>
  );
};

export default TourFilters;
