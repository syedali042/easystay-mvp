import Heading from '@/shared/Heading';
import Image from 'next/image';
import React from 'react';

const FOUNDER_DEMO = [
  {
    id: '1',
    name: `Syed Waqar Ul Hassan`,
    job: 'Chief Executive Officer',
    avatar: '/team/ceo1.jpg',
  },
  {
    id: '4',
    name: `Syed Intezar Madni`,
    job: 'Co-founder and Legal Advisor',
    avatar: '/team/legal-advisor.jpg',
  },
  {
    id: '3',
    name: `Syed Aqil Kazmi`,
    job: 'Co-founder, Director Planning',
    avatar:
      'https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: `Syed Muhammad Ali`,
    job: 'Co-Founder, Chief Strategy Officer',
    avatar: '/team/strategy-advisor.jpg',
  },
];

const SectionFounder = () => {
  return (
    <div className='nc-SectionFounder relative'>
      <Heading
        desc='We’re impartial and independent, and every day we organize distinctive,
          experiences & tour plans'
      >
        ⛱ Founder
      </Heading>
      <div className='grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8'>
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className='max-w-sm'>
            <div className='relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden'>
              <Image
                fill
                className=' object-cover'
                src={item.avatar}
                alt=''
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw'
              />
            </div>

            <h3 className='text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200'>
              {item.name}
            </h3>
            <span className='block text-sm text-neutral-500 sm:text-base dark:text-neutral-400'>
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
