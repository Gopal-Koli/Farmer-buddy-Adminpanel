import { Button } from '@mui/material';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';



{/* Icons starts from here  */ }
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

import { IoIosEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../utils/api.js';
import { useContext } from 'react';
import { MyContext } from '../../App';

const ChangePassword = () => {

    {/* Function Creation for sign in Loading buttons  */ }


    const [isPasswordShow, setisPasswordShow] = useState(false);
    const [isPasswordShow2, setisPasswordShow2] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const [formFields, setFormFields] = useState({
        email: localStorage.getItem("userEmail"),
        newPassword: '',
        confirmPassword: ''
    })
    const context = useContext(MyContext);
    const navigateTo = useNavigate()


    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    }

    const validateValues = Object.values(formFields).every(el => el)

    const handleSubmit = (e) => {

        e.preventDefault()

        setIsLoading(true)

        if (formFields.newPassword === "") {
            context.opentoast("error", "Please Provide new password")
            setIsLoading(false)
            return false
        }
        if (formFields.confirmPassword === "") {
            context.opentoast("error", "Please Provide confirm password")
            setIsLoading(false)
            return false
        }
        if (formFields.confirmPassword !== formFields.newPassword) {
            context.opentoast("error", "New Password and Confirm Password not match")
            setIsLoading(false)
            return false
        }

        postData(`/api/user/reset-password`, {
            email: localStorage.getItem("userEmail"),
            ...formFields
        }
        ).then((res) => {
            if (res?.error === false) {
                console.log(res)
                localStorage.removeItem("userEmail")
                localStorage.removeItem("actionType")
                setIsLoading(false)
                context.opentoast("success", res?.message)
                navigateTo('/login')
            }
            else {
                context.opentoast("error", res?.message)
            }
        })

    };


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

                <div className='text-center '>
                    <img src="https://shorturl.at/B7BOD" className='m-auto mt-[20] rounded-full opacity-50' ></img> {/* add here relative z-50   after the our own logo is added  */}
                </div>

                <h1 className='text-center text-[40px] font-[900]mt-2'>Welcome Back  ! </h1> <br />
                <h1 className='text-center text-[25px] font-[700]'> You can change your Password from here....</h1>



                <br />



                <br />

                <form className='w-full px-9' onSubmit={handleSubmit} >

                    {/* Password Creation  */}

                    <div className='form-group mb-4 w-full '>
                        <h4 className='text-[14px] font-[500] mb-1'>New Password </h4>
                        <div className='relative w-full'>
                            {/* condtion for eye open close show passwoed or not  */}
                            <input type={isPasswordShow === false ? 'password' : 'text'}
                                className="w-full h-[50px] border   border-[rgba(0,0,0,0.4)] rounded-md 
                            focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3" placeholder='Enter your Password'
                                name='newPassword'
                                label='new password'
                                onChange={onChangeInput}
                                disabled={isLoading === true ? true : false}
                            />
                            <Button className='!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px]
                             !bg-white !min-w-[35px] !text-gray-600' onClick={() => setisPasswordShow(!isPasswordShow)}>
                                {
                                    isPasswordShow === false ? <IoIosEye className='text-[25px]' /> : <FaEyeSlash className='text-[25px]' />
                                }

                            </Button>
                        </div>
                    </div>

                    {/* Confirm Password   */}

                    <div className='form-group mb-4 w-full '>
                        <h4 className='text-[14px] font-[500] mb-1'>Confirm Password </h4>
                        <div className='relative w-full'>
                            {/* condtion for eye open close show passwoed or not  */}
                            <input type={isPasswordShow2 === false ? 'password' : 'text'} className="w-full h-[50px] border  
                             border-[rgba(0,0,0,0.4)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                                placeholder='Enter your Password'
                                name='confirmPassword'
                                label='confirm password'
                                onChange={onChangeInput}
                                disabled={isLoading === true ? true : false}
                            />
                            <Button className='!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px]
                             !bg-white !min-w-[35px] !text-gray-600'
                                onClick={() => setisPasswordShow2(!isPasswordShow2)}>
                                {
                                    isPasswordShow2 === false ? <IoIosEye className='text-[25px]' /> : <FaEyeSlash className='text-[25px]' />
                                }

                            </Button>
                        </div>
                    </div>


                    <Button type="submit" disabled={!validateValues} className='btn-green btn-lg w-full '>
                        {
                            isLoading === true ? <CircularProgress color="inherit" /> : "Change Password"
                        }
                    </Button>
                    <br />





                </form>


            </div>


        </section>

    )
}

export default ChangePassword;