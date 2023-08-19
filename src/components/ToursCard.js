import React, {FC} from 'react';
import GallerySlider from '@/components/GallerySlider';
import StartRating from '@/components/StartRating';
import BtnLikeIcon from '@/components/BtnLikeIcon';
import SaleOffBadge from '@/components/SaleOffBadge';
import Badge from '@/shared/Badge';
import Link from 'next/link';
import {MapPinIcon} from '@heroicons/react/24/outline';
import {useRouter} from 'next/navigation';

const ToursCard = ({
  size = 'default',
  data,
  ratioClass = 'aspect-w-3 aspect-h-3',
}) => {
  const {
    photos,
    title,
    price: {person, couple},
    arrival: {from: destination},
    id,
  } = data;

  const router = useRouter();

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden ">
        <GallerySlider
          uniqueID={`ExperiencesCard_${id}`}
          ratioClass={ratioClass}
          galleryImgs={photos}
        />
        {/* <BtnLikeIcon isLiked={like} className="absolute right-3 top-3" /> */}
        {/* {saleOff && <SaleOffBadge className="absolute left-3 top-3" />} */}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div
        style={{cursor: 'pointer'}}
        onClick={() => router.push(`/tours/${id}`)}
        className={size === 'default' ? 'py-4 space-y-3' : 'p-3 space-y-1'}
      >
        <div className="space-y-2">
          <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
            {size === 'default' && <MapPinIcon className="w-4 h-4" />}
            <span className="">{destination}</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* {isAds && <Badge name="ADS" color="green" />} */}
            <h2
              className={` font-medium capitalize ${
                size === 'default' ? 'text-base' : 'text-base'
              }`}
            >
              <span className="line-clamp-1">{title}</span>
            </h2>
          </div>
        </div>
        <div className="border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <span className="text-base font-semibold">
            Rs.{person}
            {` `}
            {size === 'default' && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                /person
              </span>
            )}
          </span>{' '}
          <span className="text-base font-semibold">
            Rs.{couple}
            {` `}
            {size === 'default' && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                /couple
              </span>
            )}
          </span>
          {/* <StartRating reviewCount={reviewCount} point={reviewStart} /> */}
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-ExperiencesCard group relative`}>
      {renderSliderGallery()}
      {renderContent()}
    </div>
  );
};

export default ToursCard;
