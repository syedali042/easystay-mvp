'use client';

import Logo from '@/shared/Logo';
import SocialsList1 from '@/shared/SocialsList1';
import React from 'react';
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <>
      <FooterNav />

      <div className='nc-Footer relative py-8  border-t border-neutral-200 dark:border-neutral-700'>
        <div className='container '>
          <div className='flex justify-between items-center'>
            <div className=''>
              <Logo />
            </div>
            <div className=''>
              <SocialsList1 className='flex items-center space-x-4' />
            </div>
          </div>
          {/* {widgetMenus.map(renderWidgetMenuItem)} */}
        </div>
      </div>
    </>
  );
};

export default Footer;
