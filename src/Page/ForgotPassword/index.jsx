import { Button } from '@mui/material';

import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';



{/* Icons starts from here  */ }
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


const ForgotPassword = () => {





    return (
        <section className=' bg-[#f1f1f1] w-full h-full fixed top-0 left-0 overflow-y-auto scroll-smooth'  >

            {/* Header Creation.................................. */}
            <header className='w-full  fixed top-0 left-0 px-4 py-2 flex items center justify-between z-50'>
                {/* header logo icon...............  */}
                <Link to="/"><img src='https://shorturl.at/B7BOD' className='w-[200px] border-4'></img></Link>

                {/* headre login and reguster buttton creation            */}
                <div className='flex items-center gap-3'>
                    <NavLink to="/login" exact={true} activeClassName="isActive">
                        <Button className="border !bg-blue-300 !text-[18px] !rounded-lg !px-5 !py-2  flex gap-1">
                            <MdLogin className='text-[18px]' />Login
                        </Button>
                    </NavLink>

                    {/* Register button   */}
                    <NavLink to="/sign-up" exact={true} activeClassName="isActive">
                        <Button className="border !bg-blue-300 !text-[18px] !rounded-lg !px-5 !py-2  flex gap-1 ">
                            < FaRegUser className='text-[18px] ' />Register
                        </Button>
                    </NavLink>

                </div>
            </header>

            {/* background image of the whole login page.....chosed another...>................ */}
            <img
                src="https://shorturl.at/gLrKi"
                alt="Background"
                className="w-full fixed top-0 left-0 opacity-10 -z-10"
            />


            {/* loginbox card creation..... Css Created in App.css file you can change on there if u want to change............... */}

            <div className='loginBox card w-[60%] h-[auto] pb-52 mx-auto pt-5'>
                {/* logo and heading creation  */}

                <div className='text-center '>
                    <img src="https://shorturl.at/B7BOD" className='m-auto mt-[20] rounded-full opacity-50' ></img> {/* add here relative z-50   after the our own logo is added  */}
                </div>

                <h1 className='text-center text-[40px] font-[900]mt-2'>Having trouble to sign in ?   </h1> <br />
                <h1 className='text-center text-[25px] font-[700]'> Reset your Password</h1>


                <br />


                {/* Email...........  */}
                <form className='w-full px-9'>
                    <div className='form-group mb-4 w-full '>
                        <h4 className='text-[14px] font-[500] mb-1'>E-mail</h4>
                        <input type="email" className="w-full h-[50px] border   border-[rgba(0,0,0,0.4)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3" placeholder='Enter your Email'></input>
                    </div>



                    {/* Button for reset the password  */}
                    <Button className='btn-green btn-lg w-full '> Reset your Password</Button>
                    <br /><br />
                    {/* if dont wanna a reset sign again vala section   */}
                    <div className='text-center flex items-center justify-center gap-2'>
                        <span>If dont want to reset ? </span>
                        <Link to="/login"
                            className='text-primary font-[600] text-[15px] hover:underline hover:text-grey-700'>
                            Sign In
                        </Link>
                    </div>





                </form>


            </div>


        </section>

    )
}

export default ForgotPassword;