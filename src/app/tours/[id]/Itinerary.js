import {getTourById} from '@/redux/slices/tours';
import {useSelector} from 'react-redux';
import parse from 'html-react-parser';

const TourItinerary = ({tourId}) => {
  const tour = useSelector(getTourById({tourId}));
  return (
    <div className="listingSection__wrap">
      <h2 className="text-2xl font-semibold">Experience Description</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="text-neutral-6000 dark:text-neutral-300">
        {parse(tour?.description)}
      </div>
    </div>
  );
};
export default TourItinerary;
