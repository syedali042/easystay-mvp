'use client';
import React from 'react';
import Label from '@/components/Label';
import Input from '@/shared/Input';
import Textarea from '@/shared/Textarea';
import ButtonPrimary from '@/shared/ButtonPrimary';
import SocialsList1 from '@/shared/SocialsList1';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ContactFormSchema} from '@/schemas/general';
import {createNewMessage} from '@/redux/slices/general';
import Swal from 'sweetalert2';
import {useDispatch} from 'react-redux';

const info = [
  {
    title: '🗺 ADDRESS',
    desc: '23-KM Main Ferozpur Road, Eden Gardens, Lahore',
  },
  {
    title: '💌 EMAIL',
    desc: 'info@easystay.com.pk',
  },
  {
    title: '☎ PHONE',
    desc: '92 345 4450507',
  },
];

const PageContact = ({}) => {
  const dispatch = useDispatch();
  const defaultValues = {
    name: '',
    email: '',
    message: '',
  };

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues,
    resolver: yupResolver(ContactFormSchema),
  });

  const values = watch();

  const onSubmit = (data) => {
    dispatch(createNewMessage(data));
    reset();
    Swal.fire({
      title: 'Success',
      text: "We've received your message, will come back to you soon!",
      icon: 'success',
    });
  };
  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className='mb-24 lg:mb-32'>
        <h2 className='my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center'>
          Contact
        </h2>
        <div className='container max-w-7xl mx-auto'>
          <div className='flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 '>
            <div className='max-w-sm space-y-8'>
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className='uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider'>
                    {item.title}
                  </h3>
                  <span className='block mt-2 text-neutral-500 dark:text-neutral-400'>
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className='uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider'>
                  🌏 SOCIALS
                </h3>
                <SocialsList1 className='mt-2' />
              </div>
            </div>
            <div>
              <form
                action='javascript://'
                onSubmit={handleSubmit(onSubmit)}
                className='grid grid-cols-1 gap-6'
              >
                <label className='block'>
                  <Label>Full name</Label>

                  <Input
                    value={values?.name}
                    onChange={({target: {value}}) => setValue('name', value)}
                    placeholder='Example Doe'
                    type='text'
                    className='mt-1'
                  />
                  <p className='contact-form-error'>{errors?.name?.message}</p>
                </label>
                <label className='block'>
                  <Label>Email address</Label>

                  <Input
                    value={values?.email}
                    type='email'
                    onChange={({target: {value}}) => setValue('email', value)}
                    placeholder='example@example.com'
                    className='mt-1'
                  />
                  <p className='contact-form-error'>{errors?.email?.message}</p>
                </label>
                <label className='block'>
                  <Label>Message</Label>

                  <Textarea
                    value={values?.message}
                    onChange={({target: {value}}) => setValue('message', value)}
                    className='mt-1'
                    rows={6}
                  />
                  <p className='contact-form-error'>
                    {errors?.message?.message}
                  </p>
                </label>
                <div>
                  <ButtonPrimary type='submit'>Send Message</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
