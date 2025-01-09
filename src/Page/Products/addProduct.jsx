import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import UploadBox from '../../Components/UploadBox';
{/*import a react lazy img view for blur  or slowly open  */ }
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
{/* for cross react logo to close the or remve the img */ }
import { IoMdClose } from "react-icons/io";
import { Button } from '@mui/material';
import { MdOutlineDriveFolderUpload } from "react-icons/md";
{/* upload icon for pub;lish and view  */ }
import { IoMdCloudUpload } from "react-icons/io";


const AddProduct = () => {

    const [productCat, setProductCat] = React.useState('');
    const [productSubCat, setProductSubCat] = React.useState('');
    const [productFeatured, setProductFeatured] = React.useState('');
    const [productWeight, setProductWeight] = React.useState('');

    const handleChangeProductCat = (event) => {
        setProductCat(event.target.value);
    };
    const handleChangeProductSubCat = (event) => {
        setProductSubCat(event.target.value);
    };
    const handleChangeProductFeatured = (event) => {
        setProductSubCat(event.target.value);
    };

    const handleChangeProductWeight = (event) => {
        setProductWeight(event.target.value);
    };


    return (
        <section className='p-5 bg-gray-50'>

            <form className='form p-8 py-3 '>
                <div className='scroll  max-h-[72vh] pr-4 overflow-y-scroll'>
                    {/*  define grid-cols1 single 1st cell  for product name  */}
                    <div className='grid grid-cols-1 mb-3'>

                        <div className='col'>
                            <h3 className='text-[14px] font-[600] mb-1 text-black'>Product Name</h3>
                            <input type="text" className='w-full h-[40px] p-3 border border-[rgba(0,0,0,0.1)] 
                        focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm text-sm ' />
                        </div>
                    </div>
                    {/* define grid-cols1 single  2nd cell  for product Description  */}
                    <div className='grid grid-cols-1 mb-3'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Description</h3>
                            <textarea type="text" className='w-full h-[100px] p-3 border border-[rgba(0,0,0,0.1)] 
                        focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm text-sm' />
                        </div>
                    </div>

                    {/* define grid-cols4 in a single  cell  4 collams  */}
                    <div className='grid grid-cols-4 mb-3 gap-4'>
                        {/* drop down list for product categroy */}
                        <div className='col'>
                            <h3 className='text-[14px] font-[600] mb-1  text-black'>Product Catgory</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatDrop"
                                size='small'
                                className='w-full'
                                value={productCat}
                                label="Category"
                                onChange={handleChangeProductCat}
                            >
                                <MenuItem value={null}>None</MenuItem>
                                <MenuItem value={1}>Vegetables</MenuItem>
                                <MenuItem value={2}>Fruits</MenuItem>
                                <MenuItem value={3}>Dairy Products</MenuItem>
                                <MenuItem value={4}>Grocery</MenuItem>
                                <MenuItem value={5}>Snacks</MenuItem>
                                <MenuItem value={6}>Drinks</MenuItem>

                            </Select>

                        </div>


                       

                        {/* to take input as number for product price*/}
                        <div className='col'>
                            <h3 className='text-[14px] font-[600] mb-1 text-black'>Product Price</h3>
                            <input type="number" className='w-full h-[40px] p-3 border border-[rgba(0,0,0,0.2)] 
                        focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm text-sm' />
                        </div>


                        {/* to take input as number for product  old price*/}
                        <div className='col'>
                            <h3 className='text-[14px] font-[600] mb-1 text-black'>Product Old Price</h3>
                            <input type="number" className='w-full h-[40px] p-3 border border-[rgba(0,0,0,0.2)] 
                        focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm text-sm' />
                        </div>


                          {/* drop down list for take a input is Featured True or false */}
                          <div className='col'>
                            <h3 className='text-[14px] font-[600] mb-1  text-black'>Is Featured?</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatDrop"
                                size='small'
                                className='w-full'
                                value={productFeatured}
                                label="Category"
                                onChange={handleChangeProductFeatured}
                            >

                                <MenuItem value={1}>True</MenuItem>
                                <MenuItem value={2}>False</MenuItem>


                            </Select>

                        </div>





                    </div>

                    {/* define grid-cols4 in a single  cell  4 collams  */}
                    <div className='grid grid-cols-4 mb-3 gap-4'>


                         {/* drop down list for take a input of the product Weight */}
                         <div className='col'>
                            <h3 className='text-[14px] font-[600] mb-1  text-black'>Product Weight</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatDrop"
                                size='small'
                                className='w-full'
                                value={productWeight}
                                label="Category"
                                onChange={handleChangeProductWeight}
                            >
                                <MenuItem value={null}>None</MenuItem>
                                <MenuItem value={1}>500Gm</MenuItem>
                                <MenuItem value={2}>750Gm</MenuItem>
                                <MenuItem value={3}>1Kg</MenuItem>
                                <MenuItem value={4}>2Kg</MenuItem>
                                <MenuItem value={5}>5Kg</MenuItem>
                                <MenuItem value={6}>10KG</MenuItem>
                                <MenuItem value={7}>1Ltr</MenuItem>
                                <MenuItem value={8}>2Ltr</MenuItem>
                                <MenuItem value={9}>5Ltr</MenuItem>
                                <MenuItem value={10}>10Ltr</MenuItem>

                            </Select>

                        </div>


                      
                        {/* to take input as number for product stock*/}
                        <div className='col'>
                            <h3 className='text-[14px] font-[600] mb-1 text-black'>Product Stock</h3>
                            <input type="text" className='w-full h-[40px] p-3 border border-[rgba(0,0,0,0.1)] 
                        focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm text-sm ' />
                        </div>

                        {/* to take input as number for product Discount*/}
                        <div className='col'>
                            <h3 className='text-[14px] font-[600] mb-1 text-black'>Product Discount</h3>
                            <input type="number" className='w-full h-[40px] p-3 border border-[rgba(0,0,0,0.1)] 
                        focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm text-sm ' />
                        </div>
                       

                    </div>

                    <div className='grid grid-cols-4 mb-3 gap-4'>

                        {/* For the Product Size Extra Drop down for Later Use............................................
                    <div className='col'>
                        <h3 className='text-[14px] font-[600] mb-1 text-black'>Product Sub Catgory</h3>
                        <Select
                            labelId="demo-simple-select-label"
                            id="productCatDrop"
                            size='small'
                            className='w-full'
                            value={productSubCat}
                            label="Category"
                            onChange={handleChangeProductSubCat}
                        >
                            <MenuItem value={null}>None</MenuItem>
                            <MenuItem value={8}>Cow</MenuItem>
                            <MenuItem value={9}>Buffalow</MenuItem>
                            <MenuItem value={9}>Goat</MenuItem>


                        </Select>

                    </div>
 */}

                        {/*  define a product rating */}
                        <div className='col'>
                            <h3 className='text-[14px] font-[600] mb-1 text-black'>Product Rating</h3>
                            <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                        </div>






                    </div>

                    {/*  to take a meadia input like images of the product  */}

                    <div className='col w-full p-5 px-0'>
                        <h3 className='font[700] text-[18px]' >Media and Images</h3>


                        {/*  Upload box wrapper  */}
                        <div className='grid grid-cols-7 gap-4'>
                            <div className='uploadBoxWrapper relative '>
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
                                        src={"https://shorturl.at/GWKYR"} // use normal <img> attributes as props
                                    />

                                </div>
                            </div>



                            <div className='uploadBoxWrapper relative '>
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
                                        src={"https://shorturl.at/GWKYR"} // use normal <img> attributes as props
                                    />

                                </div>
                            </div>




                            <div className='uploadBoxWrapper relative '>
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
                                        src={"https://shorturl.at/GWKYR"} // use normal <img> attributes as props
                                    />

                                </div>
                            </div>


                            <div className='uploadBoxWrapper relative '>
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
                                        src={"https://shorturl.at/GWKYR"} // use normal <img> attributes as props
                                    />

                                </div>
                            </div>


                            <div className='uploadBoxWrapper relative '>
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
                                        src={"https://shorturl.at/GWKYR"} // use normal <img> attributes as props
                                    />

                                </div>
                            </div>


                            <div className='uploadBoxWrapper relative '>
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
                                        src={"https://shorturl.at/GWKYR"} // use normal <img> attributes as props
                                    />

                                </div>
                            </div>





                            <UploadBox multiple={true} />
                        </div>

                    </div>


                </div>

                <hr />
                <br />
                {/* now we define the type button We Romve The type button and define the type='submit.........' */}
                <Button type="button" className='!bg-slate-400 btn-lg w-full '>
                    <IoMdCloudUpload className='text-[25px]  text-white' />
                    <span className=' text-white pl-2 '> Publish & View </span>

                </Button>

            </form>

        </section>
    )
}

export default AddProduct;
