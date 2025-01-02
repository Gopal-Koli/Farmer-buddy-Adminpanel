import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';   {/* To add a dashboard Swiper */}
import { Navigation } from 'swiper/modules';

{/* To add Icons  */}
import { FaGifts } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";
import { GrProductHunt } from "react-icons/gr"; 

{/* To add Graph/charts  */}
import { LuChartNoAxesCombined } from "react-icons/lu";
import { IoStatsChart } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";




{/* Dashboard Creation  */}
const DashboardBoxes = () => {
  return (
    <> 
   
       <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={false}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >

         {/* To add a 1st Box in Dashboard */}
       <SwiperSlide>
        <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1ca] rounded-md border  border-[#000000] flex items-center gap-4 ">
           <FaGifts className='text-[35px] text-[#505ce3]'/>
             <div className="info w-[70%] ">
               <h3>New Orders</h3>
               <b>1,200</b>
            </div>
            <LuChartNoAxesCombined className='text-[80px] text-[#505ce3]'/>
        </div>
       </SwiperSlide>   

        {/* To add a 2nd Box in Dashboard */}
        <SwiperSlide>
        <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1ca] rounded-md border border-[#000000] flex items-center gap-4 ">
           <MdSell className='text-[35px] text-[#00CE71]'/>
             <div className="info w-[70%] ">
               <h3>Total Sales</h3>
               <b>Rs.15,200</b>
            </div>
            <LuChartNoAxesCombined className='text-[80px] text-[#00CE71]'/>
        </div>
       </SwiperSlide>   

        {/* To add a 3rd Box in Dashboard */}
        <SwiperSlide>
        <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1ca] rounded-md border border-[#000000] flex items-center gap-4 ">
           <BiSolidBank className='text-[35px] text-[#76511a]'/>
             <div className="info w-[70%] ">
               <h3>Revenue</h3>
               <b>Rs.1,2000</b>
            </div>
            <LuChartNoAxesCombined className='text-[80px] text-[#76511a]'/>
        </div>
       </SwiperSlide>   

        {/* To add a 4th Box in Dashboard */}
        <SwiperSlide>
        <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1ca] rounded-md border border-[#000000] flex items-center gap-4 ">
           <FaGifts className='text-[35px] text-[#ba25ff]'/>
             <div className="info w-[70%] ">
               <h3>Total Products</h3>
               <b>14,00</b>
            </div>
            <FaChartPie  className='text-[80px] text-[#ba25ff]'/>
        </div>
       </SwiperSlide>   
       
    </Swiper>
     
    </>
  )
}

export default DashboardBoxes;
