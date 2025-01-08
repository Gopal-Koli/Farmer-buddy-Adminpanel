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




const Products = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const context = useContext(MyContext);
    return (
        <>
            <div className='card bg-gray-100 shadow-md rounded-md p-5 mt-12 flex items-center justify-between'>
                <h1 className='font-[700] text-[20px] text-gray-800'>Products</h1>
                <Button className='!bg-blue-500 !shadow-md !nk-auto flex gap-3' onClick={() => context.setIsOpenFullScreenPanel({
                    open: true,
                    model: 'Add Product'

                })}>

                    <IoMdAdd className='text-white text-[20px] ml-auto ' />
                    <h6 className='text-white' >Add Product</h6></Button>
                <Button className='!bg-blue-500 !shadow-md  flex gap-3'>
                    <TiExport className='text-white text-[20px] ml-auto ' />
                    <h6 className='text-white'>Export</h6></Button>



            </div>
            <br />
            <div className='col w-[50%] ml-auto'>
                <SearchBox />
            </div>
            <br />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-900 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4 py-3" width="10%">
                                <div className='w-[60px]'>

                                </div>
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Products
                            </th>
                            <th scope="col" className="px-4 py-3">
                                category
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Quntity
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Rating
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

                            <td>  {/* 1st td For Product */}

                                <div className='flex items-center gap-4 '>
                                    {/* Div For Image  */}
                                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                                        <Link to="/product/45745">   {/* Link Created for the image */}
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj04wBAQ1cqKh1NqtkaOF-qOdC1M0aZ4eHnNkh_HtL8aYYKaiocn2OYAWig-3309bvBk&usqp=CAU'
                                                className='w-full group-hover:scale-110 transition-all'></img>
                                        </Link>
                                    </div>
                                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}
                                    <div className='info w-[75%] leading-5 hover:text-blue-800 '>
                                        <Link to="/product/45745">
                                            <h3 className='font-[700] text-[14px]'> Fresh  red Tomato Local Organically 1-kg</h3>
                                            <p className='text-[14px] block w-[600px]'>Our organic tomatoes are naturally grown without the use of harmful pesticides

                                                or synthetic fertilizers. Packed with vibrant flavor, rich nutrients, and a juicy texture, they’re perfect for salads, sauces, and everyday cooking.</p>
                                        </Link>
                                    </div>

                                </div>
                            </td>

                            {/* td  for categorie */}
                            <td className="p-4 py-2">
                                <h3 className='font-[700] text-[14px]'> Vegetable</h3>
                            </td>

                            {/* td  for Quntity */}
                            <td className="p-4 py-2">
                                <div className='flex items-center gap-4'>
                                    <span className='price text-[15px] font-[600]'>
                                        Per Kg
                                    </span>
                                </div>
                            </td>

                            {/* td  for Price */}
                            <td className="p-4 py-2">
                                <div className='flex items-center gap-4 flex-col'>
                                    <span className='oldPrice line-through text-[15px] font-[600] '>  {/* Span for cut price */}
                                        80 Rs
                                    </span>

                                    <span className='price text-[15px]  text-[blue] font-[600]'> {/* Span for Our  price */}
                                        50 Rs
                                    </span>
                                </div>
                            </td>
                            {/* td  for Rating */}
                            <td className="p-4 py-2">
                                <Stack spacing={1}>    {/* Stack is a  Rating tag */}
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
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



                        {/* 2nd Row OF the Product Table ......................*/}

                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="p-4 py-2">
                                <div className='w-[60px]'>
                                    <Checkbox {...label} size="small" />
                                </div>
                            </td>

                            <td>  {/* 1st td For Product */}

                                <div className='flex items-center gap-4 '>
                                    {/* Div For Image  */}
                                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                                        <Link to="/product/45745">   {/* Link Created for the image */}
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj04wBAQ1cqKh1NqtkaOF-qOdC1M0aZ4eHnNkh_HtL8aYYKaiocn2OYAWig-3309bvBk&usqp=CAU'
                                                className='w-full group-hover:scale-110 transition-all'></img>
                                        </Link>
                                    </div>
                                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}
                                    <div className='info w-[75%] leading-5 hover:text-blue-800 '>
                                        <Link to="/product/45745">
                                            <h3 className='font-[700] text-[14px]'> Fresh  red Tomato Local Organically 1-kg</h3>
                                            <p className='text-[14px] block w-[600px]'>Our organic tomatoes are naturally grown without the use of harmful pesticides

                                                or synthetic fertilizers. Packed with vibrant flavor, rich nutrients, and a juicy texture, they’re perfect for salads, sauces, and everyday cooking.</p>
                                        </Link>
                                    </div>

                                </div>
                            </td>

                            {/* td  for categorie */}
                            <td className="p-4 py-2">
                                <h3 className='font-[700] text-[14px]'> Vegetable</h3>
                            </td>

                            {/* td  for Quntity */}
                            <td className="p-4 py-2">
                                <div className='flex items-center gap-4'>
                                    <span className='price text-[15px] font-[600]'>
                                        Per Kg
                                    </span>
                                </div>
                            </td>

                            {/* td  for Price */}
                            <td className="p-4 py-2">
                                <div className='flex items-center gap-4 flex-col'>
                                    <span className='oldPrice line-through text-[15px] font-[600] '>  {/* Span for cut price */}
                                        80 Rs
                                    </span>

                                    <span className='price text-[15px]  text-[blue] font-[600]'> {/* Span for Our  price */}
                                        50 Rs
                                    </span>
                                </div>
                            </td>
                            {/* td  for Rating */}
                            <td className="p-4 py-2">
                                <Stack spacing={1}>    {/* Stack is a  Rating tag */}
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
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


                        {/* 3rd Row OF the Product Table ......................*/}



                        {/* 4th Row OF the Product Table ......................*/}




                        {/* 5th Row OF the Product Table ......................*/}

                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="p-4 py-2">
                                <div className='w-[60px]'>
                                    <Checkbox {...label} size="small" />
                                </div>
                            </td>

                            <td>  {/* 1st td For Product */}

                                <div className='flex items-center gap-4 '>
                                    {/* Div For Image  */}
                                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                                        <Link to="/product/45745">   {/* Link Created for the image */}
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj04wBAQ1cqKh1NqtkaOF-qOdC1M0aZ4eHnNkh_HtL8aYYKaiocn2OYAWig-3309bvBk&usqp=CAU'
                                                className='w-full group-hover:scale-110 transition-all'></img>
                                        </Link>
                                    </div>
                                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}
                                    <div className='info w-[75%] leading-5 hover:text-blue-800 '>
                                        <Link to="/product/45745">
                                            <h3 className='font-[700] text-[14px]'> Fresh  red Tomato Local Organically 1-kg</h3>
                                            <p className='text-[14px] block w-[600px]'>Our organic tomatoes are naturally grown without the use of harmful pesticides

                                                or synthetic fertilizers. Packed with vibrant flavor, rich nutrients, and a juicy texture, they’re perfect for salads, sauces, and everyday cooking.</p>
                                        </Link>
                                    </div>

                                </div>
                            </td>

                            {/* td  for categorie */}
                            <td className="p-4 py-2">
                                <h3 className='font-[700] text-[14px]'> Vegetable</h3>
                            </td>

                            {/* td  for Quntity */}
                            <td className="p-4 py-2">
                                <div className='flex items-center gap-4'>
                                    <span className='price text-[15px] font-[600]'>
                                        Per Kg
                                    </span>
                                </div>
                            </td>

                            {/* td  for Price */}
                            <td className="p-4 py-2">
                                <div className='flex items-center gap-4 flex-col'>
                                    <span className='oldPrice line-through text-[15px] font-[600] '>  {/* Span for cut price */}
                                        80 Rs
                                    </span>

                                    <span className='price text-[15px]  text-[blue] font-[600]'> {/* Span for Our  price */}
                                        50 Rs
                                    </span>
                                </div>
                            </td>
                            {/* td  for Rating */}
                            <td className="p-4 py-2">
                                <Stack spacing={1}>    {/* Stack is a  Rating tag */}
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
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


                        {/* 6th Row OF the Product Table ......................*/}

                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="p-4 py-2">
                                <div className='w-[60px]'>
                                    <Checkbox {...label} size="small" />
                                </div>
                            </td>

                            <td>  {/* 1st td For Product */}

                                <div className='flex items-center gap-4 '>
                                    {/* Div For Image  */}
                                    <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                                        <Link to="/product/45745">   {/* Link Created for the image */}
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj04wBAQ1cqKh1NqtkaOF-qOdC1M0aZ4eHnNkh_HtL8aYYKaiocn2OYAWig-3309bvBk&usqp=CAU'
                                                className='w-full group-hover:scale-110 transition-all'></img>
                                        </Link>
                                    </div>
                                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}
                                    <div className='info w-[75%] leading-5 hover:text-blue-800 '>
                                        <Link to="/product/45745">
                                            <h3 className='font-[700] text-[14px]'> Fresh  red Tomato Local Organically 1-kg</h3>
                                            <p className='text-[14px] block w-[600px]'>Our organic tomatoes are naturally grown without the use of harmful pesticides

                                                or synthetic fertilizers. Packed with vibrant flavor, rich nutrients, and a juicy texture, they’re perfect for salads, sauces, and everyday cooking.</p>
                                        </Link>
                                    </div>

                                </div>
                            </td>

                            {/* td  for categorie */}
                            <td className="p-4 py-2">
                                <h3 className='font-[700] text-[14px]'> Vegetable</h3>
                            </td>

                            {/* td  for Quntity */}
                            <td className="p-4 py-2">
                                <div className='flex items-center gap-4'>
                                    <span className='price text-[15px] font-[600]'>
                                        Per Kg
                                    </span>
                                </div>
                            </td>

                            {/* td  for Price */}
                            <td className="p-4 py-2">
                                <div className='flex items-center gap-4 flex-col'>
                                    <span className='oldPrice line-through text-[15px] font-[600] '>  {/* Span for cut price */}
                                        80 Rs
                                    </span>

                                    <span className='price text-[15px]  text-[blue] font-[600]'> {/* Span for Our  price */}
                                        50 Rs
                                    </span>
                                </div>
                            </td>
                            {/* td  for Rating */}
                            <td className="p-4 py-2">
                                <Stack spacing={1}>    {/* Stack is a  Rating tag */}
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
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



                    </tbody>


                </table>
                <div className='flex items-center justify-end pt-4 pb-4'>
                    <Pagination count={10} color="primary" />
                </div>
            </div>

        </>
    )
}

export default Products
