import Label from '@/components/Label';
import React from 'react';

const FormItem = ({children, className = '', label, desc}) => {
  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <div className="mt-1">{children}</div>
      {desc && (
        <span className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">
          {desc}
        </span>
      )}
    </div>
  );
};

export default FormItem;
