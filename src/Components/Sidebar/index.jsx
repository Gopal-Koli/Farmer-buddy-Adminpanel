import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

//Side Icons
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import {Collapse} from 'react-collapse';



export const Sidebar=()=>{

  {/* Function for Arrow For open close Submenu in Main menu */}

const[submenuIndex,setSubmenuIndex]=useState(null);
  function isOpenSubMenu(index) {

    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }




  }
    return (
        <>
          <div className="sidebar fixed top-100% left-0 bg-[#5B6C5D] w-[16%] h-full border-r border-[rgba(0,0,0.1)] py-2 px-2">
            <br/><br/>
            <div className="py-2 w-full">
                <Link to='/'> <img src="https://img.freepik.com/premium-vector/farmers_185822-53.jpg" className='w-[400px] h-[170px] px-4 py-5'></img>
                </Link>
            </div>
                        {/* Dashboard creation for side bar */}
            <ul className='mt-4'>
             
                <li>
                <Link to="/dashboard">   {/*link to  another adding a page */}
                  <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgb(255,255,255)] !font-[500] items-center !py-2 hover:!bg-[#18320e]'> 
                  <MdSpaceDashboard className='text-[16px] !text-[rgb(255,255,255)]' /> 
                  <span className='text-[rgb(255,255,255)] text-[16px]'>Dashboard</span></Button>
                </Link>
              </li>
             
            </ul>


                         {/* Home Slide with arrow drop down list  */}
          <ul className='mt-4'>                                                                                                                                                 {/*Here Onclik adde on button for clicking imediatle sub menu will be display */}
                <li>
                
                <Link to="/homeslides"> {/*link to  another adding a page */}
                  <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgb(255,255,255)] !font-[500] items-center !py-2 hover:!bg-[#18320e]' onClick={()=>isOpenSubMenu(1)}> 
                    <FaRegImages className='text-[16px] !text-[rgb(255,255,255)]' />
                    <span className='text-[rgb(255,255,255)] text-[14px]'>Home Slides</span>
                    <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center !text-[rgb(255,255,255)]' ><FaAngleDown className={`transiation-all ${submenuIndex===1 ?'rotate-180':''}`}/></span>
                   </Button>
                </Link>


                        {/* Function call Or define a list in submenus */}

                   <Collapse isOpened={submenuIndex===1? true:false}>     
                    <ul className=' !w-full'>

                       <li className='!w-full'>
                       <Link to="/homeslides/offers">
                        <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 flex gap-3'>

                        {/* Following 1st span is added for the Pointing a dot for subbranch  */}
                             <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{" "}
                            <span className='!text-[#ededea] text-sm italic '>Current Product offers</span>
                         </Button>
                        </Link>
                      </li>

                      <li className='!w-full'>
                      <Link to="/homeslides/services"> {/*link to  another adding a page */}
                        <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 gap-3'>

                        {/* Following 1st span is added for the Pointing a dot for subbranch  */}
                         <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{"  "}
                         <span className='!text-[#ededea] text-sm italic '> Our services </span>
                        </Button>    
                      </Link>                  
                      </li>
                    </ul>
                   </Collapse>


                </li>
                  
          </ul>

                             {/* Users Creation for side bar */}
            <ul className='mt-4'>
                <li>
                 <Link to="/users">     {/*link to  another adding a page */}
                   <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgb(255,255,255)] !font-[500] items-center !py-2 hover:!bg-[#18320e]'> 
                   <FaUsers className='text-[16px] !text-[rgb(255,255,255)]' /> 
                   <span className='text-[rgb(255,255,255)] text-[16px]'>Users</span>
                   </Button>
                  </Link>
                </li>
            </ul>

                             
                             {/* Products Creation  with arrow drop down list  */}
            <ul className='mt-4'>
            <li>
            <Link to="/products">    {/*link to  another adding a page */}
              <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgb(255,255,255)] !font-[500] items-center !py-2 hover:!bg-[#18320e]' 
                onClick={()=>isOpenSubMenu(3)}> 
                  <FaShoppingBag  className='text-[16px] !text-[rgb(255,255,255)]' />
                   <span className='text-[rgb(255,255,255)] text-[14px]'>Products</span>
                   <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center !text-[rgb(255,255,255)]' ><
                    FaAngleDown className={`transiation-all ${submenuIndex===3 ?'rotate-180':''}`}/>
                  </span>
             </Button>
             </Link>

                   {/* Function call Or define a list in submenus */}

                   <Collapse isOpened={submenuIndex===3? true:false}>     
                    <ul className=' !w-full'>
                       <li className='!w-full'>
                       <Link to="/products/uploads">  {/*link to  another adding a page */}
                         <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 flex gap-3'>

                         {/*  for Uploading the products  products   */}
                          <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{" "}
                          <span className='!text-[#ededea] text-sm italic '>upload Products</span>
                          </Button>
                         </Link>
                      </li>
                      

                      <li className='!w-full'>
                      <Link to="/proucts/list">    {/*link to  another adding a page */}
                          <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 gap-3'>

                         {/* Product list which comes under the Products */}
                           <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{"  "}
                           <span className='!text-[#ededea] text-sm italic '>Product List </span>
                         </Button>
                      </Link>                      
                      </li>


                       <li className='!w-full'>
                       <Link to="/products/size">    {/*link to  another adding a page */}
                        <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 gap-3'>

                        {/* Size of the product ex Kg,Ltr,Etc  */}
                         <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{"  "}
                         <span className='!text-[#ededea] text-sm italic '>Product Size </span>
                         
                        </Button>
                        </Link>                      
                      </li>


                      <li className='!w-full'>
                      <Link to="/products/search">     {/*link to  another adding a page */}
                      <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 gap-3'>

                        {/* Size of the product ex Kg,Ltr,Etc  */}
                         <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{"  "}
                         <span className='!text-[#ededea] text-sm italic '>Search Products </span>
                         </Button>   
                         </Link>                   
                      </li>


                    </ul>
                   </Collapse>


                </li>
                  
            </ul>

                          {/*Categori creation  with arrow drop down list   */}
            <ul className='mt-4'>
            <li>
            <Link to="/categories">          {/*link to  another adding a page */}
              <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgb(255,255,255)] !font-[500] items-center !py-2 hover:!bg-[#18320e]'
                   onClick={()=>isOpenSubMenu(4)}> 
                  <MdCategory className='text-[16px] !text-[rgb(255,255,255)]' />
                   <span className='text-[rgb(255,255,255)] text-[14px]'>Categories</span>
                   <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center !text-[rgb(255,255,255)]' >
                    <FaAngleDown className={`transiation-all ${submenuIndex===4 ?'rotate-180':''}`}/>
                  </span>
              </Button>
            </Link>

                   {/* Function */}

                   <Collapse isOpened={submenuIndex===4? true:false}>     
                    <ul className=' !w-full'>
                       <li className='!w-full'>
                       <Link to="/categories">    {/*link to  another adding a page */}
                         <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 flex gap-3'>
                             {/* Following 1st span is added for the Pointing a dot for subbranch  and other one Dairy Products  */}
                             <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{" "}
                             <span className='!text-[#ededea] text-sm italic '>Dairy Products</span>
                         </Button>   
                        </Link>
                      </li>

                      <li className='!w-full'>
                      <Link to="/categories/fuits">   {/*link to  another adding a page */}
                          <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 gap-3'>
                            {/* Following 1st span is added for the Pointing a dot for subbranch  and other Fruits   */}
                            <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{"  "}
                            <span className='!text-[#ededea] text-sm italic '> Fruits </span>
                          </Button> 
                        </Link>                     
                      </li>

                      <li className='!w-full'>
                         <Link to="/categories/vegetables">  {/*link to  another adding a page */}
                          <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 gap-3'>
                            {/* Following 1st span is added for the Pointing a dot for subbranch  and other one Vegetables  */}
                           <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{"  "}
                           <span className='!text-[#ededea] text-sm italic '>Vegetables </span>
                         </Button>  
                         </Link>
                                             
                      </li>

                       <li className='!w-full'>
                        <Link to="/categories/grocery">   {/*link to  another adding a page */}
                         <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 gap-3'>
                             {/* Following 1st span is added for the Pointing a dot for subbranch  and other one Grocerys  */}
                            <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{"  "}
                            <span className='!text-[#ededea] text-sm italic '>Grocery </span>
                          </Button> 
                        </Link>                     
                      </li>

                      <li className='!w-full'>
                      <Link to="/categories/snacks">   {/*link to  another adding a page */}
                        <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 gap-3'>
                          {/* Following 1st span is added for the Pointing a dot for subbranch  and other one Snacks  */}
                           <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{"  "}
                           <span className='!text-[#ededea] text-sm italic '>Snacks</span>
                        </Button> 
                        </Link>                     
                      </li>

                      <li className='!w-full'>
                       <Link to="/categories/drinks">   {/*link to  another adding a page */}
                        <Button className='!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full !text-[14px] !font-[300] !pl-9 gap-3'>
                          {/* Following 1st span is added for the Pointing a dot for subbranch  and other one Drink  */}
                           <span className='block w-[7px] h-[5px] rounded-full bg-[rgba(255,255,255,0.47)]'></span>{"  "}
                          <span className='!text-[#ededea] text-sm italic '>Drinks </span>
                        </Button> 
                        </Link>                     
                      </li>
                      
                    </ul>
                   </Collapse>


                </li>
            </ul>
                                       

                                                    {/* Orders Creation for side bar */}
            <ul className='mt-4'>
                <li>
                <Link to="/orders">    {/*link to  another adding a page */}
                  <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgb(255,255,255)] !font-[500] items-center !py-2 hover:!bg-[#18320e]'> 
                     <FaShoppingBag className='text-[16px] !text-[rgb(255,255,255)]' /> 
                     <span className='text-[rgb(255,255,255)] text-[16px]'>Orders</span>
                  </Button>
                </Link>
                </li>
            </ul>
                                                   
                                                      {/* Logout creation   */}
            <ul className='mt-4'>
                <li>
                <Link to="/logout">    {/*link to  another adding a page */}
                <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgb(255,255,255)] !font-[500] items-center !py-2 hover:!bg-[#18320e]'> 
                    <IoLogOut className='text-[16px] !text-[rgb(255,255,255)]' /> 
                  <span className='text-[rgb(255,255,255)] text-[16px]'>Logout</span>
                </Button>
                </Link>
              </li>
            </ul>



         








          </div>
        
        
        
        </>
    )
}
export default Sidebar;