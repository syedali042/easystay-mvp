import React from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import HeaderFilter from './HeaderFilter';
import {getToursList} from '@/redux/slices/tours';
import {useSelector} from 'react-redux';
import ToursCard from './ToursCard';
import {useRouter} from 'next/navigation';

const SectionGridFeaturePlaces = ({
  heading = 'Featured experiences to gain',
  subHeading = 'Popular experiences to gain that EasyStay recommends for you',
  tabs = ['New York', 'Tokyo', 'Paris', 'London'],
}) => {
  const tours = useSelector(getToursList);
  const router = useRouter();
  const renderCard = (tour) => {
    return <ToursCard key={tour.id} data={tour} />;
  };

  return (
    <div className='nc-SectionGridFeaturePlaces relative'>
      <HeaderFilter
        tabActive={'New York'}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
      />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        {tours?.filter((_, i) => i < 4)?.map((tour) => renderCard(tour))}
      </div>
      <div className='flex mt-16 justify-center items-center'>
        <ButtonPrimary onClick={() => router.push('/tours')}>
          Show me more
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeaturePlaces;
