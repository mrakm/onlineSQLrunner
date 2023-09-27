import * as React from 'react';
import { Button } from '../Button';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <div className='flex justify-between py-3 px-6 items-center w-full '>
       <p className='uppercase text-2xl'>BrandName</p>
       <Button>Documentation</Button>
    </div>
  );
}
