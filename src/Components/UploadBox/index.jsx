import React, { useState } from 'react'
import { FaRegImages } from "react-icons/fa";
import { uploadImage } from "../../utils/api"
{/* creation of the upload products image small box in panel*/ }
const UploadBox = (props) => {
    const [previews, setPreviews] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [address, setAddress] = useState([]);
    const formdata = new FormData();
    let selectedImages=[];

    const onChangeFile = async (e, apiEndPoint) => {
        try {
            setPreviews([]);
            const files = e.target.files;
            setUploading(true);

            for (var i = 0; i < files.length; i++) {
                if (files[i] && (files[i].type === 'image/jpeg' || files[i].type === 'image/jpg' ||
                    files[i].type === 'image/png' ||
                    files[i].type === 'image/webp')
                ) {
                    const file = files[i];
                    selectedImages.push(file);
                    formdata.append(props?.name, file);
                } else {
                    context.alertBox("error", "please select a valid image like jpg,png,Webp image file");
                    setUploading(false);
                    return false;
                }
            }
            uploadImage(apiEndPoint, formdata).then((res) => {
                setUploading(false);
                props.setPreviews(res?.data?.images);
            })
        }
        catch (error) {
            console.log(error);

        }
    }


    return (
        <div className='uploadBox p-3 rounded-md  overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)]
     h-[150px] w-[100%] mb-2 bg-gray-100 cusrsor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative'>
            <FaRegImages className='text-[30px] opacity-35 pointer-events-none' />
            <h4 className='text-[14px] pointer-events-none'>Image Upload</h4>
            {/* define a multiple for taking  more than one picture */}
            <input type="file" accept="image/*" multiple={props.multiple !== undefined ? props.multiple : false}
                className=' absolute top-0 left-0 w-full h-full z-50 opacity-0'
                onChange={(e) =>
                    onChangeFile(e, props?.url)
                }
                name="images"


            />


        </div>
    )
}

export default UploadBox;
