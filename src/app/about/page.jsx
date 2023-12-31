import rightImg from '@/images/about-hero-right.png';
import React from 'react';
import SectionFounder from './SectionFounder';
import SectionHero from './SectionHero';
import BgGlassmorphism from '@/components/BgGlassmorphism';
import BackgroundSection from '@/components/BackgroundSection';
import SectionClientSay from '@/components/SectionClientSay';
import SectionSubscribe2 from '@/components/SectionSubscribe2';

const PageAbout = ({}) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className='container py-16 lg:py-28 space-y-16 lg:space-y-28'>
        <SectionHero
          rightImg={rightImg}
          heading='👋 About Us.'
          btnText=''
          subHeading="
Discover the essence of Pakistan with us - the leading tourism company in the nation. Embark on a journey where vibrant cultures, breathtaking landscapes, and thrilling adventures await. Our expertly crafted itineraries cater to all your desires, from ancient wonders to adrenaline-fueled escapades. With seamless planning and authentic experiences, we're your gateway to Pakistan's hidden gems. Come, explore, and let us redefine your travel story."
        />

        <SectionFounder />
        <div className='relative py-16'>
          <BackgroundSection />
          <SectionClientSay />
        </div>

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAbout;
