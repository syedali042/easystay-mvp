import CardAuthorBox from '@/components/CardAuthorBox';
import Heading from '@/shared/Heading';
import {DEMO_AUTHORS} from '@/data/authors';
import {AuthorType} from '@/data/types';
import React, {FC} from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonSecondary from '@/shared/ButtonSecondary';

export interface SectionGridAuthorBoxProps {
  className?: string;
  authors?: AuthorType[];
  boxCard?: 'box1' | 'box2';
  gridClassName?: string;
}

const DEMO_DATA = DEMO_AUTHORS.filter((_, i) => i < 5);

const SectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
  className = '',
  authors = DEMO_DATA,
  boxCard = 'box1',
  gridClassName = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ',
}) => {
  return (
    <div
      className={`nc-SectionGridAuthorBox relative ${className}`}
      data-nc-id="SectionGridAuthorBox"
    >
      <Heading desc="Rating based on customer reviews" isCenter>
        Meet our team
      </Heading>
      <div className={`grid gap-6 md:gap-8 ${gridClassName}`}>
        {authors.map((author, index) => (
          <CardAuthorBox
            index={index < 3 ? index + 1 : undefined}
            key={author.id}
            author={author}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionGridAuthorBox;
