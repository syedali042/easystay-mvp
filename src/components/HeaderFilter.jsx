'use client';

import React, {useEffect, useState} from 'react';
import Heading from '@/shared/Heading';

const HeaderFilter = ({
  tabActive,
  subHeading = '',
  heading = 'Latest Articles 🎈',
}) => {
  const [tabActiveState, setTabActiveState] = useState(tabActive);

  useEffect(() => {
    setTabActiveState(tabActive);
  }, [tabActive]);

  return (
    <div className='flex flex-col mb-8 relative'>
      <Heading desc={subHeading}>{heading}</Heading>
      <div className='flex items-center justify-between'>
        {/* <Nav
          className="sm:space-x-2"
          containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"
        >
          {tabs.map((item, index) => (
            <NavItem
              key={index}
              isActive={tabActiveState === item}
              onClick={() => handleClickTab(item)}
            >
              {item}
            </NavItem>
          ))}
        </Nav>
        <span className="hidden sm:block flex-shrink-0">
          <ButtonSecondary href="/" className="!leading-none">
            <div className="flex items-center justify-center">
              <span>View all</span>
              <ArrowRightIcon className="w-5 h-5 ml-3" />
            </div>
          </ButtonSecondary>
        </span> */}
      </div>
    </div>
  );
};

export default HeaderFilter;
