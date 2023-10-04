import { ProjectType } from '@/utils/constants';
import React from 'react';
import Image from 'next/image';

export interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCardSmall = ({ project }: ProjectCardProps) => {
  const { thumbnail, name, tags, codeUrl, liveUrl } = project;
  return (
    <div className='tablet:col-span-6  desktop:col-span-4 col-span-12 '>
      <div className='aspect-project-card  relative w-full'>
        <Image alt={`${name} project thumbnail`} src={thumbnail} className=' object-cover' fill />
      </div>

      <div>
        <span className='mb-[7px] mt-5 block text-customized-s text-white'>{name}</span>
        <ul className='mb-5 flex flex-wrap gap-2 text-customized-xs text-light-grey'>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className='flex text-customized-xs text-white'>
          <a href={liveUrl} target='_blank' className='link__underline relative mr-8 block w-fit'>
            VIEW PROJECT
          </a>
          <a href={codeUrl} target='_blank' className='link__underline relative block w-fit'>
            VIEW CODE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSmall;
