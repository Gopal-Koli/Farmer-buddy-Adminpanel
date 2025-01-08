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
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Users = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const context = useContext(MyContext);
    return (
        <>
            {/* Creation of the Heading User list */}
            <div className='card bg-gray-100 shadow-md rounded-md  p-5 mt-12 flex items-center justify-between'>
                <h1 className='font-[700] text-[20px] text-gray-800'>User List</h1>


                {/* Creation of the Search bocx */}

            </div>
            <br />
            <div className='col w-[50%] border ml-auto'>
                <SearchBox />
            </div>
            <br />

            {/* Table Start from here */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-900 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4 py-3" width="10%">
                                <div className='w-[60px]'>
                                    Select

                                </div>
                            </th>
                            {/* table heading for User Image */}
                            <th scope="col" lassName="px-4 py-3">

                                User Image
                            </th>
                            {/* table heading for Name of the User */}
                            <th scope="col" className="px-4 py-3">
                                User Name
                            </th>
                            {/* table heading for User Mobike Number */}
                            <th scope="col" className="px-4 py-3">
                                User Email
                            </th>
                            {/* table heading for User Image */}
                            <th scope="col" className="px-4 py-3">
                                User Phone Number
                            </th>
                            {/* table heading for User Address*/}
                            <th scope="col" className="px-4 py-3">
                                User Address                            </th>




                        </tr>



                    </thead>
                    <tbody>

                        {/* 1st Row OF the User Table ......................*/}
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="p-4 py-2">
                                <div className='w-[60px]'>
                                    <Checkbox {...label} size="small" />
                                </div>
                            </td>

                            <td>  {/* User Image */}

                                <div className='flex items-center gap-4  pt-1 pb-1'>
                                    {/* Div For Image  */}
                                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                                        <Link to="/product/45745">   {/* Link Created for the image */}
                                            <img src='https://mui.com/static/images/avatar/2.jpg'
                                                className='w-full group-hover:scale-110 transition-all'></img>
                                        </Link>
                                    </div>


                                </div>
                            </td>

                            {/* td  for Name of the user */}
                            <td className="p-4 py-2">
                                <h3 className='font-[700] text-black text-[14px]'> Gopal Koli</h3>
                            </td>

                            {/* td  for Emaol  of the user */}
                            <td className="p-4 py-2">

                                <Link>
                                    <span className=' text-[15px] flex items-center gap-2 text-[blue] font-[100] '>
                                        <MdEmail className='text-black text-[20px]' /> gopalkoli37@gmail.com
                                    </span>
                                </Link>

                            </td>

                            {/* cpollam for phone number  of the user */}
                            <td className="p-4 py-2">

                                <span className=' text-[15px] flex items-center gap-2 font-[400] '>
                                    <FaPhone className='  text-black text-[20px]' />  +91-8433564084
                                </span>





                            </td>
                            {/* cpollam for Address  of the user */}
                            <td className="p-4 py-2">
                                <span className=' text-[15px] flex items-center gap-2 font-[400] '>
                                    <FaHome className='  text-black text-[20px]' /> Ambivali Kalyan-Maharashtra
                                </span>
                            </td>


                        </tr>



                        {/* 2nd Row OF the Product Table ......................*/}
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="p-4 py-2">
                                <div className='w-[60px]'>
                                    <Checkbox {...label} size="small" />
                                </div>
                            </td>

                            <td>  {/* User Image */}

                                <div className='flex items-center gap-4 pt-1 pb-1 '>
                                    {/* Div For Image  */}
                                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                                        <Link to="/product/45745">   {/* Link Created for the image */}
                                            <img src='https://mui.com/static/images/avatar/1.jpg'
                                                className='w-full group-hover:scale-110 transition-all'></img>
                                        </Link>
                                    </div>


                                </div>
                            </td>

                            {/* td  for Name of the user */}
                            <td className="p-4 py-2">
                                <h3 className='font-[700] text-black text-[14px]'> Harsh Kadam</h3>
                            </td>

                            {/* td  for Emaol  of the user */}
                            <td className="p-4 py-2">

                                <Link>
                                    <span className=' text-[15px] flex items-center gap-2 text-[blue] font-[100] '>
                                        <MdEmail className='text-black text-[20px]' /> harshkadam30@gmail.com
                                    </span>
                                </Link>

                            </td>

                            {/* cpollam for phone number  of the user */}
                            <td className="p-4 py-2">

                                <span className=' text-[15px] flex items-center gap-2 font-[400] '>
                                    <FaPhone className='  text-black text-[20px]' />  +91-8010361565
                                </span>





                            </td>
                            {/* cpollam for Address  of the user */}
                            <td className="p-4 py-2">
                                <span className=' text-[15px] flex items-center gap-2 font-[400] '>
                                    <FaHome className='  text-black text-[20px]' /> DivaThane-Maharashtra
                                </span>
                            </td>


                        </tr>



                        {/* 3rd Row OF the Product Table ......................*/}



                        {/* 4th Row OF the Product Table ......................*/}




                        {/* 5th Row OF the Product Table ......................*/}




                        {/* 6th Row OF the Product Table ......................*/}




                    </tbody>


                </table>
                <div className='flex items-center justify-end pt-4 pb-4'>
                    <Pagination count={10} color="primary" />
                </div>
            </div>

        </>
    )
}

export default Users;
