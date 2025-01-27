import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import LoadingButton from '@mui/lab/LoadingButton';
import { FcGoogle } from "react-icons/fc";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { IoIosEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../../../utils/api.js';
import { MyContext } from '../../../App.jsx';

const SignUp = () => {

    {/* Function Creation for sign in Loading buttons  */ }
    const [loadingGoogle, setLoadingGoogle] = React.useState(false);

    const [isPasswordShow, setisPasswordShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        password: ""
    })
    const context = useContext(MyContext)

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

        if (formFields.name === "") {
            context.opentoast("error", "Please Provide UserName");
        }
        if (formFields.email === "") {
            context.opentoast("error", "Please Provide Email");
        }
        if (formFields.password === "") {
            context.opentoast("error", "Please Provide password");
        }
        postData('/api/user/register', formFields)
            .then((res) => {

                if (res?.error !== true) {
                    context.opentoast("success", res?.message)
                    setIsLoading(false)
                    localStorage.setItem("userEmail", formFields.email)
                    setFormFields({
                        name: "",
                        email: "",
                        password: ""
                    })
                    navigateTo('/verify-account')

                }
                else {
                    context.opentoast("error", res?.message)
                    setIsLoading(false)
                }
            })
    };


    function handleClickGoogle() {
        setLoadingGoogle(true);
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

                <div className='text-center '>
                    <img src="https://shorturl.at/B7BOD" className='m-auto mt-[20] rounded-full opacity-50' ></img> {/* add here relative z-50   after the our own logo is added  */}
                </div>

                <h1 className='text-center text-[30px] font-[900]mt-2 !capitalize'>Join With Our Farmer-Buddy platform ! </h1> <br />
                <h1 className='text-center text-[20px] font-[500] !capitalize'> to get Empowered for a brighter future!"</h1>

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
                    <span className='text-[14px] font-[500] '>Or, Register with your E-mail</span>
                    <span className='flex items-center w-[100px] h-[1px] bg-slate-500'></span>
                </div>

                <br />
                {/* Form Creation for registrr using form tag  */}

                <form className='w-full px-9' onSubmit={handleSubmit}>
                    {/* to take a Name input from user */}

                    <div className='form-group mb-4 w-full '>
                        <h4 className='text-[14px] font-[500] mb-1'>Name</h4>
                        <input type="text" className="w-full h-[50px] border   border-[rgba(0,0,0,0.4)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3" placeholder='First Name   Middle Name   Surname'
                            name="name"
                            value={formFields.name}
                            disabled={isLoading === true ? true : false}
                            onChange={onChangeInput}
                        />

                    </div>
                    {/* to take aE-mail input from user */}

                    <div className='form-group mb-4 w-full '>
                        <h4 className='text-[14px] font-[500] mb-1'>E-mail</h4>
                        <input type="email" className="w-full h-[50px] border   border-[rgba(0,0,0,0.4)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3" placeholder='Enter your Email'
                            name="email"
                            value={formFields.email}
                            disabled={isLoading === true ? true : false}
                            onChange={onChangeInput}
                        />
                    </div>
                    {/* to take a Password from user */}

                    <div className='form-group mb-4 w-full '>
                        <h4 className='text-[14px] font-[500] mb-1'>Password</h4>
                        <div className='relative w-full'>

                            {/* to take a password input from usr and creation of eye to see the password or hide the password  */}
                            <input type={isPasswordShow === false ? 'password' : 'text'} className="w-full h-[50px] border   border-[rgba(0,0,0,0.4)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3" placeholder='Enter your Password'
                                name="password"
                                value={formFields.password}
                                onChange={onChangeInput}
                            />
                            <Button className='!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !bg-white !min-w-[35px] !text-gray-600' onClick={() => setisPasswordShow(!isPasswordShow)}>
                                {
                                    isPasswordShow === false ? <IoIosEye className='text-[25px]' /> : <FaEyeSlash className='text-[25px]' />
                                }

                            </Button>
                        </div>
                    </div>
                    {/* Creation for Remember password chake box */}

                    <div className='form-group mb-4 w-full flex items-center justify-between'>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />

                        <Link to="/forgot-password" className='text-primary font-[600] text-[15px] hover:underline hover:text-grey-700'>Forgot Passowrd?</Link>
                    </div>

                    <Button type='submit' className='btn-green btn-lg w-full ' disabled={!validateValues}>
                        {
                            isLoading === true ? <CircularProgress color="inherit" />
                                : "Register"
                        }
                    </Button>
                    <br />





                </form>


            </div>


        </section>

    )
}

export default SignUp;