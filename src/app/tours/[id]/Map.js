import {getTourById} from '@/redux/slices/tours';
import {useSelector} from 'react-redux';

const TourMap = ({tourId}) => {
  const tour = useSelector(getTourById({tourId}));
  return (
    <div className="listingSection__wrap">
      {/* HEADING */}
      <div>
        <h2 className="text-2xl font-semibold">Location</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          {tour?.map?.fullAddress}
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

      {/* MAP */}
      <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
        <div className="rounded-xl overflow-hidden z-0">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&q=${tour?.arrival?.from}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default TourMap;
