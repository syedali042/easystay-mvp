import LikeSaveBtns from '@/components/LikeSaveBtns';
import StartRating from '@/components/StartRating';
import {getTourById} from '@/redux/slices/tours';
import Avatar from '@/shared/Avatar';
import Badge from '@/shared/Badge';
import {getDifferenceOfDaysBetweenTwoDates} from '@/utils/common';
import {useSelector} from 'react-redux';

const TourIntro = ({tourId}) => {
  const tour = useSelector(getTourById({tourId}));
  const randomRatting = Math.floor(Math.random() * 21 + 30) / 10;
  const randomReviewCount = Math.floor(Math.random() * 91) + 10;
  return (
    <div className="listingSection__wrap !space-y-6">
      {/* 1 */}
      <div className="flex justify-between items-center">
        <Badge color="pink" name={tour?.type} />
        <LikeSaveBtns isLike={true} />
      </div>

      {/* 2 */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
        {tour?.title}
      </h2>

      {/* 3 */}
      <div className="flex items-center space-x-4">
        <StartRating point={randomRatting} reviewCount={randomReviewCount} />
        <span>·</span>
        <div style={{transform: 'translateY(5%)'}}>
          <i className="las la-calendar text-2xl"></i>
        </div>
        <div style={{transform: 'translate(-10%, -7%)'}}>
          <span>
            {' '}
            {new Date(tour?.departure?.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}{' '}
            -{' '}
            {new Date(tour?.arrival?.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>

      {/* 4 */}
      <div className="flex items-center">
        <Avatar
          userName={tour?.host}
          hasChecked
          sizeClass="h-10 w-10"
          radius="rounded-full"
        />
        <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Hosted by{' '}
          <span className="text-neutral-900 dark:text-neutral-200 font-medium">
            {tour?.host}
          </span>
        </span>
      </div>

      {/* 5 */}
      <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

      {/* 6 */}
      <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
          <i className="las la-clock text-2xl"></i>
          <span className="">
            {getDifferenceOfDaysBetweenTwoDates({
              endDate: tour?.arrival?.date,
              startDate: tour?.departure?.date,
            })}
            {'-'}
            Days
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
          <i className="las la-route text-2xl"></i>
          <span className="">
            {tour?.departure?.from} - {tour?.arrival?.from}
          </span>
        </div>
      </div>
    </div>
  );
};
export default TourIntro;
