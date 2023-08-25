'use client';
import React from 'react';
import BasicInfo from './BasicInfo';
import Images from './Images';

const Page = ({params, searchParams}) => {
  let ContentComponent = BasicInfo;
  switch (parseInt(params.stepIndex)) {
    case 1:
      ContentComponent = BasicInfo;
      break;
    case 2:
      ContentComponent = Images;
      break;
    default:
      ContentComponent = BasicInfo;
      break;
  }

  return (
    <>
      <ContentComponent />
    </>
  );
};

export default Page;
