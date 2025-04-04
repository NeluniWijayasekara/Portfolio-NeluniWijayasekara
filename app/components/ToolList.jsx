import React from 'react';
import Image from 'next/image';

const ToolList = ({ tools }) => {
  // Split tools into two groups
  const firstHalf = tools.slice(0, 5);
  const secondHalf = tools.slice(5);

  return (
    <div className='relative flex items-center justify-center'>
      {/* First group of tools */}
      <div className='absolute right-[-60px] sm:right-[-80px] top-1/2 transform-translate-y-1/2 p-4 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4 bg-white bg-opacity-90 rounded-lg shadow-lg hover:shadow-2xl border border-gray-200'>
        {firstHalf.map((tool, i) => (
          <div key={i} className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <Image 
              src={tool.icon} 
              alt={tool.name} 
              className='w-6 h-6 object-contain' 
              aria-label={`Icon for ${tool.name}`} 
              role="img"
            />
          </div>
        ))}
      </div>

      {/* Second group of tools (if more than 4) */}
      {secondHalf.length > 0 && (
        <div className='absolute left-[-60px] sm:left-[-80px] top-1/2 transform-translate-y-1/2 p-4 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-5 bg-white bg-opacity-90 rounded-lg shadow-lg hover:shadow-2xl border border-gray-200'>
          {secondHalf.map((tool, i) => (
            <div key={i} className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
              <Image 
                src={tool.icon} 
                alt={tool.name} 
                className='w-6 h-6 object-contain' 
                aria-label={`Icon for ${tool.name}`} 
                role="img"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolList;
