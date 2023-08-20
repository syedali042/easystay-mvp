import React, {FC, useEffect, useState, FormEvent} from 'react';
import ButtonPrimary from '@/shared/ButtonPrimary';
import Input from '@/shared/Input';
import {newTourFormValues, setNewTourFieldValue} from '@/redux/slices/tours';

import {useDispatch} from '@/redux/store';
import {useSelector} from 'react-redux';

const PageAddListing3 = () => {
  const renderIncluding = (text) => {
    return (
      <div className="flex items-center justify-between py-3">
        <span className="text-neutral-6000 dark:text-neutral-400 font-medium">
          {text}
        </span>
        <i
          onClick={() =>
            setIncludings(includings.filter((rule) => rule !== text))
          }
          className="text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"
        ></i>
      </div>
    );
  };

  const values = useSelector(newTourFormValues);

  const [includings, setIncludings] = useState(values?.includings);

  const dispatch = useDispatch();
  const form = document.getElementsByName('includingsForm')[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let {value} = document.getElementById('includings');
      await setIncludings((pre) => [...pre, value]);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(
        setNewTourFieldValue({
          field: 'includings',
          value: includings,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [includings]);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Tour Includings </h2>
      </div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ----------- */}
        <div className=" border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="flow-root">
          <div className="-my-3 divide-y divide-neutral-100 dark:divide-neutral-800">
            {includings.map((rule) => {
              return renderIncluding(rule);
            })}
          </div>
        </div>
        <form
          name="includingsForm"
          action="javascript://"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-5">
            <Input className="!h-full" name="includings" id="includings" />
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

export default PageAddListing3;
