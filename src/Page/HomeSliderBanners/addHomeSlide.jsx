import React from 'react'
import UploadBox from '../../Components/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import { Button } from '@mui/material';
import { IoMdCloudUpload } from "react-icons/io";
const AddHomeSlide = () => {
    return (
        <section className='p-5 bg-gray-50'>

            <form className='form p-8 py-3 '>
                <div className='scroll  max-h-[72vh] pr-4  pt-4overflow-y-scroll'>
                    <div className='grid grid-cols-7 gap-4'>
                        <div className='uploadBoxWrapper relative '>
                            <span className='absolute -top-[5px] -right-[5px]  w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 
                                flex items-center justify-center z-50  cursor-pointer'>
                                <IoMdClose className=' text-white text-[20px] ' /></span>

                            {/* Lazy load for blur image effect */}
                            <div className='uploadBox p-0 rounded-md  overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)]
                              h-[150px] w-[100%]  bg-gray-100 cusrsor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative'>

                                <LazyLoadImage
                                    alt={"image"}
                                    className='w-full h-full object-cover '
                                    effect="blur"
                                    wrapperProps={{
                                        // If you need to, you can tweak the effect transition using the wrapper style.
                                        style: { transitionDelay: "0.5s" },
                                    }}
                                    src={"https://shorturl.at/l6jtR"} // use normal <img> attributes as props
                                />

                            </div>
                        </div>







                        <UploadBox multiple={true} />
                    </div>

                </div>
                <br />

                <br />
                {/* now we define the type button We Romve The type button and define the type='submit.........' */}
                <div className='w-[250px]'>
                    <Button type="button" className='!bg-slate-400 btn-lg w-full flex gap-3 '>
                        <IoMdCloudUpload className='text-[25px]  text-white' />
                        <span className=' text-white pl-2 '> Publish & View </span>

                    </Button>
                </div>
            </form>
        </section>


    )
}

export default AddHomeSlide
