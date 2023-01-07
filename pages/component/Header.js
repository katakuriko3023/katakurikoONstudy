import React from 'react';
import Link from 'next/link'
function Header({ Icon,title }) {
  return (
    <>
      <Link href={`/component/${title}`}>
            <div className="flex flex-col  items-center  cursor-pointer group w-12 sm:w-20  hover:text-orange-600 mastertext-white ">
              <Icon className ="h-8 mb-1 group-hover:animate-bounce text-2xl"/>
              <p className= "tracking-widest group-hover:opacity-100 opacity-0 border-b-4 border-indigo-400">{title}</p>
            </div>
      </Link>
    </>

  )
}



export default Header
