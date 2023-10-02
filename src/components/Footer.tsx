import { PERSONAL_INFORMATION } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-dark-grey'>
      <div>
        <Link href='/' title='Home page' className='text-customized-m text-white'>
          {PERSONAL_INFORMATION.firstName + PERSONAL_INFORMATION.lastName}
        </Link>
        <ul></ul>
      </div>
    </footer>
  );
};

export default Footer;
