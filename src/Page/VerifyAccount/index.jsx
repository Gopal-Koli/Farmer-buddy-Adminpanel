import { Button } from '@mui/material';

import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

import OtpBox from '../../Components/OtpBox';

{/* Icons starts from here  */ }
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import LoadingButton from '@mui/lab/LoadingButton';
import { FcGoogle } from "react-icons/fc";
import { GiFarmTractor } from "react-icons/gi";
import { MdOutlineFacebook } from "react-icons/md";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { IoIosEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { use } from 'react';



const VerifyAccount = () => {

    const [otp, setotp] = useState("");
    const handleOtpChange = (value) => {
        setotp(value);
    }


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
                {/* logo and welcom heading creation  */}

                <img src='https://shorturl.at/mG2wQ' className='w-[100px] m-auto' ></img>

                <h1 className='text-center text-[40px] font-[900]mt-2'>Welcome Back  ! </h1> <br />
                <h1 className='text-center text-[25px] font-[700]'> Please Verify your Account</h1>


                <br />
                {/* Otp  name or email creation  */}

                <p className='text-center text-red-600 text-[15px] font-[500]'>OTP send to
                    <span className='text-primary'> gopalkoli4430@gmail.com</span></p>
                <br />
                {/* OtpBox components added here and box of the otp defined 6  */}
                <div className='text-center flex items-center justify-center flex-col '>
                    <OtpBox length={6} onChange={handleOtpChange} />
                </div>
                <br />
                {/* Verify Button Creation  and for perfect width added in div */}
                <div className='w-[300px] m-auto'>

                    <Button className='btn-green w-full'>Verify OTP</Button>
                </div>
            </div>


        </section>

    )
}

export default VerifyAccount;