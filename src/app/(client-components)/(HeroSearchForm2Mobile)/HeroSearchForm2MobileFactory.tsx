'use client';

import React from 'react';
import {PathName} from '@/routers/types';
import HeroSearchForm2Mobile from './HeroSearchForm2Mobile';
import {usePathname} from 'next/navigation';

const PAGES_REAL_ESTATE: PathName[] = ['/', '/', '/'];

const HeroSearchForm2MobileFactory = () => {
  return <HeroSearchForm2Mobile />;
};

export default HeroSearchForm2MobileFactory;
