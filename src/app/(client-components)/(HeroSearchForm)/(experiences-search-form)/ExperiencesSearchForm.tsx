import React, {FC} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {HomeSearchFormSchema} from '@/schemas/general';
import LocationInput from '../LocationInput';
import GuestsInput from '../GuestsInput';
import ExperiencesDateSingleInput from './ExperiencesDateSingleInput';
import {useDispatch} from 'react-redux';
import {setHomeSearchFilter} from '@/redux/slices/tours';
import {useRouter} from 'next/navigation';

export interface ExperiencesSearchFormProps {}

const ExperiencesSearchForm: FC<ExperiencesSearchFormProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const defaultValues = {
    location: '',
    datesRange: {
      startDate: new Date(),
      endDate: new Date(),
    },
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
    },
  };

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues,
    resolver: yupResolver(HomeSearchFormSchema),
  });

  const values = watch();

  const onSubmit = (filters) => {
    dispatch(setHomeSearchFilter({filters}));
    router.push('/tours');
  };

  console.log(errors);
  const renderForm = () => {
    return (
      <form
        action='javascript://'
        onSubmit={handleSubmit(onSubmit)}
        className='w-full relative mt-8 flex flex-col md:flex-row  rounded-3xl md:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 '
      >
        <LocationInput
          value={values?.location}
          setValue={(value) => setValue('location', value)}
          className='flex-[1.5]'
        />
        <div className='self-center border-r border-slate-200 dark:border-slate-700 h-8'></div>
        <ExperiencesDateSingleInput
          value={values?.datesRange}
          setValue={(value) => setValue('datesRange', value)}
          className='flex-1'
        />
        <div className='self-center border-r border-slate-200 dark:border-slate-700 h-8'></div>
        <GuestsInput
          values={values?.guests}
          setValue={(value) => setValue('guests', value)}
          className='flex-1'
        />
      </form>
    );
  };

  return renderForm();
};

export default ExperiencesSearchForm;
