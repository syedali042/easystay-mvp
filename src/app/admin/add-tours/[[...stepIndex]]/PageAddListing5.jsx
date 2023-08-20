import React from 'react';
import Input from '@/shared/Input';
import FormItem from '../FormItem';
import {newTourFormValues, setNewTourSubFieldValue} from '@/redux/slices/tours';
import {useDispatch} from '@/redux/store';
import {useSelector} from 'react-redux';
const PageAddListing5 = () => {
  const dispatch = useDispatch();
  const values = useSelector(newTourFormValues);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Tour Pricing</h2>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* For-Ali: Pricing can be more dynamic e.g. if tourists are in group of 5+ to cover universities, offices tours  */}
        {/* For-Ali: Multiple currencies can be added */}
        {/* ITEM */}
        <FormItem label="Price (per person)">
          <div className="relative">
            <Input
              value={values?.price?.person}
              type="number"
              className="!pr-10"
              placeholder="0.00"
              onChange={({target}) => {
                const {value} = target;
                dispatch(
                  setNewTourSubFieldValue({
                    field: 'price',
                    subField: 'person',
                    value,
                  })
                );
              }}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">PKR</span>
            </div>
          </div>
        </FormItem>
        {/* ----- */}
        {values?.type == 'group' && (
          <FormItem label="Price (per couple)">
            <div className="relative">
              <Input
                value={values?.price?.couple}
                type="number"
                className="!pr-10"
                placeholder="0.00"
                onChange={({target}) => {
                  const {value} = target;
                  dispatch(
                    setNewTourSubFieldValue({
                      field: 'price',
                      subField: 'couple',
                      value,
                    })
                  );
                }}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500">PKR</span>
              </div>
            </div>
          </FormItem>
        )}
        {/* ----- */}
      </div>
    </>
  );
};

export default PageAddListing5;
