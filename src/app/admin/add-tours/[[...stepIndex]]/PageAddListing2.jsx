'use client';
import {MapPinIcon} from '@heroicons/react/24/solid';
import LocationMarker from '@/components/AnyReactComponent/LocationMarker';
import Label from '@/components/Label';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import React, {FC, useState, useEffect} from 'react';
import ButtonSecondary from '@/shared/ButtonSecondary';
import Input from '@/shared/Input';
import Select from '@/shared/Select';
import FormItem from '../FormItem';
import {useDispatch, useSelector} from '@/redux/store';

import {setNewTourSubFieldValue, newTourFormValues} from '@/redux/slices/tours';

const containerStyle = {
  width: '100%',
  height: '400px',
};
const PageAddListing2 = ({}) => {
  const dispatch = useDispatch();
  const values = useSelector(newTourFormValues);
  const onChange = (event) => {
    const {name, value} = event.target;
  };

  return (
    <>
      <h2 className="text-2xl font-semibold">Tour Departure & Arrival </h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-4">
        {/* ITEM */}
        <p className="text-lg font-semibold">Departure</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
          <FormItem label="Date">
            <Input
              value={values?.departure?.date}
              type="date"
              onChange={(event) => {
                const {value} = event.target;
                dispatch(
                  setNewTourSubFieldValue({
                    field: 'departure',
                    subField: 'date',
                    value,
                  })
                );
              }}
            />
          </FormItem>
          <FormItem label="From">
            <Input
              value={values?.departure?.from}
              onChange={(event) => {
                const {value} = event.target;
                dispatch(
                  setNewTourSubFieldValue({
                    field: 'departure',
                    subField: 'from',
                    value,
                  })
                );
              }}
            />
          </FormItem>
        </div>
        <hr />
        <p className="text-lg font-semibold">Arrival</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
          <FormItem label="Date">
            <Input
              value={values?.arrival?.date}
              type="date"
              onChange={(event) => {
                const {value} = event.target;
                dispatch(
                  setNewTourSubFieldValue({
                    field: 'arrival',
                    subField: 'date',
                    value,
                  })
                );
              }}
            />
          </FormItem>
          <FormItem label="From">
            <Input
              value={values?.arrival?.from}
              onChange={(event) => {
                const {value} = event.target;
                dispatch(
                  setNewTourSubFieldValue({
                    field: 'arrival',
                    subField: 'from',
                    value,
                  })
                );
              }}
            />
          </FormItem>
        </div>

        <FormItem label="Destination Full Address">
          <Input
            placeholder="..."
            value={values?.map?.fullAddress}
            onChange={(event) => {
              const {value} = event.target;
              dispatch(
                setNewTourSubFieldValue({
                  field: 'map',
                  subField: 'fullAddress',
                  value,
                })
              );
            }}
          />
        </FormItem>
      </div>
    </>
  );
};

export default PageAddListing2;
