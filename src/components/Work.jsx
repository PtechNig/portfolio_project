import React from 'react';

const Work = () => {
  return (
    <div className='bg-[url("/assets/work.svg")] bg-cover bg-center min-h-screen mb-20'>
      <div className='container mx-auto px-5 md:px-10 flex flex-col items-start'>
        
        {/* Header Section */}
        <div className='mt-20 md:mt-40 text-white flex flex-col'>
          <h1 className='font-bold text-3xl md:text-5xl mb-6 md:mb-10'>
            My recent <span className='text-[#00ADB5]'>works</span>
          </h1>

          {/* Category Filters */}
          <ul className='flex flex-wrap gap-3'>
            {['All', 'UI', 'UX', 'Web Design'].map((category) => (
              <li
                key={category}
                className='font-bold w-[8rem] py-2 px-4 rounded-md text-center cursor-pointer bg-[#00ADB5] border-[#00ADB5] border-2 hover:bg-transparent hover:text-[#00ADB5] transition duration-500'
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Work Showcase */}
        <div className='flex flex-wrap gap-5 mt-12 justify-center'>
          {['course-3.svg', 'course-2.svg', 'course-1.svg'].map((image, index) => (
            <div key={index} className='bg-[#393E4680] p-6 rounded-lg'>
              <img src={`/assets/${image}`} alt={`course-${index + 1}`} className='w-full max-w-[300px] md:max-w-[400px]' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
