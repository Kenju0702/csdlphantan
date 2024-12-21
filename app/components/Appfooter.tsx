'use client'
import React from 'react';

export const AppFooter: React.FC = () => {
  return <div className='text-center text-black bg-gray-500 h-12 p-4'>© {new Date().getFullYear()} My Application. All Rights Reserved.</div>;
};
