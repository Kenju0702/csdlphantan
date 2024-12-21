'use client';

import React from 'react';
import MyTable from '../components/table';
import { HeaderPage } from '../components/HeaderAll';
export default function ProductPage() {
  return (
    <div className='p-2'>
      <HeaderPage title="product" />

     <div className='p-10'><MyTable />kjkljlk</div> 
    </div>
  );
}
