'use client';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getTourById} from '@/redux/slices/tours';

const Gallery = ({tourId}) => {
  const tour = useSelector(getTourById({tourId}));
  const [active, setActive] = useState(tour?.photos[0]);

  return (
    <header className="rounded-md sm:rounded-xl">
      <div className="relative grid grid-cols-4 gap-1 sm:gap-2">
        <div className="col-span-3 row-span-3 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer">
          <Image
            alt="photo 1"
            fill
            className="object-cover  rounded-md sm:rounded-xl"
            src={active}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
          <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
        </div>
        {tour?.photos
          .filter((_, i) => _ != active)
          .map((item, index) => (
            <div
              key={index}
              className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                index >= 2 ? 'block' : ''
              }`}
              onClick={() => setActive(item)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  alt="photos"
                  fill
                  className="object-cover w-full h-full rounded-md sm:rounded-xl "
                  src={item || ''}
                  sizes="400px"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
          ))}
      </div>
    </header>
  );
};
export default Gallery;
