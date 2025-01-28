import React,{ useState } from 'react'
import { FaRegImages } from "react-icons/fa";
import {uploadImage} from "../../utils/api"
{/* creation of the upload products image small box in panel*/ }
const UploadBox = (props) => {
  const[previews,setPreviews]=useState([]);
  const[uploading,setUploading]=useState(false);
  const[address,setAddress]=useState([]);
   const formdata=new FormData();

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
                formdata.append(props?.name, file);

                await uploadImage(apiEndPoint, formdata)
                    .then((res) => {
                        setUploading(false);
                        props.setPreviews(res?.data?.images)
                        console.log('Response:', res);

                        const avatarUrl = res?.images?.[0];

                        if (avatarUrl) {
                            setPreviews(avatarUrl); // Set the avatar URL to the preview state
                        } else {
                            context.opentoast('error', 'Image URL not received.');
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

  return (
    <div className='uploadBox p-3 rounded-md  overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)]
     h-[150px] w-[100%] mb-2 bg-gray-100 cusrsor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative'>
      <FaRegImages className='text-[30px] opacity-35 pointer-events-none' />
      <h4 className='text-[14px] pointer-events-none'>Image Upload</h4>
      {/* define a multiple for taking  more than one picture */}
      <input type="file" accept="image/*" multiple={props.multiple !== undefined ? props.multiple : false} 
      className=' absolute top-0 left-0 w-full h-full z-50 opacity-0'
      onChange={(e)=>
        onChangeFile(e,props?.url)
      }
      name={props?.name}

      
      />


    </div>
  )
}

export default UploadBox;
