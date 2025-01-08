import React, { useState, PureComponents, useContext } from 'react'
import { Button } from '@mui/material';
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import SearchBox from '../../Components/SearchBox';
import { TiExport } from "react-icons/ti";
import { MyContext } from '../../App';




const HomeSliderBanners = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const context = useContext(MyContext);
    const columns = [{
        id: "image", label: "IMAGE", minWidth: 250
    },
    { id: "action", label: "Action", minWidth: 100 },
    ]


    return (
        <>
            <div className='card bg-gray-100 shadow-md rounded-md  p-5 mt-12 flex items-center justify-between'>
                <h1 className='font-[700] text-[20px] text-gray-800'>Home Slider Banners</h1>
                <Button className='!bg-blue-500 !shadow-md !nk-auto flex gap-3' onClick={() => context.setIsOpenFullScreenPanel({
                    open: true,
                    model: 'Add Home Slide'

                })}>

                    <IoMdAdd className='text-white text-[20px] ml-auto ' />
                    <h6 className='text-white' >Add Home Slide </h6></Button>
                <Button className='!bg-blue-500 !shadow-md  flex gap-3'>
                    <TiExport className='text-white text-[20px] ml-auto ' />
                    <h6 className='text-white'>Export</h6></Button>



            </div>
            <br />
            <div className='col w-[50%] border ml-auto'>
                <SearchBox />
            </div>
            <br />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-900 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4 py-3" width="10%">
                                <div className='w-[60px]'>
                                    Selecet

                                </div>
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Image
                            </th>

                            <th scope="col" className="px-4 py-3">
                                Action
                            </th>



                        </tr>



                    </thead>
                    <tbody>

                        {/* 1st Row OF the Product Table ......................*/}
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="p-4 py-2">
                                <div className='w-[60px]'>
                                    <Checkbox {...label} size="small" />
                                </div>
                            </td>

                            <td>  {/* 1st td*/}

                                <div className='flex items-center gap-4 '>
                                    {/* Div For Image  */}
                                    <div className='img w-[300px] flex items-center  rounded-md overflow-hidden group'>
                                        <Link to="/product/45745">   {/* Link Created for the image */}
                                            <img src='https://shorturl.at/l6jtR'
                                                className='w-full group-hover:scale-110 transition-all'></img>
                                        </Link>
                                    </div>
                                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}


                                </div>
                            </td>



                            {/* To Created a button  for Edit View and romve product  */}
                            <td className="p-4 py-2">
                                <div className='flex items-center gap-1'>

                                    {/* To Created a button  for Edit  product and Tooltip is added for the showing the name on button  */}
                                    <Tooltip title="Edit Product" placement="top">
                                        <Button className='!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]'>
                                            <FaEdit className='text-[30px] text-black-400 ' />
                                        </Button>
                                    </Tooltip>

                                    {/* To Created a button  for View   */}

                                    <Tooltip title="View Product" placement="top">
                                        <Button className='!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]'>
                                            <FaRegEye className='text-[25px] text-black ' />
                                        </Button>
                                    </Tooltip>



                                    {/* To Created a button  for Remove   */}
                                    <Tooltip title="Remove Product" placement="top">
                                        <Button className='!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]'>
                                            <MdDeleteForever className='text-[25px] text-red-700 ' />
                                        </Button>
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>



                        {/* 2nd Row OF the  Table ......................*/}

                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="p-4 py-2">
                                <div className='w-[60px]'>
                                    <Checkbox {...label} size="small" />
                                </div>
                            </td>

                            <td>  {/* 1st td For Product */}

                                <div className='flex items-center gap-4 '>
                                    {/* Div For Image  */}
                                    <div className='img w-[300px]  flex items-center rounded-md overflow-hidden group'>
                                        <Link to="/product/45745">   {/* Link Created for the image */}
                                            <img src='https://shorturl.at/kp4lJ'
                                                className='w-full group-hover:scale-110 transition-all'></img>
                                        </Link>
                                    </div>
                                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}


                                </div>
                            </td>



                            {/* To Created a button  for Edit View and romve product  */}
                            <td className="p-4 py-2">
                                <div className='flex items-center gap-1'>

                                    {/* To Created a button  for Edit  product and Tooltip is added for the showing the name on button  */}
                                    <Tooltip title="Edit Product" placement="top">
                                        <Button className='!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]'>
                                            <FaEdit className='text-[30px] text-black-400 ' />
                                        </Button>
                                    </Tooltip>

                                    {/* To Created a button  for View  product */}

                                    <Tooltip title="View Product" placement="top">
                                        <Button className='!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]'>
                                            <FaRegEye className='text-[25px] text-black ' />
                                        </Button>
                                    </Tooltip>



                                    {/* To Created a button  for Remove  product */}
                                    <Tooltip title="Remove Product" placement="top">
                                        <Button className='!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]'>
                                            <MdDeleteForever className='text-[25px] text-red-700 ' />
                                        </Button>
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>



                        {/* 3rd Row OF the  Table ......................*/}



                        {/* 4th Row OF the  Table ......................*/}




                        {/* 5th Row OF the  Table ......................*/}



                        {/* 6th Row OF the  Table ......................*/}




                    </tbody>


                </table>
                <div className='flex items-center justify-end pt-4 pb-4'>
                    <Pagination count={10} color="primary" />
                </div>

            </div>

        </>
    )
}

export default HomeSliderBanners;
