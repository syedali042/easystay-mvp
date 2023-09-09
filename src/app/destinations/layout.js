import React from 'react';
import BackgroundSection from '@/components/BackgroundSection';
import BgGlassmorphism from '@/components/BgGlassmorphism';
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories';

const Layout = ({children}) => {
  return (
    <div className={`nc-ListingStayPage relative `}>
      <BgGlassmorphism />

      {children}

      <div className="container overflow-hidden">
        {/* SECTION 1 */}
        <div className="relative py-16">
          {/* <BackgroundSection /> */}
          {/* <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
