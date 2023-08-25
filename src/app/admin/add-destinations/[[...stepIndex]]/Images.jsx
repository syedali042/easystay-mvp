import React, {useEffect, useState} from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import Input from '@/shared/Input';
import {
  newDestinationFormValues,
  setNewDestinationFieldValue,
} from '@/redux/slices/destinations';

import {useDispatch} from '@/redux/store';
import {useSelector} from 'react-redux';

const Images = () => {
  const renderExcluding = (src) => {
    return (
      <div className="flex items-center justify-between py-3">
        <img
          width={150}
          height={150}
          src={src}
          style={{borderRadius: '10px'}}
        />
        <i
          onClick={() => setPhotos(photos.filter((photo) => photo !== src))}
          className="text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"
        ></i>
      </div>
    );
  };

  const values = useSelector(newDestinationFormValues);

  const [photos, setPhotos] = useState(values?.photos);

  const dispatch = useDispatch();
  const form = document.getElementsByName('photosForm')[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let {value} = document.getElementById('photos');
      const completeLink = `https://drive.google.com/uc?export=view&id=${value}`;
      await setPhotos((pre) => [...pre, completeLink]);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(
        setNewDestinationFieldValue({
          field: 'photos',
          value: photos,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [photos]);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Destination Photos </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Upload two (2) images to google drive, give access to public & paste
          file id below.
        </span>
      </div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ----------- */}
        <div className=" border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="flow-root">
          <div className="-my-3 divide-y divide-neutral-100 dark:divide-neutral-800">
            {photos.map((rule) => {
              return renderExcluding(rule);
            })}
          </div>
        </div>
        <form name="photosForm" action="javascript://" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-5">
            <Input
              disabled={photos?.length == 4}
              className="!h-full"
              name="photos"
              id="photos"
            />
            <ButtonPrimary type="submit" className="flex-shrink-0">
              <i className="text-xl las la-plus"></i>
              <span className="ml-3">Add</span>
            </ButtonPrimary>
          </div>
        </form>
      </div>
    </>
  );
};

export default Images;
