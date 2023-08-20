import React, {FC, useEffect, useState, FormEvent} from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import Input from '@/shared/Input';
import {newTourFormValues, setNewTourFieldValue} from '@/redux/slices/tours';

import {useDispatch} from '@/redux/store';
import {useSelector} from 'react-redux';

const PageAddListing4 = () => {
  const renderExcluding = (text) => {
    return (
      <div className="flex items-center justify-between py-3">
        <span className="text-neutral-6000 dark:text-neutral-400 font-medium">
          {text}
        </span>
        <i
          onClick={() =>
            setExcludings(excludings.filter((rule) => rule !== text))
          }
          className="text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"
        ></i>
      </div>
    );
  };

  const values = useSelector(newTourFormValues);

  const [excludings, setExcludings] = useState(values?.excludings);

  const dispatch = useDispatch();
  const form = document.getElementsByName('excludingsForm')[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let {value} = document.getElementById('excludings');
      await setExcludings((pre) => [...pre, value]);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(
        setNewTourFieldValue({
          field: 'excludings',
          value: excludings,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [excludings]);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Tour Excludings </h2>
      </div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ----------- */}
        <div className=" border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="flow-root">
          <div className="-my-3 divide-y divide-neutral-100 dark:divide-neutral-800">
            {excludings.map((rule) => {
              return renderExcluding(rule);
            })}
          </div>
        </div>
        <form
          name="excludingsForm"
          action="javascript://"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-5">
            <Input className="!h-full" name="excludings" id="excludings" />
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

export default PageAddListing4;
