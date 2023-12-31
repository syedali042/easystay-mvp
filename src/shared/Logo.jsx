import React from 'react';
import Link from 'next/link';

const Logo = ({}) => {
  return (
    <Link
      href='/'
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0`}
    >
      <img className={`block w-40 md:w-48 `} src={'/logo.png'} alt='Logo' />
    </Link>
  );
};

export default Logo;
