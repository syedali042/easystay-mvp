import {getTourById} from '@/redux/slices/tours';
import {useSelector} from 'react-redux';

const TourIncludings = ({tourId}) => {
  const tour = useSelector(getTourById({tourId}));

  return (
    <div className="listingSection__wrap">
      <div>
        <h2 className="text-2xl font-semibold">Includes </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Included in the price
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
        {tour?.includings?.map((including) => (
          <div key={including} className="flex items-center space-x-3">
            <i className="las la-check-circle text-2xl"></i>
            <span>{including}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TourIncludings;
