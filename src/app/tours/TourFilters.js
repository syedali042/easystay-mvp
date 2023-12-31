'use client';

import React, {Fragment, useEffect, useState} from 'react';
import {Popover, Transition} from '@headlessui/react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonThird from '@/shared/ButtonThird';
import Checkbox from '@/shared/Checkbox';
import convertNumbThousand from '@/utils/convertNumbThousand';
import Slider from 'rc-slider';
import DatePicker from 'react-datepicker';
import DatePickerCustomHeaderTwoMonth from '@/components/DatePickerCustomHeaderTwoMonth';
import DatePickerCustomDay from '@/components/DatePickerCustomDay';
import {
  filterToursList,
  getEndingDate,
  getHomeSearchFilter,
  getStartingDate,
  getToursList,
  setHomeSearchFilter,
} from '@/redux/slices/tours';
import {useDispatch, useSelector} from 'react-redux';

const defaultDays = [
  {
    value: 1,
    name: 'One Day',
  },
  {
    value: 3,
    name: 'Three Days',
  },
  {
    value: 5,
    name: 'Five Days',
  },
  {
    value: 7,
    name: 'Seven Days',
  },
  {
    value: 14,
    name: 'Fourteen Days',
  },
];

const TourFilters = ({setToursList}) => {
  // Price Ranges
  const [rangePrices, setRangePrices] = useState([0, 50000]);
  // Number Of Days
  const [numberOfDays, setNumberOfDays] = useState([]);
  // Active Filters
  const [activeFilters, setActiveFilter] = useState({
    dates: false,
    price: false,
    days: false,
  });

  // Home Page Filter
  const homeFilters = useSelector(getHomeSearchFilter);

  // dispatch
  const dispatch = useDispatch();

  const tours = useSelector(getToursList);

  const toursStartDate = useSelector(getStartingDate);
  const toursEndDate = useSelector(getEndingDate);

  const [startDate, setStartDate] = useState(new Date(toursStartDate));
  const [endDate, setEndDate] = useState(new Date(toursEndDate));

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const filterTours = (filter) => {
    const [start, end] = rangePrices;
    const filteredTours = filterToursList({
      filterByStartDate: startDate,
      filterByEndDate: endDate,
      filterByPrice: {
        start,
        end,
      },
      filterByNumberOfDays: numberOfDays,
      list: tours,
    });
    setToursList(filteredTours);
    setActiveFilter({...activeFilters, [filter]: true});
  };

  useEffect(() => {
    if (location !== '') {
      const {location, datesRange} = homeFilters;
      const {startDate, endDate} = datesRange;
      const filteredTours = filterToursList({
        location,
        filterByStartDate: startDate,
        filterByEndDate: endDate,
        list: tours,
      });
      setToursList(filteredTours);
      setActiveFilter({...activeFilters, dates: true});
    }
    return () =>
      dispatch(
        setHomeSearchFilter({
          filters: {
            location: '',
            datesRange: {startDate: new Date(), endDate: new Date()},
            guests: {
              adults: 1,
              children: 0,
              infants: 0,
            },
          },
        })
      );
  }, [homeFilters]);

  const renderXClear = (filter) => {
    return (
      <span
        onClick={() => {
          if (filter == 'dates') {
            setStartDate(new Date(toursStartDate));
            setEndDate(new Date(toursEndDate));
            setToursList(
              filterToursList({
                filterByPrice: {
                  start: rangePrices[0],
                  end: rangePrices[1],
                },
                filterByNumberOfDays: numberOfDays,
                list: tours,
              })
            );
          }
          if (filter == 'price') {
            setRangePrices([0, 200000]);
            setToursList(
              filterToursList({
                filterByNumberOfDays: numberOfDays,
                filterByStartDate: startDate,
                filterByEndDate: endDate,
                list: tours,
              })
            );
          }
          if (filter == 'days') {
            setNumberOfDays([]);
            setToursList(
              filterToursList({
                filterByPrice: {
                  start: rangePrices[0],
                  end: rangePrices[1],
                },
                filterByStartDate: startDate,
                filterByEndDate: endDate,
                list: tours,
              })
            );
          }
          setActiveFilter({...activeFilters, [filter]: false});
        }}
        className='w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-3 cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-3 w-3'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </span>
    );
  };

  const renderDatesFilter = () => {
    return (
      <Popover className='p-1 w-full relative w-full md:w-auto'>
        {({open, close}) => (
          <>
            <Popover.Button
              className={`w-full flex items-center justify-center px-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-6000 focus:outline-none ${
                open ? '!border-primary-500 ' : ''
              } ${
                activeFilters?.dates == true
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : ''
              }`}
            >
              <span>
                {toursEndDate
                  ? `${
                      startDate
                        ? startDate.toLocaleString('en-US', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          })
                        : 'October 12, 1999'
                    } - ${
                      endDate
                        ? endDate.toLocaleString('en-US', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          })
                        : 'October 12, 1999'
                    }`
                  : 'Departure Dates'}
              </span>
              {activeFilters?.dates == true ? (
                renderXClear('dates')
              ) : (
                <i className='las la-angle-down ml-2'></i>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-3xl'>
                <div className='overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700'>
                  <div className='relative flex flex-col px-5 py-6 space-y-5'>
                    <DatePicker
                      selected={startDate}
                      onChange={(dates) => onChangeDate(dates)}
                      startDate={startDate}
                      minDate={new Date()}
                      endDate={endDate}
                      selectsRange
                      monthsShown={2}
                      showPopperArrow={false}
                      inline
                      renderCustomHeader={(p) => (
                        <DatePickerCustomHeaderTwoMonth {...p} />
                      )}
                      renderDayContents={(day, date) => (
                        <DatePickerCustomDay dayOfMonth={day} date={date} />
                      )}
                    />
                  </div>
                  <div className='p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between'>
                    <ButtonThird
                      onClick={() => {
                        close();
                      }}
                      sizeClass='px-4 py-2 sm:px-5'
                    >
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={() => {
                        // filterToursByDates();
                        filterTours('dates');
                        close();
                      }}
                      sizeClass='px-4 py-2 sm:px-5'
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

  const renderTabsTimeOfDay = () => {
    return (
      <Popover className='p-1 relative w-1/2 md:w-auto'>
        {({open, close}) => (
          <>
            <Popover.Button
              className={`w-full flex items-center justify-center px-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-6000 focus:outline-none ${
                open ? '!border-primary-500 ' : ''
              } ${
                activeFilters?.days == true
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : ''
              }`}
            >
              <span>Number Of Days</span>
              {activeFilters?.days == true ? (
                renderXClear('days')
              ) : (
                <i className='las la-angle-down ml-2'></i>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md'>
                <div className='overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900   border border-neutral-200 dark:border-neutral-700'>
                  <div className='relative flex flex-col px-5 py-6 space-y-5'>
                    {defaultDays.map((item) => (
                      <div key={item.name} className=''>
                        <Checkbox
                          name={item.name}
                          label={item.name}
                          defaultChecked={numberOfDays.includes(item.value)}
                          onChange={(checked) => {
                            if (checked)
                              setNumberOfDays([...numberOfDays, item.value]);
                            else {
                              setNumberOfDays(
                                numberOfDays.filter(
                                  (number) => number !== item.value
                                )
                              );
                            }
                          }}
                          subLabel={item.description}
                        />
                      </div>
                    ))}
                  </div>
                  <div className='p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between'>
                    <ButtonThird onClick={close} sizeClass='px-4 py-2 sm:px-5'>
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={() => {
                        filterTours('days');
                        close();
                      }}
                      sizeClass='px-4 py-2 sm:px-5'
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

  const renderTabsPriceRage = () => {
    return (
      <Popover className='p-1 relative w-1/2 md:w-auto'>
        {({open, close}) => (
          <>
            <Popover.Button
              className={`w-full flex items-center justify-center px-4 py-2 text-sm rounded-full border ${
                activeFilters?.price == true
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : ''
              } focus:outline-none `}
            >
              <span>
                {`Rs.${convertNumbThousand(
                  rangePrices[0]
                )} - Rs.${convertNumbThousand(rangePrices[1])}`}{' '}
              </span>

              {activeFilters?.price == true ? (
                renderXClear('price')
              ) : (
                <i className='las la-angle-down ml-2'></i>
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 '>
                <div className='overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700'>
                  <div className='relative flex flex-col px-5 py-6 space-y-8'>
                    <div className='space-y-5'>
                      <span className='font-medium'>Price per day</span>
                      <Slider
                        range
                        min={0}
                        max={200000}
                        defaultValue={[rangePrices[0], rangePrices[1]]}
                        allowCross={false}
                        onChange={(e) => setRangePrices(e)}
                      />
                    </div>

                    <div className='flex justify-between space-x-5'>
                      <div>
                        <label
                          htmlFor='minPrice'
                          className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'
                        >
                          Min price
                        </label>
                        <div className='mt-1 relative rounded-md'>
                          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                            <span className='text-neutral-500 sm:text-sm'>
                              Rs.
                            </span>
                          </div>
                          <input
                            type='text'
                            name='minPrice'
                            disabled
                            id='minPrice'
                            className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900'
                            value={rangePrices[0]}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor='maxPrice'
                          className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'
                        >
                          Max price
                        </label>
                        <div className='mt-1 relative rounded-md'>
                          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                            <span className='text-neutral-500 sm:text-sm'>
                              Rs.
                            </span>
                          </div>
                          <input
                            type='text'
                            disabled
                            name='maxPrice'
                            id='maxPrice'
                            className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-3 sm:text-sm border-neutral-200 rounded-full text-neutral-900'
                            value={rangePrices[1]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between'>
                    <ButtonThird onClick={close} sizeClass='px-4 py-2 sm:px-5'>
                      Clear
                    </ButtonThird>
                    <ButtonPrimary
                      onClick={() => {
                        filterTours('price');
                        close();
                      }}
                      sizeClass='px-4 py-2 sm:px-5'
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
    <div className=''>
      <div className='flex flex-wrap'>
        {renderDatesFilter()}
        {renderTabsPriceRage()}
        {renderTabsTimeOfDay()}
      </div>
      {/* <div className="flex lg:hidden space-x-4">{renderTabMobileFilter()}</div> */}
    </div>
  );
};

export default TourFilters;
