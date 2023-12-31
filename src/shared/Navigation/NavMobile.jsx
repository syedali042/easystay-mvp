'use client';

import React from 'react';
import ButtonClose from '@/shared/ButtonClose';
import Logo from '@/shared/Logo';
import {Disclosure} from '@headlessui/react';

const MORE_LINKS = [
  {
    id: '1',
    name: 'About Us',
    href: '/about',
  },
  {
    id: '1',
    name: 'Contact Us',
    href: '/contact',
  },
  {
    id: '1',
    name: 'Privacy Policy',
    href: '/contact',
  },
  {
    id: '1',
    name: 'Terms & Conditions',
    href: '/contact',
  },
];

const NavMobile = ({data = MORE_LINKS, onClickClose}) => {
  const _renderItem = (item, index) => {
    return (
      <Disclosure
        key={item.id}
        as='li'
        className='text-neutral-900 dark:text-white'
      >
        <Link
          className='flex w-full px-4 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg'
          href={{
            pathname: item.href || undefined,
          }}
        >
          <span
            className={`py-2.5 pr-3 ${!item.children ? 'block w-full' : ''}`}
          >
            {item.name}
          </span>
        </Link>
      </Disclosure>
    );
  };

  return (
    <div className='overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800'>
      <div className='py-6 px-5'>
        <Logo />
        <div className='flex flex-col mt-5 text-neutral-700 dark:text-neutral-300 text-sm'>
          <span>
            Experience Pakistan&apos;s Enchanting Beauty: Where Adventure Meets
            Serenity. Discover the Unexplored Gems of the East
          </span>
        </div>
        <span className='absolute right-2 top-2 p-1'>
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className='flex flex-col py-6 px-2 space-y-1'>
        {data.map(_renderItem)}
      </ul>
    </div>
  );
};

export default NavMobile;
