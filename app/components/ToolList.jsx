import React from 'react';
import Image from 'next/image';

const ToolList = ({ tools }) => {
  return (
    <div className='absolute right-[-60px] top-1/2 transform -translate-y-1/2 p-4 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-5 bg-white bg-opacity-90 rounded-lg shadow-lg hover:shadow-2xl border border-gray-200'>
      {tools.map((tool, i) => (
        <div key={i} className='w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
          <Image src={tool.icon} alt={tool.name} className='w-6 h-6 object-contain' />
        </div>
      ))}
    </div>
  );
};

export default ToolList;
