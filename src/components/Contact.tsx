import React from 'react';

const Contact = () => {
  return (
    <section className='bg-dark-grey px-4 pb-[87px] pt-[60px]'>
      <div>
        <div>
          <h2 className='mb-5 text-customized-l text-white'>Contact</h2>
          <p className='mb-[50px] text-base font-medium leading-[26px] text-light-grey'>
            I would love to hear about your project and how I could help. Please fill in the form,
            and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className='flex flex-col'>
          <form>
            <div>
              <input
                name='name'
                type='name'
                id='name'
                placeholder='NAME'
                className='contact__input'
              />
            </div>
            <div>
              <input
                name='email'
                type='email'
                id='email'
                placeholder='EMAIL'
                className='contact__input'
              />
            </div>
            <textarea
              name='message'
              id='message'
              placeholder='MESSAGE'
              rows={5}
              className='mb-8 h-[107px] w-full appearance-none border-b-[1px] border-b-white bg-transparent pl-6 outline-none'
            ></textarea>
          </form>

          <button className=' link__underline relative w-fit self-end text-base font-bold leading-[26px] tracking-[2.29px] text-white '>
            SEND MESSAGE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
