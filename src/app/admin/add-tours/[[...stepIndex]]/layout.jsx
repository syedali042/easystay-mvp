'use client';
import React from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonSecondary from '@/shared/ButtonSecondary';
import {useDispatch} from 'react-redux';
import {createNewTour} from '@/redux/slices/tours';
import {useRouter} from 'next/navigation';

const CommonLayout = ({children, params}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const index = Number(params.stepIndex) || 1;
  const nextHref =
    index < 7 ? `/admin/add-tours/${index + 1}` : `/admin/add-tours/${1}`;
  const backtHref =
    index > 1 ? `/admin/add-tours/${index - 1}` : `/admin/add-tours/${1}`;
  const nextBtnText = index > 6 ? 'Publish Tour' : 'Continue';
  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
    >
      <div className='space-y-11'>
        <div>
          <span className='text-4xl font-semibold'>{index}</span>{' '}
          <span className='text-lg text-neutral-500 dark:text-neutral-400'>
            / 7
          </span>
        </div>

        {/* --------------------- */}
        <div className='listingSection__wrap '>{children}</div>

        {/* --------------------- */}
        <div className='flex justify-end space-x-5'>
          <ButtonSecondary href={backtHref}>Go back</ButtonSecondary>
          {index < 7 ? (
            <ButtonPrimary href={nextHref}>
              {nextBtnText || 'Continue'}
            </ButtonPrimary>
          ) : (
            <ButtonPrimary
              onClick={async () => {
                await dispatch(createNewTour());
                router.push(`/tours/add-tours/1`);
              }}
            >
              {nextBtnText || 'Continue'}
            </ButtonPrimary>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
