import { Button } from '@mui/material';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';



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
import { postData } from '../../../utils/api';
import { MyContext } from '../../../App.jsx';
import CircularProgress from '@mui/material/CircularProgress';


const Login = () => {

    {/* Function Creation for sign in Loading buttons  */ }
    const [loadingGoogle, setLoadingGoogle] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const [isPasswordShow, setisPasswordShow] = useState(false);
    const [formFields, setFormFields] = useState({
        email: "",
        password: ""
    })

    const context = useContext(MyContext);
    const history = useNavigate();
    function handleClickGoogle() {
        setLoadingGoogle(true);
    }



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

    //for password forgot 
    const forgotPassword = () => {
        if (formFields.email === "") {
            context.opentoast("error", "Please Provide Email")
            return false
        }
        else {
            localStorage.setItem("userEmail", formFields.email)
            localStorage.setItem("actionType", "forgot-password")

            postData("/api/user/forgot-password", {
                email: formFields.email
            }).then((res) => {
                if (res?.error === false) {
                    context.opentoast("success", res?.message)
                    navigateTo('/verif-account')
                }
                else {
                    context.opentoast("error", res?.message)
                }
            })

            context.opentoast('success', `OTP sended successfully to ${formFields.email}`)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true)

        if (formFields.email === "") {
            context.opentoast("error", "Please Provide Email")
        }
        if (formFields.password === "") {
            context.opentoast("error", "Please Provide password")
        }
        postData('/api/user/login', formFields, { withCredentials: true })
            .then((res) => {
                console.log(res)
                if (res?.error !== true) {
                    context.opentoast("success", res?.message)
                    setIsLoading(false)
                    localStorage.setItem("userEmail", formFields.email)
                    setFormFields({
                        email: "",
                        password: ""
                    })
                    localStorage.setItem("accessToken", res?.data?.accessToken)
                    localStorage.setItem("refreshToken", res?.data?.refreshToken)
                    navigateTo('/')

                    context.setisLogin(true)

                }
                else {
                    context.opentoast("error", res?.message)
                    setIsLoading(false)
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
                <h1 className='text-center text-[25px] font-[700]'> Sign in with your credentials.</h1>

                {/* Loding Buttons Creationn for Sign-in  /...sign in with Google  */}
                <div className='flex items-center justify-center w-full mt-5 gap-5 '>
                    <LoadingButton
                        onClick={handleClickGoogle}
                        endIcon={<FcGoogle className='!text-[20px]' />}
                        loading={loadingGoogle}
                        loadingPosition="end"
                        variant="outlined"
                        className="!bg-slate-100 !text-[15px] !py-2 !capitalize text-[rgba(0,0,0,0.8)]"
                    >
                        Sign in with Google
                    </LoadingButton>


                </div>


                <br />

                <div className='w-full flex items-center justify-center gap-3'>
                    <span className='flex items-center w-[100px] h-[1px] bg-slate-500'></span>
                    <span className='text-[14px] font-[500] '>Or, Sign in with your E-mail</span>
                    <span className='flex items-center w-[100px] h-[1px] bg-slate-500'></span>
                </div>

                <br />

                <form className='w-full px-9' onSubmit={handleSubmit}>
                    <div className='form-group mb-4 w-full '>
                        <h4 className='text-[14px] font-[500] mb-1'>E-mail</h4>
                        <input type="email" className="w-full h-[50px] border   border-[rgba(0,0,0,0.4)] rounded-md focus:border-[rgba(0,0,0,0.7)]
                         focus:outline-none px-3" placeholder='Enter your Email'
                            name='email'
                            value={formFields.email}
                            disabled={isLoading === true ? true : false}
                            onChange={onChangeInput}

                        />
                    </div>

                    <div className='form-group mb-4 w-full '>
                        <h4 className='text-[14px] font-[500] mb-1'>Password</h4>
                        <div className='relative w-full'>
                            <input type={isPasswordShow === false ? 'password' : 'text'} className="w-full h-[50px] border
                               border-[rgba(0,0,0,0.4)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                                placeholder='Enter your Password'
                                name='password'
                                value={formFields.password}
                                disabled={isLoading === true ? true : false}
                                onChange={onChangeInput}
                            />
                            <Button className='!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !bg-white !min-w-[35px] !text-gray-600' onClick={() => setisPasswordShow(!isPasswordShow)}>
                                {
                                    isPasswordShow === false ? <IoIosEye className='text-[25px]' /> : <FaEyeSlash className='text-[25px]' />
                                }

                            </Button>
                        </div>
                    </div>

                    <div className='form-group mb-4 w-full flex items-center justify-between cursor-pointer'>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />

                        <a
                            onClick={forgotPassword}
                            className='text-primary font-[600] text-[15px] hover:underline hover:text-grey-700'>Forgot Passowrd?
                        </a>
                    </div>

                    <Button type='submit' disabled={!validateValues} className='btn-green btn-lg w-full '>
                        {
                            isLoading === true ? <CircularProgress color="inherit" />
                                : "Sign In"
                        }

                    </Button>
                    <br />





                </form>


            </div>


        </section>

    )
}

export default Login;