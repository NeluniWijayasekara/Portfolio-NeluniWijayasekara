// ToolList.jsx
import React from 'react';
import Image from 'next/image';

const ToolList = ({ tools }) => {
  return (
    <div className='absolute bottom-[-50px] left-0 w-full p-3 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-5'>
      {tools.map((tool, i) => (
        <div key={i} className='w-8 h-8'>
          <Image src={tool.icon} alt={tool.name} className='w-full h-full object-contain'/>
        </div>
      ))}
    </div>
  );
};

export default ToolList;
