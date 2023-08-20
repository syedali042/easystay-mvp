'use client';

import React, {useEffect, useRef, useState} from 'react';
import Logo from '@/shared/Logo';
import useOutsideAlerter from '@/hooks/useOutsideAlerter';
import {usePathname} from 'next/navigation';
import ButtonSecondary from '@/shared/ButtonSecondary';
import {useRouter} from 'next/navigation';

let WIN_PREV_POSITION = 0;
if (typeof window !== 'undefined') {
  WIN_PREV_POSITION = window.pageYOffset;
}

const Header3 = ({className = ''}) => {
  const router = useRouter();
  const headerInnerRef = useRef(null);
  //
  const [showHeroSearch, setShowHeroSearch] = useState(null);
  //
  const [currentTab, setCurrentTab] = useState('Stays');

  //
  useOutsideAlerter(headerInnerRef, () => {
    setShowHeroSearch(null);
    setCurrentTab('Stays');
  });

  let pathname = usePathname();
  //

  useEffect(() => {
    setShowHeroSearch(null);
  }, [pathname]);

  // HIDDEN WHEN SCROLL EVENT
  useEffect(() => {
    window.addEventListener('scroll', handleEvent);
    return () => {
      window.removeEventListener('scroll', handleEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEvent = () => {
    window.requestAnimationFrame(handleHideSearchForm);
  };

  const handleHideSearchForm = () => {
    if (!document.querySelector('#nc-Header-3-anchor')) {
      return;
    }
    //
    let currentScrollPos = window.pageYOffset;
    if (
      WIN_PREV_POSITION - currentScrollPos > 100 ||
      WIN_PREV_POSITION - currentScrollPos < -100
    ) {
      setShowHeroSearch(null);
    } else {
      return;
    }
    WIN_PREV_POSITION = currentScrollPos;
  };

  //

  const renderButtonOpenHeroSearch = () => {
    return (
      <div
        className={`w-full relative flex items-center justify-between border border-neutral-200 dark:border-neutral-6000 rounded-full shadow hover:shadow-md transition-all ${
          showHeroSearch
            ? '-translate-x-0 translate-y-20 scale-x-[2.55] scale-y-[1.8] opacity-0 pointer-events-none invisible'
            : 'visible'
        }`}
      >
        <div className="flex items-center font-medium text-sm">
          <span
            onClick={() => router.push('/')}
            className="block pl-5 pr-4 cursor-pointer py-3"
          >
            Home
          </span>
          <span className="h-5 w-[1px] bg-neutral-300 dark:bg-neutral-700"></span>
          <span
            onClick={() => router.push('/destinations')}
            className="block px-4 cursor-pointer py-3 "
          >
            Destinations
          </span>
          <span className="h-5 w-[1px] bg-neutral-300 dark:bg-neutral-700"></span>

          <span
            onClick={() => router.push('/tours')}
            className="block px-4 cursor-pointer py-3 "
          >
            Tours
          </span>
          <span className="h-5 w-[1px] bg-neutral-300 dark:bg-neutral-700"></span>

          <span
            onClick={() => router.push('/about')}
            className="block px-4 cursor-pointer py-3 "
          >
            About
          </span>
          <span className="h-5 w-[1px] bg-neutral-300 dark:bg-neutral-700"></span>

          <span
            onClick={() => router.push('/contact')}
            className="block px-4 cursor-pointer py-3 "
          >
            Contact Us
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`nc-Header nc-Header-3 fixed z-40 top-0 inset-0 bg-black/30 dark:bg-black/50 transition-opacity will-change-[opacity] ${
          showHeroSearch ? 'visible' : 'invisible opacity-0 pointer-events-none'
        }`}
      ></div>
      {showHeroSearch && <div id="nc-Header-3-anchor"></div>}
      <header ref={headerInnerRef} className={`sticky top-0 z-40 ${className}`}>
        <div
          className={`bg-white dark:bg-neutral-900 absolute h-full inset-x-0 top-0 transition-transform will-change-[transform,opacity]
          ${showHeroSearch ? 'duration-75' : ''} 
          ${
            showHeroSearch
              ? currentTab === 'Cars' || currentTab === 'Flights'
                ? 'scale-y-[4.4]'
                : 'scale-y-[3.4]'
              : ''
          }`}
        ></div>
        <div className="relative px-4 lg:container h-[88px] flex">
          <div className="flex-1 flex justify-between">
            <div className="relative z-10 hidden md:flex flex-1 items-center">
              <Logo />
            </div>

            <div className="hidden md:flex relative z-10 flex-1 justify-end text-neutral-700 dark:text-neutral-100"></div>

            <div className="flex flex-[2] lg:flex-none mx-auto">
              <div className="flex-1 hidden lg:flex self-center">
                {renderButtonOpenHeroSearch()}
              </div>
              <div className="self-center flex-1 lg:hidden w-full max-w-lg mx-auto">
                <div className="flex-1 flex justify-between">
                  <div>
                    <Logo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header3;
