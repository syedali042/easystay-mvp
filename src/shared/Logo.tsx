import React from 'react';
import logoImg from '@/images/logo.png';
import logoLightImg from '@/images/logo-light.png';
import LogoSvgLight from './LogoSvgLight';
import LogoSvg from './LogoSvg';
import Link from 'next/link';
import {StaticImageData} from 'next/image';

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0`}
    >
      <img className={`block w-40 md:w-48 `} src={'/logo.png'} alt="Logo" />
    </Link>
  );
};

export default Logo;
