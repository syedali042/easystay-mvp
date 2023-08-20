'use client';

import Logo from '@/shared/Logo';
import SocialsList1 from '@/shared/SocialsList1';
import {CustomLink} from '@/data/types';
import React from 'react';
import FooterNav from './FooterNav';

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: '1',
    title: 'Explore',
    menus: [
      {href: '#', label: 'Popular Destinations'},
      {href: '#', label: 'Featured Places'},
      {href: '#', label: 'Nearby Attractions'},
      {href: '#', label: 'Most Visited'},
    ],
  },
  {
    id: '2',
    title: 'Resources',
    menus: [
      {href: '#', label: 'Honeymon Plans'},
      {href: '#', label: 'Group Tours'},
      {href: '#', label: 'Custom Tours'},
      {href: '#', label: 'Get Quote'},
    ],
  },
  {
    id: '4',
    title: 'Forum',
    menus: [
      {href: '#', label: 'Discussion Forums'},
      {href: '#', label: 'Code of Conduct'},
      {href: '#', label: 'Privacy Policy'},
      {href: '#', label: 'Terms & COnditions'},
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />

      <div className="nc-Footer relative py-8  border-t border-neutral-200 dark:border-neutral-700">
        <div className="container ">
          <div className="flex justify-between items-center">
            <div className="">
              <Logo />
            </div>
            <div className="">
              <SocialsList1 className="flex items-center space-x-4" />
            </div>
          </div>
          {/* {widgetMenus.map(renderWidgetMenuItem)} */}
        </div>
      </div>
    </>
  );
};

export default Footer;
