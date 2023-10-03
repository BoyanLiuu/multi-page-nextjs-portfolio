import { PERSONAL_INFORMATION } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-dark-grey  pb-[60px] pt-10'>
      <div className='flex flex-col items-center'>
        <Link href='/' title='Home page' className='text-customized-m text-white'>
          {PERSONAL_INFORMATION.firstName + PERSONAL_INFORMATION.lastName}
        </Link>
        <ul className='mt-5 flex w-[160px] justify-between'>
          {PERSONAL_INFORMATION.socialMedias.map((media) => (
            <li key={media.name}>
              <Link href={media.link}>
                <Image alt={media.name} src={media.imgSrc} width={20} height={20} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
