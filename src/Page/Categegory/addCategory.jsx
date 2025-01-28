import React, { useState } from 'react'
import UploadBox from '../../Components/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import { Button } from '@mui/material';
import { IoMdCloudUpload } from "react-icons/io";
const AddCategory = () => {

    const [formFields, setFormFields] = useState({
        name: "",
        images: [],


    })

    const [previews, setPreviews] = useState([]);

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })

    }
    return (
        <section className='p-5 bg-gray-50'>

            <form className='form p-8 py-3 '>
                <div className='scroll  max-h-[72vh] pr-4  pt-4overflow-y-scroll'>
                    <div className='grid grid-cols-1 mb-3'>
                        {/* to define a name of the category */}
                        <div className='col w-[28%]'>
                            <h3 className='text-[14px] font-[600] mb-1 text-black'>Category Name</h3>
                            <input type="text" className='w-full h-[40px] p-3 border border-[rgba(0,0,0,0.1)] 
                               focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm text-sm '
                                onChange={onChangeInput} />
                        </div>
                    </div>
                    <br />
                    {/* to define a Image of the category */}
                    <h3 className='text-[18px] font-[600] mb-1 text-black'>Category Image</h3>
                    <div className='grid grid-cols-7 gap-4'>
                        {
                            previews?.length !== 0 && previews?.map((image, index) => {
                                return ( <div className='uploadBoxWrapper relative '>
                                    <span className='absolute -top-[5px] -right-[5px]  w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 
                                        flex items-center justify-center z-50  cursor-pointer'>
                                        <IoMdClose className=' text-white text-[20px] ' /></span>
        
        
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
                                            src={image} // use normal <img> attributes as props
                                        />
        
                                    </div>
                                </div>
                                )
                            })
                        }
                       







                        <UploadBox multiple={true} name="images" url="/api/category/upload-images"
                            setPreviews={setPreviews} />
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

export default AddCategory;
