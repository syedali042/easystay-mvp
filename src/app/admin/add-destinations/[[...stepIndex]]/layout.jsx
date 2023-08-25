'use client';
import React from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonSecondary from '@/shared/ButtonSecondary';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/navigation';
import {createNewDestination} from '@/redux/slices/destinations';

const CommonLayout = ({children, params}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const index = Number(params.stepIndex) || 1;
  const nextHref =
    index < 2
      ? `/admin/add-destinations/${index + 1}`
      : `/admin/add-destinations/${1}`;
  const backtHref =
    index > 1
      ? `/admin/add-destinations/${index - 1}`
      : `/admin/add-destinations/${1}`;
  const nextBtnText = index > 1 ? 'Publish Destination' : 'Continue';
  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
    >
      <div className="space-y-11">
        <div>
          <span className="text-4xl font-semibold">{index}</span>{' '}
          <span className="text-lg text-neutral-500 dark:text-neutral-400">
            / 2
          </span>
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap ">{children}</div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          <ButtonSecondary href={backtHref}>Go back</ButtonSecondary>
          {index < 2 ? (
            <ButtonPrimary href={nextHref}>
              {nextBtnText || 'Continue'}
            </ButtonPrimary>
          ) : (
            <ButtonPrimary
              onClick={async () => {
                await dispatch(createNewDestination());
                router.push(`/admin/add-destinations/1`);
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
