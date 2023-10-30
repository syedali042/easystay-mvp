import React from 'react';
import {
  setNewTourFieldValue,
  newTourFormValues as getTourValues,
} from '@/redux/slices/tours';
import {useDispatch} from '@/redux/store';
import ReactQuill from 'react-quill';
import {useSelector} from 'react-redux';

const PageAddListing6 = () => {
  const dispatch = useDispatch();
  const values = useSelector(getTourValues);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Tour Itinerary</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Write a complete plan of the journey from start day to end day showing
          the route and the places that the visitor will visit.
        </span>
      </div>
      <ReactQuill
        theme="snow"
        value={values?.description}
        onChange={(value) =>
          dispatch(setNewTourFieldValue({field: 'description', value}))
        }
      />
    </>
  );
};

export default PageAddListing6;
