'use client';
import React, {FC} from 'react';
import Input from '@/shared/Input';
import Select from '@/shared/Select';
import FormItem from '../FormItem';
import {useDispatch, useSelector} from '@/redux/store';
import {setNewTourFieldValue, newTourFormValues} from '@/redux/slices/tours';

const PageAddListing1 = ({}) => {
  const dispatch = useDispatch();
  const values = useSelector(newTourFormValues);
  const onChange = (event) => {
    const {name, value} = event.target;
    dispatch(setNewTourFieldValue({field: name, value}));
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold">Choosing listing categories</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}

        <FormItem className="mt-8" label="Choose a tour type">
          <Select value={values?.type} name={'type'} onChange={onChange}>
            <option value="" disabled selected>
              ...
            </option>
            <option value="group">Group</option>
            <option value="honeymoon">Honeymoon</option>
          </Select>
        </FormItem>
        <FormItem label="Tour Title">
          <Input
            value={values?.title}
            placeholder="Title"
            name={'title'}
            onChange={onChange}
          />
        </FormItem>

        <FormItem label="Host Name">
          <Input
            value={values?.host}
            placeholder="Host"
            name={'host'}
            onChange={onChange}
          />
        </FormItem>
      </div>
    </div>
  );
};

export default PageAddListing1;
