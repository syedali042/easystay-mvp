import CardAuthorBox from '@/components/CardAuthorBox';
import Heading from '@/shared/Heading';
import {DEMO_AUTHORS} from '@/data/authors';
import React from 'react';

const DEMO_DATA = DEMO_AUTHORS.filter((_, i) => i < 5);

const SectionGridAuthorBox = ({
  className = '',
  authors = DEMO_DATA,
  gridClassName = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ',
}) => {
  return (
    <div
      className={`nc-SectionGridAuthorBox relative ${className}`}
      data-nc-id='SectionGridAuthorBox'
    >
      <Heading desc='Rating based on customer reviews' isCenter>
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
