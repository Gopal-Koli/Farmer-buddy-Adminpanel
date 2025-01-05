import React from 'react'
import { IoIosSearch } from "react-icons/io";
const SearchBox= () => {
  return (
    <div className=' w-full h-[auto] bg-[#f1f1f1] relative overflow-hidden '>
        <IoIosSearch  className='absolute top-[13px]  left-[10px] z-50 pointer-events-none' />
        <input type='text' className='w-[auto] pl-8  h-[40px] rounded-sm  text-[14px] border border-[rgba(0,0,0,0.1)] p-2 focus:outline-none focus:border-[rgba(0,0,0,0.5)]' placeholder='Search Products'/>
            
    
    </div>
  )
}

export default SearchBox;
