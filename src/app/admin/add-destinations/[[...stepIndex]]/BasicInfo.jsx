'use client';
import React, {FC} from 'react';
import Input from '@/shared/Input';
import Select from '@/shared/Select';
import FormItem from '../FormItem';
import {useDispatch, useSelector} from '@/redux/store';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  setNewDestinationFieldValue,
  newDestinationFormValues,
} from '@/redux/slices/destinations';
import {DESTINATIONS_TYPES_ARRAY} from '@/constants/common';
const BasicInfo = ({}) => {
  const dispatch = useDispatch();
  const values = useSelector(newDestinationFormValues);
  const onChange = (event) => {
    const {name, value} = event.target;
    dispatch(setNewDestinationFieldValue({field: name, value}));
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold">Provide destination details</h2>
      <div className="w-14 pt-3 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}

        <FormItem className="mt-8" label="Choose a destination type">
          <Select value={values?.type} name={'type'} onChange={onChange}>
            <option value="" disabled selected>
              ...
            </option>
            {DESTINATIONS_TYPES_ARRAY.map((destination) => {
              const key = destination[0];
              const label = destination[1];
              const value = destination[2];
              return (
                <option key={key} value={value}>
                  {label}
                </option>
              );
            })}
          </Select>
        </FormItem>
        <FormItem label="Destination Title">
          <Input
            value={values?.title}
            placeholder="Title"
            name={'title'}
            onChange={onChange}
          />
        </FormItem>

        <div>
          <h4 className="text-lg font-semibold">Description</h4>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Write 2-3 paragraph about this destination for better user
            experience
          </span>
        </div>
        <ReactQuill
          theme="snow"
          value={values?.description}
          onChange={(value) =>
            dispatch(setNewDestinationFieldValue({field: 'description', value}))
          }
        />
      </div>
    </div>
  );
};

export default BasicInfo;
