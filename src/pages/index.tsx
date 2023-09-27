
import { Body } from '@/components/MainContainer';
import { Header } from '@/components/Header';
import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='bg-background w-screen h-screen flex flex-col'>
        <Header/>
        <Body/>
    </div>
  );
}
