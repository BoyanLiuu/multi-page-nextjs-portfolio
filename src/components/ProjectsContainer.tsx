import React from 'react';
import { PERSONAL_INFORMATION } from '@/utils/constants';
import Link from 'next/link';
import { PortfolioToggle, ProjectCardSmall } from './index';

const ProjectsContainer = () => {
  return (
    <section className='desktop:px-[160px] tablet:px-[80px] grid bg-dark-black px-4 py-20'>
      <div className='mb-10 flex items-center justify-between'>
        <h2 className='text-customized-m text-white'>Projects</h2>
        <div className='flex items-center'>
          <Link
            href='/projects'
            className='link__underline relative mr-10 text-customized-xs text-white'
          >
            View all
          </Link>
          <PortfolioToggle />
        </div>
      </div>
      <div className='grid grid-cols-12 gap-x-5 gap-y-[50px]'>
        {PERSONAL_INFORMATION.projects.map((project) => (
          <ProjectCardSmall key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;
