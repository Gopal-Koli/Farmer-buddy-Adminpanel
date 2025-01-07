import React from 'react'
import { FaRegImages } from "react-icons/fa";
{/* creation of the upload products image small box in panel*/ }
const UploadBox = (props) => {
  return (
    <div className='uploadBox p-3 rounded-md  overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)]
     h-[150px] w-[100%] mb-2 bg-gray-100 cusrsor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative'>
      <FaRegImages className='text-[30px] opacity-35 pointer-events-none' />
      <h4 className='text-[14px] pointer-events-none'>Image Upload</h4>
      {/* define a multiple for taking  more than one picture */}
      <input type="file" multiple={props.multiple !== undefined ? props.multiple : false} className=' absolute top-0 left-0 w-full h-full z-50 opacity-0'></input>


    </div>
  )
}

export default UploadBox
