
import { Badge, Button } from '@mui/material';
import React, { useContext, useState, } from 'react'
import { MyContext } from '../../App';
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import SearchBox from '../../Components/SearchBox';


const Orders = () => {


    const context = useContext(MyContext);


    {/*Sub Table open Functionn on arrow click of the main display table */ }

    const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);
    const isShowOrderdProduct = (index) => {
        if (isOpenOrderdProduct === index) {
            setIsOpenOrderdProduct(null);
        } else {
            setIsOpenOrderdProduct(index);

        }


    }
    return (
        <>

            <div className='card bg-gray-100 shadow-md rounded-md  p-5 mt-12 flex items-center justify-between'>
                <h1 className='font-[700] text-[20px] text-gray-800'>Recent Orders</h1>




            </div>
            <br />
            <div className='col w-[50%] border ml-auto'>
                <SearchBox />
            </div>
            <br />





            <div class="relative overflow-x-auto shadow-md  ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-900 dark:text-gray-400">
                        <tr>
                            {/*  Heading Starts Prom here of main Table ....... */}

                            <th scope="col" class="px-4 py-3">
                                &nbsp;
                            </th>
                            <th scope="col" className="px-4 py-3 whitespace-nowrap">
                                Order ID
                            </th>
                            <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                Payment Id
                            </th>
                            <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                Name
                            </th>
                            <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                Phone number
                            </th>
                            <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                Address
                            </th>
                            <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                Pincode
                            </th>
                            <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                Total amount
                            </th>
                            <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                Email
                            </th>
                            <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                User ID
                            </th>
                            <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                Order status
                            </th>
                            <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                Date
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        {/*  Listing The As Perr Table Heading starts From Here..*/}
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-900 hover:bg-blue-100 dark:hover:bg-gray-600">
                            <td className="w-4 p-4 font-[500] whitespace-nowrap">
                                <Button className='!w-[40px] !h-[40px] !min-w[40px] !rounded-full !bg-white !border-[#000000]' onClick={() => isShowOrderdProduct(0)} >
                                    {/*  up Down Aarow changin base on open close of the tbale..*/}
                                    {
                                        isOpenOrderdProduct === 0 ? <FaChevronUp className='text-[18px]' /> : <FaAngleDown className='text-[18px]' />
                                    }

                                </Button>

                            </td>
                            {/*  order ID */}
                            <td className="w-4 p-4 font-[500] whitespace-nowrap">
                                <span className='text-primary'>
                                    hsdfdbsjgpadshgidgg
                                </span>
                            </td>
                            {/*  Payment ID */}
                            <td className="w-4 p-4 font-[500] whitespace-nowrap">
                                <span className='text-primary '>
                                    gpay-84784nsbhbfrrrfwb
                                </span>
                            </td>
                            {/*  Name Of the customer  */}
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                Gopal & harsh
                            </td>
                            {/*  Phone Number of the Customer  */}
                            <td className="px-6 py-4 font-[500] whitespace-nowrap ">
                                8433564084
                            </td>
                            {/*  Address of the Customer  */}
                            <td className="px-6 py-4 font-[500] ">
                                <span className='block w-[300px]'></span>
                                Shree Gajanan Fortune city,A-wing Room no 403, Khadavli,Kalyan,Thane.
                            </td>
                            {/* pincpde of the Customer Where the Customer Addres is define  */}
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                421102
                            </td>
                            {/*  Total Amount paid by the customer */}
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                300Rs
                            </td>
                            {/*  Email Id of the Customer  */}
                            <td className="flex items-center px-6 py-4 text-[blue] font-[500] whitespace-nowrap">
                                harsh4430@gmail.com
                            </td>
                            {/* User ID OF the Customer */}
                            <td classNames="px-6 py-4 font-[500] whitespace-nowrap">
                                <span className='text-primary'>
                                    #f142
                                </span>
                            </td>
                            {/*  order Status*/}
                            {/* This Process is pending  Work to later also this file and Compionents Batch File..................................................................  */}
                            <td className="px-6 py-4 font-[500]">
                                <Badge status="pending" />
                            </td>
                            {/* Order Date  */}
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                15/10/2025
                            </td>
                        </tr>
                        <br />
                        {/*Function call for open/close the sub table after clicking on arrow of the main table */}
                        {
                            isOpenOrderdProduct === 0 &&

                            <tr>   {/* Table in Table ........Sub table Starts from Here.........................................*/}
                                <td className='bg-[#f1f1f1] ' colSpan="6">
                                    <div class="relative overflow-x-auto rounded-md  shadow-md sm:rounded-lg ">
                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                            <thead class="text-xs text-gray-700 uppercase bg-green-400 dark:bg-gray-900 dark:text-gray-400">
                                                <tr>
                                                    {/*Sub Table Heading Starts From Here////// */}


                                                    <th scope="col" className="px-4 py-3 whitespace-nowrap">
                                                        Product  ID
                                                    </th>
                                                    <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                                        Product Title
                                                    </th>
                                                    <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                                        Image
                                                    </th>
                                                    <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                                        Quntity
                                                    </th>
                                                    <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                                        Price
                                                    </th>

                                                    <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                                        Sub Total
                                                    </th>
                                                    <th scope="col" className="px-4 py-3  whitespace-nowrap">
                                                        &nbsp;
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>       {/* Sub Table Product listing starts from here ... */}
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-900 hover:bg-green-100 dark:hover:bg-gray-600">

                                                    {/*  Proct ID*/}
                                                    <td className="w-4 p-4 font-[500] whitespace-nowrap">
                                                        #1234
                                                    </td>
                                                    {/*  Proct ID*/}
                                                    <td className="w-4 p-4 font-[500] whitespace-nowrap">
                                                        <span className='text-primary'>
                                                            Tomato
                                                        </span>
                                                    </td>
                                                    {/*  Image of the product */}
                                                    <td className="w-4 p-4 font-[500] whitespace-nowrap">
                                                        <img src="https://images-cdn.ubuy.co.in/6521e39275d137349a5b1736-fresh-slicing-tomato-each.jpg" className='w=[80px] h=[80px] object-cover rounded-md ' />
                                                    </td>
                                                    {/*  Quntity of the product For ex..Kg,Gm,Ltr etc*/}
                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                        5kg
                                                    </td>
                                                    {/*  Price of the product*/}
                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap ">
                                                        230 Rs.
                                                    </td>
                                                    {/* Sub-Total Of the product*/}
                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                        230 Rs
                                                    </td>

                                                    {/* This Process is pending  Work to later  */}
                                                    <td className="px-6 py-4 font-[500]">
                                                        <Badge status="pending" />
                                                    </td>

                                                </tr>
                                                <tr>
                                                </tr>










                                            </tbody>
                                        </table>
                                    </div>

                                </td>
                            </tr>
                        }





                        {/* Second collam */}









                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Orders;
