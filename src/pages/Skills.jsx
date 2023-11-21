import React from 'react';
import {RiJavascriptFill} from 'react-icons/ri';

function Skills() {
  // Your component code
    return (
      <div className='flex flex-col items-center mx-auto min-h-screen w-screen max-w-screen-xl font-sans max-sm:pt-24 sm:pt-10 pb-10'>
        <div className="w-screen flex items-center justify-center">
          <svg width="70" height="70" className=" text-secondary">
            <RiJavascriptFill size="70" />
          </svg>
        </div>
      </div>
    );
}

export default Skills;