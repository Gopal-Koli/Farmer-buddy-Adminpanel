import React from 'react'
import { MyContext } from '../../App';
import { useContext, } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa"
import { useNavigate,Link } from 'react-router-dom';
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { postData } from '../../utils/api';
import CircularProgress from '@mui/material/CircularProgress'
const Profile = () => {
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        mobile: ""
    })
    const [userId, setUserId] = useState()

    const context = useContext(MyContext)
    const navigateTo = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        if (token === null) {
            navigateTo("/")
        }
    }, [context.isLogin])


    useEffect(() => {
        if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
            setUserId(context?.userData?._id)
            setFormFields({
                name: context?.userData?.name,
                email: context?.userData?.email,
                mobile: context?.userData?.mobile
            })
           const ph=`"${(context?.userData?.mobile)}"`
           console.log(ph)
           setPhone(ph)
           
        }
    }, [context?.userData])
    
    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    }
    useEffect(() => {
        if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
            setUserId(context?.userData?._id)
            setFormFields({
                name: context?.userData?.name,
                email: context?.userData?.email,
                mobile: context?.userData?.mobile
            })
        }
    }, [context?.userData])

    

    const validateValues = Object.values(formFields).every(el => el)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true)

        if (formFields.name === "") {
            context.opentoast("error", "Please Provide Full Name")
            setIsLoading(false)
            return false
        }
        if (formFields.email === "") {
            context.opentoast("error", "Please Provide Email")
            setIsLoading(false)
            return false
        }
        if (formFields.mobile === "") {
            context.opentoast("error", "Please Provide Mobile No")
            setIsLoading(false)
            return false
        }

        editData(`/api/user/update-user-details/${userId}`, formFields, { withCredentials: true })
            .then((res) => {
                if (res !== false) {
                    console.log(res)
                    context.opentoast("success", res?.message)
                    setIsLoading(false)
                }
                else {
                    context.opentoast("error", res?.message)
                }
            })


    }

    {/*  Upload Image..............................RoundedProfilePic
    const [preview, setPreview] = useState([])
    const [uploading, setUploading] = useState(false)
    useEffect(() => {
        const userAvatar = []
        userAvatar.push(context?.userData?.avatar)
        setPreview(userAvatar)
    }, [context?.userData])

    const onChangeFile = async (e, apiEndPoint) => {
        try {
            setPreview(null); // Reset preview
            const files = e.target.files;
            console.log('Files:', files);

            const formdata = new FormData();
            const selectedImages = [];

            setUploading(true);

            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                if (
                    file &&
                    (file.type === 'image/jpeg' ||
                        file.type === 'image/jpg' ||
                        file.type === 'image/png' ||
                        file.type === 'image/webp')
                ) {
                    selectedImages.push(file);
                    formdata.append('avatar', file);

                    await uploadImage(apiEndPoint, formdata)
                        .then((res) => {
                            console.log('Response:', res);

                            const avatarUrl = res?.images?.[0];

                            if (avatarUrl) {
                                setPreview(avatarUrl); // Set the avatar URL to the preview state
                            } else {
                                context.opentoast('error', 'Avatar URL not received.');
                            }
                        })
                        .catch((error) => {
                            console.error('API Error:', error);
                            context.opentoast('error', 'Failed to upload image.');
                        });
                } else {
                    context.opentoast('error', 'Please add only valid JPG, JPEG, PNG, or WEBP image files.');
                    setUploading(false);
                    return false;
                }
            }

            setUploading(false);
        } catch (error) {
            console.error('Error:', error);
            setUploading(false);
        }
    };
    */}

    return (
        <>
            <div className='card bg-gray-100 shadow-md sm:rounded-lg my-4 mt-16 pt-3 px-5 pb-5 '>
                
            
                <h1 className='font-[700] text-[20px] text-gray-800'>User Profile <Link to="/forgot-password" className='text-primary font-[400] ml-2 text-[13px] 
                hover:underline hover:text-grey-700'>Change Your Password</Link></h1>
                
               
                <br />
                {/* Upload Image Profile
                <div className="w-[120px] h-[120px] rounded-full border  overflow-hidden relative flex items-center justify-center">

              

                    {
                        uploading === true ? <CircularProgress color="inherit" /> :

                            <img src={preview} alt=""
                                className='w-full h-full object-cover' />
                    }
                              

                </div>
                  */}
                <form className='form mt-8' onSubmit={handleSubmit}>
                    <div className="w-full p-3 flex flex-col items-center justify-center">
                        <div className="head flex flex-col items-center">
                            <IoShieldCheckmarkOutline style={{
                                fontSize: '100px'
                            }} />
                            <p className='mt-4 uppercase font-bold text-[20px]'>Personal Information</p>
                        </div>
                        <div className="full-name flex gap-4 w-[70%] mt-4 items-start justify-start">

                            <TextField
                                id="firstName"
                                label="First Name "
                                variant="outlined"
                                className='w-full'
                                name="name"
                                value={formFields.name}
                                disabled={isLoading === true ? true : false}
                                onChange={onChangeInput}
                            />

                        </div>

                        <div className="email flex gap-4 w-[70%] mt-4 items-start justify-start">
                            <TextField
                                id="email"
                                label="Email "
                                type="email"
                                variant="outlined"
                                className='w-full'
                                name="email"
                                value={formFields.email}
                                disabled={true}
                                onChange={onChangeInput}
                            />
                        </div>
                        <div className="phone-number  gap- w-[full] mt-4 !bg-slate-50">
                            <PhoneInput 
                                defaultCountry="in"
                                value={formFields?.mobile}
                                disabled={isLoading === true ? true : false}
                                onChange={(phone) => 
                                   { setPhone(phone);
                                    setFormFields({
                                        mobile:phone
                                    })
                                    

                                   }
                                }
                            />
                            
                             
                        </div>

                        <div className="button mt-4 flex gap-4">
                            <Button
                                type="submit"
                                style={{ backgroundColor: 'rgb(59 255 59)' }}
                                disabled={!validateValues}
                                className='border border-gray-500 px-4 w-full bg-green-400 text-black flex gap-3'
                            >
                                {
                                    isLoading === true ? <CircularProgress color="inherit" /> : "Save"
                                }

                            </Button>


                        </div>
                    </div>
                </form>



            </div>

        </>
    )
}

export default Profile
