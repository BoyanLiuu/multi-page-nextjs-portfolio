import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = () => {
  return (
    <Link href={''} className='block rounded-xl p-3'>
      <article className='blog__card flex w-full flex-col gap-4  tablet:flex-row'>
        <div className='aspect-blog-card  relative w-full '>
          <Image
            alt={`project thumbnail`}
            src='/images/thumbnail-project-1-large.webp'
            className=' object-cover'
            fill
          />
        </div>
        <div>
          <h3 className='blog__title mb-3 text-xl  font-bold transition'>
            People and websites that inspire (me)
          </h3>

          <span className='text-blue-grey  line-clamp-1 overflow-ellipsis text-base'>
            In life, we come across many people who leave a lasting impression on us...In life, we
            come across many people who leave a lasting impression on us...In life, we come across
            many people who leave a lasting impression on us...In life, we come across many people
            who leave a lasting impression on us...
          </span>
          <div>
            <div>
              <span>April 25</span>
            </div>
            <div>
              <span>4 min read</span>
            </div>
            <div>
              <span>488 views</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
