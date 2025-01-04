import { Button } from '@mui/material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

{/* Icons starts from here  */ }
import { MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import LoadingButton from '@mui/lab/LoadingButton';
import { FcGoogle } from "react-icons/fc";
import { GiFarmTractor } from "react-icons/gi";


const Login = () => {
    const [loadingGoogle, setLoading] = React.useState(false);
    function handleClickGoogle() {
        setLoadingGoogle(true);
    }




    return (
        <section className=' bg-[#f1f1f1] w-full h-full fixed top-0 left-0' >

            {/* Header Creation.................................. */}
            <header className='w-full fixed top-0 left-0 px-4 py-2 flex items center justify-between z-50'>
                {/* header logo icon...............  */}
                <Link to="/"><img src='https://shorturl.at/B7BOD' className='w-[200px] border-4'></img></Link>

                {/* headre login and reguster buttton creation            */}
                <div className='flex items-center gap-3'>
                    <NavLink to="/login" exact={true} activeClassName="isActive">
                        <Button className="border !bg-green-300 !text-[18px] !rounded-lg !px-5 !py-2  flex gap-1">
                            <MdLogin className='text-[18px]' />Login
                        </Button>
                    </NavLink>

                    {/* Register button   */}
                    <Button className="border !bg-green-300 !text-[18px] !rounded-lg !px-5 !py-2  flex gap-1">
                        < FaRegUser className='text-[18px]' />Register
                    </Button>
                </div>

            </header>

            {/* background image of the whole login page..................... */}
            <img src="https://shorturl.at/gLrKi" className='w-full fixed top-0 left-0 opacity-15'></img>


            {/* login box card creation..................... */}

            <div className='loginBox card w-[45%] h-[300px] mx-auto mt-5'>
                {/* logo and welcom heading creation  */}

                <div className='text-center bg-none '>
                    <img src="https://shorturl.at/B7BOD" className='m-auto mt-[20] rounded-full' ></img> {/* add here relative z-50   after the our own logo is added  */}
                </div>
                <h1 className='text-center text-[40px] font-[900]mt-4'>Welcome Back ! </h1> <br />
                   <h1 className='text-center text-[30px] font-[700]mt-4'> Sign in with your credentials.</h1>
                <div className='flex items-center justify-center w-full mt-5 '>
                    <LoadingButton
                        onClick={handleClickGoogle}
                        endIcon={<FcGoogle className='!text-[24px]'/>}
                        loading={loadingGoogle}
                        loadingPosition="end"
                        variant="outlined"
                        className="!bg-slate-100 !text-[18px] !capitalize text-[rgba(0,0,0,0.8)]"
                    >
                        Sign in with Google
                    </LoadingButton>
                </div>
            </div>


        </section>

    )
}

export default Login;