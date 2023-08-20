'use client';
import React from 'react';
import PageAddListing1 from './PageAddListing1';
import PageAddListing2 from './PageAddListing2';
import PageAddListing3 from './PageAddListing3';
import PageAddListing4 from './PageAddListing4';
import PageAddListing5 from './PageAddListing5';
import PageAddListing6 from './PageAddListing6';
import PageAddListing7 from './PageAddListing7';

const Page = ({params, searchParams}) => {
  let ContentComponent = PageAddListing1;
  switch (parseInt(params.stepIndex)) {
    case 1:
      ContentComponent = PageAddListing1;
      break;
    case 2:
      ContentComponent = PageAddListing2;
      break;
    case 3:
      ContentComponent = PageAddListing3;
      break;
    case 4:
      ContentComponent = PageAddListing4;
      break;
    case 5:
      ContentComponent = PageAddListing5;
      break;
    case 6:
      ContentComponent = PageAddListing6;
      break;
    case 7:
      ContentComponent = PageAddListing7;
      break;

    default:
      ContentComponent = PageAddListing1;
      break;
  }

  return (
    <>
      <ContentComponent />
    </>
  );
};

export default Page;
