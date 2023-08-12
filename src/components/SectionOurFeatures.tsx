import React, {FC} from 'react';
import rightImgPng from '@/images/our-features.png';
import Image, {StaticImageData} from 'next/image';
import Badge from '@/shared/Badge';

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: 'type1' | 'type2';
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = 'lg:py-14',
  rightImg = rightImgPng,
  type = 'type1',
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === 'type1' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === 'type1' ? 'lg:pl-16' : 'lg:pr-16'
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          BENnefits of
        </span>
        <h2 className="font-semibold text-4xl mt-5">Choosing EasyStay </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Memorable Trips" />
            <span className="block text-xl font-semibold">
              Unforgettable Experiences
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Easystay ensures that every traveler&apos;s journey is filled with
              unforgettable experiences. From hidden gems to iconic landmarks,
              they curate exceptional itineraries that leave a lasting
              impression
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Well-Trained Guides" />
            <span className="block text-xl font-semibold">Expert Guidance</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Easystay provides expert guidance throughout the entire travel
              process. Their knowledgeable and well-trained staff offer valuable
              insights, local tips, and personalized recommendations
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Security" />
            <span className="block text-xl font-semibold">
              Safety and Security
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              As a reputable tourism company Eaststay prioritizes the safety and
              security of their clients
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
