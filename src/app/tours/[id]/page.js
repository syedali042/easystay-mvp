'use client';

import {getTourById} from '@/redux/slices/tours';
import {useSelector} from 'react-redux';
import Gallery from './Gallery';
import TourIntro from './Intro';
import InitializeReservation from './InitalizeReservation';
import TourItinerary from './Itinerary';
import TourIncludings from './Includings';
import TourExcludings from './Excludings';
import TourMap from './Map';
import TourPolicies from './Policies';

const TourDetails = ({params: {id}}) => {
  const tour = useSelector(getTourById({tourId: id}));
  return (
    <div className={`pt-4 container nc-ListingExperiencesDetailPage `}>
      <Gallery tourId={id} />
      <main className="relative z-10 mt-11 flex flex-col lg:flex-row ">
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:pr-10 lg:space-y-10 mb-8">
          <TourIntro tourId={id} />
          <TourItinerary tourId={id} />
          <TourIncludings tourId={id} />
          <TourExcludings tourId={id} />
          <TourMap tourId={id} />
          <TourPolicies />
        </div>
        <InitializeReservation />
      </main>
    </div>
  );
};
export default TourDetails;
