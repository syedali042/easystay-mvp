import React from 'react';
import SectionSubscribe2 from '@/components/SectionSubscribe2';
import Label from '@/components/Label';
import Input from '@/shared/Input';
import Textarea from '@/shared/Textarea';
import ButtonPrimary from '@/shared/ButtonPrimary';
import SocialsList1 from '@/shared/SocialsList1';

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
              <form className='grid grid-cols-1 gap-6' action='#' method='post'>
                <label className='block'>
                  <Label>Full name</Label>

                  <Input
                    placeholder='Example Doe'
                    type='text'
                    className='mt-1'
                  />
                </label>
                <label className='block'>
                  <Label>Email address</Label>

                  <Input
                    type='email'
                    placeholder='example@example.com'
                    className='mt-1'
                  />
                </label>
                <label className='block'>
                  <Label>Message</Label>

                  <Textarea className='mt-1' rows={6} />
                </label>
                <div>
                  <ButtonPrimary type='submit'>Send Message</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className='container'>
        <SectionSubscribe2 className='pb-24 lg:pb-32' />
      </div>
    </div>
  );
};

export default PageContact;
