import React from 'react';
import { PERSONAL_INFORMATION } from '@/utils/constants';

const Skills = () => {
  return (
    <section className='bg-dark-black grid grid-cols-12 gap-y-6 border-y-[1px] border-y-white py-10'>
      {PERSONAL_INFORMATION.skillsExperience.map(({ name, yearsOfExperience }) => (
        <div key={name} className='col-span-12 flex flex-col items-center '>
          <span className='text-customized-m block text-white'>{name}</span>
          <span className='text-customized-xs text-light-grey block'>{yearsOfExperience}</span>
        </div>
      ))}
    </section>
  );
};

export default Skills;
