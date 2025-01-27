import React, { useContext, useState } from "react";
import DashboardBoxes from "../../Components/DashboardBoxes";
import { Link } from "react-router-dom";
{
  /*Add a icons in upper dashobard */
}
import { GiFarmTractor } from "react-icons/gi";
import { Badge, Button } from "@mui/material";
{
  /*i removed ,Link beacuyse Link Error is hown for ract dom router  */
}
import { FaPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
{
  /*Selecter to add filter ......#3 1:41:17 remaing */
}
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
{
  /*for chart */
}
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MyContext } from "../../App";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

{
  /*Added a Dashobatd function */
}
const Dashboard = () => {
  const context = useContext(MyContext);

  {
    /*Sub Table open Functionn on arrow click of the main display table */
  }

  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);
  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else {
      setIsOpenOrderdProduct(index);
    }
  };

  {
    /*Selecter to add filter ......remaing */
  }
  {
    /* 
const [categoryFilterVal,setcategoryFilterVal]=React.useState(10);

const handleChangeCatFilter=(event)=>{
    setcategoryFilterVal(event.target.value);
};
*/
  }

  {
    /* Total Users and Toatl Slaes Line Graph Data Means Months and Conts of the sales and users................ */
  }

  const [chart1Data, setChat1Data] = useState([
    {
      name: "JAN",
      Total_Sales: 4000,
      Total_Users: 2400,
      amt: 2400,
    },
    {
      name: "FEB",
      Total_Sales: 3000,
      Total_Users: 1398,
      amt: 2210,
    },
    {
      name: "MAR",
      Total_Sales: 2000,
      Total_Users: 9800,
      amt: 2290,
    },
    {
      name: "APR",
      Total_Sales: 2780,
      Total_Users: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      Total_Sales: 1890,
      Total_Users: 4800,
      amt: 2181,
    },
    {
      name: "JUNE",
      Total_Sales: 2390,
      Total_Users: 3800,
      amt: 2500,
    },
    {
      name: "JULY",
      Total_Sales: 3490,
      Total_Users: 4300,
      amt: 2100,
    },
    {
      name: "AUG",
      Total_Sales: 4000,
      Total_Users: 2400,
      amt: 2400,
    },
    {
      name: "SEP",
      Total_Sales: 3000,
      Total_Users: 1398,
      amt: 2210,
    },
    {
      name: "OCT",
      Total_Sales: 2000,
      Total_Users: 9800,
      amt: 2290,
    },
    {
      name: "NOV",
      Total_Sales: 2780,
      Total_Users: 3908,
      amt: 2000,
    },
    {
      name: "DEC",
      Total_Sales: 1890,
      Total_Users: 4800,
      amt: 2181,
    },
  ]);

  return (
    <>
      {" "}
      {/*Created a main div frame and give a border black for visible */}
      <div className="w-full p-5 border bg-slate-100 border-[rgba(0,0,0,0.1)] gap-8 mt-12 mb-5 justify-between rounded-lg">
        <div className="info flex items-center ">
          {/*Main Text and Tractor symbol */}
          <h1 className="text-[50px] b">
            {" "}
            Welcome Farmer to our Farmers buddy Website...
          </h1>
          <GiFarmTractor className="text-[55px]" />
        </div>

        {/*Created a div for small text */}
        <div>
          <h4 className="text-[25px] font-[300] text-[rgba(0,0,0,0.1)]">
            Bringing technology to your fields—because you deserve the best
          </h4>
        </div>

        {/*for button creation in this dashboard */}
        <Button
          className="btn-green !capitalize text-[20px] gap-x-3"
          onClick={() =>
            context.setIsOpenFullScreenPanel({
              open: true,
              model: "Add Product",
            })
          }
        >
          <FaPlus className="" />
          Add Products
        </Button>
      </div>
      <DashboardBoxes />
      <div className="card my-4">
        {/* Table added from here for product Ordera  */}
        <div className="flex items-center justify-between px-3 py-4">
          <h2 className="text-[20px] font-[500]"> Products</h2>
        </div>
        {/*Selecter to add filter .............remaing */}
        {/* 
                <div className='flex items-center w-full px-5'>
                    <div className='col w-[25%]'>
                        <h4 className='font-[600] text-[15px]'>Category</h4>
                        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

                    </div>
                </div>


*/}

        {/* Created a table for the Products .........................................................................  */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-900 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4 py-3" width="10%">
                  <div className="w-[60px]"></div>
                </th>
                <th scope="col" className="px-4 py-3">
                  Products
                </th>
                <th scope="col" className="px-4 py-3">
                  category
                </th>
                <th scope="col" className="px-4 py-3">
                  Quntity
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>
                <th scope="col" className="px-4 py-3">
                  Rating
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 1st Row OF the Product Table ......................*/}
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="p-4 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td>
                  {" "}
                  {/* 1st td For Product */}
                  <div className="flex items-center gap-4 ">
                    {/* Div For Image  */}
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/45745">
                        {" "}
                        {/* Link Created for the image */}
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj04wBAQ1cqKh1NqtkaOF-qOdC1M0aZ4eHnNkh_HtL8aYYKaiocn2OYAWig-3309bvBk&usqp=CAU"
                          className="w-full group-hover:scale-110 transition-all"
                        ></img>
                      </Link>
                    </div>
                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}
                    <div className="info w-[75%] leading-5 hover:text-blue-800 ">
                      <Link to="/product/45745">
                        <h3 className="font-[700] text-[14px]">
                          {" "}
                          Fresh red Tomato Local Organically 1-kg
                        </h3>
                        <p className="text-[14px] block w-[600px]">
                          Our organic tomatoes are naturally grown without the
                          use of harmful pesticides or synthetic fertilizers.
                          Packed with vibrant flavor, rich nutrients, and a
                          juicy texture, they’re perfect for salads, sauces, and
                          everyday cooking.
                        </p>
                      </Link>
                    </div>
                  </div>
                </td>

                {/* td  for categorie */}
                <td className="p-4 py-2">
                  <h3 className="font-[700] text-[14px]"> Vegetable</h3>
                </td>

                {/* td  for Quntity */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4">
                    <span className="price text-[15px] font-[600]">Per Kg</span>
                  </div>
                </td>

                {/* td  for Price */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4 flex-col">
                    <span className="oldPrice line-through text-[15px] font-[600] ">
                      {" "}
                      {/* Span for cut price */}
                      80 Rs
                    </span>

                    <span className="price text-[15px]  text-[blue] font-[600]">
                      {" "}
                      {/* Span for Our  price */}
                      50 Rs
                    </span>
                  </div>
                </td>
                {/* td  for Rating */}
                <td className="p-4 py-2">
                  <Stack spacing={1}>
                    {" "}
                    {/* Stack is a  Rating tag */}
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </td>

                {/* To Created a button  for Edit View and romve product  */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-1">
                    {/* To Created a button  for Edit  product and Tooltip is added for the showing the name on button  */}
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaEdit className="text-[30px] text-black-400" />
                      </Button>
                    </Tooltip>

                    {/* To Created a button for View product */}
                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="text-[25px] text-black" />
                      </Button>
                    </Tooltip>

                    {/* To Created a button for Remove product */}
                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px] !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <MdDeleteForever className="text-[25px] text-red-700" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              {/* 2nd Row OF the Product Table ......................*/}

              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="p-4 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td>
                  {" "}
                  {/* 1st td For Product */}
                  <div className="flex items-center gap-4 ">
                    {/* Div For Image  */}
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/45745">
                        {" "}
                        {/* Link Created for the image */}
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj04wBAQ1cqKh1NqtkaOF-qOdC1M0aZ4eHnNkh_HtL8aYYKaiocn2OYAWig-3309bvBk&usqp=CAU"
                          className="w-full group-hover:scale-110 transition-all"
                        ></img>
                      </Link>
                    </div>
                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}
                    <div className="info w-[75%] leading-5 hover:text-blue-800 ">
                      <Link to="/product/45745">
                        <h3 className="font-[700] text-[14px]">
                          {" "}
                          Fresh red Tomato Local Organically 1-kg
                        </h3>
                        <p className="text-[14px] block w-[600px]">
                          Our organic tomatoes are naturally grown without the
                          use of harmful pesticides or synthetic fertilizers.
                          Packed with vibrant flavor, rich nutrients, and a
                          juicy texture, they’re perfect for salads, sauces, and
                          everyday cooking.
                        </p>
                      </Link>
                    </div>
                  </div>
                </td>

                {/* td  for categorie */}
                <td className="p-4 py-2">
                  <h3 className="font-[700] text-[14px]"> Vegetable</h3>
                </td>

                {/* td  for Quntity */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4">
                    <span className="price text-[15px] font-[600]">Per Kg</span>
                  </div>
                </td>

                {/* td  for Price */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4 flex-col">
                    <span className="oldPrice line-through text-[15px] font-[600] ">
                      {" "}
                      {/* Span for cut price */}
                      80 Rs
                    </span>

                    <span className="price text-[15px]  text-[blue] font-[600]">
                      {" "}
                      {/* Span for Our  price */}
                      50 Rs
                    </span>
                  </div>
                </td>
                {/* td  for Rating */}
                <td className="p-4 py-2">
                  <Stack spacing={1}>
                    {" "}
                    {/* Stack is a  Rating tag */}
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </td>

                {/* To Created a button  for Edit View and romve product  */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-1">
                    {/* To Created a button  for Edit  product and Tooltip is added for the showing the name on button  */}
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaEdit className="text-[30px] text-black-400 " />
                      </Button>
                    </Tooltip>

                    {/* To Created a button  for View  product */}

                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="text-[25px] text-black " />
                      </Button>
                    </Tooltip>

                    {/* To Created a button  for Remove  product */}
                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <MdDeleteForever className="text-[25px] text-red-700 " />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              {/* 3rd Row OF the Product Table ......................*/}

              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="p-4 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td>
                  {" "}
                  {/* 1st td For Product */}
                  <div className="flex items-center gap-4 ">
                    {/* Div For Image  */}
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/45745">
                        {" "}
                        {/* Link Created for the image */}
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj04wBAQ1cqKh1NqtkaOF-qOdC1M0aZ4eHnNkh_HtL8aYYKaiocn2OYAWig-3309bvBk&usqp=CAU"
                          className="w-full group-hover:scale-110 transition-all"
                        ></img>
                      </Link>
                    </div>
                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}
                    <div className="info w-[75%] leading-5 hover:text-blue-800 ">
                      <Link to="/product/45745">
                        <h3 className="font-[700] text-[14px]">
                          {" "}
                          Fresh red Tomato Local Organically 1-kg
                        </h3>
                        <p className="text-[14px] block w-[600px]">
                          Our organic tomatoes are naturally grown without the
                          use of harmful pesticides or synthetic fertilizers.
                          Packed with vibrant flavor, rich nutrients, and a
                          juicy texture, they’re perfect for salads, sauces, and
                          everyday cooking.
                        </p>
                      </Link>
                    </div>
                  </div>
                </td>

                {/* td  for categorie */}
                <td className="p-4 py-2">
                  <h3 className="font-[700] text-[14px]"> Vegetable</h3>
                </td>

                {/* td  for Quntity */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4">
                    <span className="price text-[15px] font-[600]">Per Kg</span>
                  </div>
                </td>

                {/* td  for Price */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4 flex-col">
                    <span className="oldPrice line-through text-[15px] font-[600] ">
                      {" "}
                      {/* Span for cut price */}
                      80 Rs
                    </span>

                    <span className="price text-[15px]  text-[blue] font-[600]">
                      {" "}
                      {/* Span for Our  price */}
                      50 Rs
                    </span>
                  </div>
                </td>
                {/* td  for Rating */}
                <td className="p-4 py-2">
                  <Stack spacing={1}>
                    {" "}
                    {/* Stack is a  Rating tag */}
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </td>

                {/* To Created a button  for Edit View and romve product  */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-1">
                    {/* To Created a button  for Edit  product and Tooltip is added for the showing the name on button  */}
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaEdit className="text-[30px] text-black-400 " />
                      </Button>
                    </Tooltip>

                    {/* To Created a button  for View  product */}

                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="text-[25px] text-black " />
                      </Button>
                    </Tooltip>

                    {/* To Created a button  for Remove  product */}
                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <MdDeleteForever className="text-[25px] text-red-700 " />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              {/* 4th Row OF the Product Table ......................*/}

              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="p-4 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td>
                  {" "}
                  {/* 1st td For Product */}
                  <div className="flex items-center gap-4 ">
                    {/* Div For Image  */}
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/45745">
                        {" "}
                        {/* Link Created for the image */}
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj04wBAQ1cqKh1NqtkaOF-qOdC1M0aZ4eHnNkh_HtL8aYYKaiocn2OYAWig-3309bvBk&usqp=CAU"
                          className="w-full group-hover:scale-110 transition-all"
                        ></img>
                      </Link>
                    </div>
                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}
                    <div className="info w-[75%] leading-5 hover:text-blue-800 ">
                      <Link to="/product/45745">
                        <h3 className="font-[700] text-[14px]">
                          {" "}
                          Fresh red Tomato Local Organically 1-kg
                        </h3>
                        <p className="text-[14px] block w-[600px]">
                          Our organic tomatoes are naturally grown without the
                          use of harmful pesticides or synthetic fertilizers.
                          Packed with vibrant flavor, rich nutrients, and a
                          juicy texture, they’re perfect for salads, sauces, and
                          everyday cooking.
                        </p>
                      </Link>
                    </div>
                  </div>
                </td>

                {/* td  for categorie */}
                <td className="p-4 py-2">
                  <h3 className="font-[700] text-[14px]"> Vegetable</h3>
                </td>

                {/* td  for Quntity */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4">
                    <span className="price text-[15px] font-[600]">Per Kg</span>
                  </div>
                </td>

                {/* td  for Price */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4 flex-col">
                    <span className="oldPrice line-through text-[15px] font-[600] ">
                      {" "}
                      {/* Span for cut price */}
                      80 Rs
                    </span>

                    <span className="price text-[15px]  text-[blue] font-[600]">
                      {" "}
                      {/* Span for Our  price */}
                      50 Rs
                    </span>
                  </div>
                </td>
                {/* td  for Rating */}
                <td className="p-4 py-2">
                  <Stack spacing={1}>
                    {" "}
                    {/* Stack is a  Rating tag */}
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </td>

                {/* To Created a button  for Edit View and romve product  */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-1">
                    {/* To Created a button  for Edit  product and Tooltip is added for the showing the name on button  */}
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaEdit className="text-[30px] text-black-400 " />
                      </Button>
                    </Tooltip>

                    {/* To Created a button  for View  product */}

                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="text-[25px] text-black " />
                      </Button>
                    </Tooltip>

                    {/* To Created a button  for Remove  product */}
                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <MdDeleteForever className="text-[25px] text-red-700 " />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              {/* 5th Row OF the Product Table ......................*/}

              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="p-4 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td>
                  {" "}
                  {/* 1st td For Product */}
                  <div className="flex items-center gap-4 ">
                    {/* Div For Image  */}
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/45745">
                        {" "}
                        {/* Link Created for the image */}
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj04wBAQ1cqKh1NqtkaOF-qOdC1M0aZ4eHnNkh_HtL8aYYKaiocn2OYAWig-3309bvBk&usqp=CAU"
                          className="w-full group-hover:scale-110 transition-all"
                        ></img>
                      </Link>
                    </div>
                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}
                    <div className="info w-[75%] leading-5 hover:text-blue-800 ">
                      <Link to="/product/45745">
                        <h3 className="font-[700] text-[14px]">
                          {" "}
                          Fresh red Tomato Local Organically 1-kg
                        </h3>
                        <p className="text-[14px] block w-[600px]">
                          Our organic tomatoes are naturally grown without the
                          use of harmful pesticides or synthetic fertilizers.
                          Packed with vibrant flavor, rich nutrients, and a
                          juicy texture, they’re perfect for salads, sauces, and
                          everyday cooking.
                        </p>
                      </Link>
                    </div>
                  </div>
                </td>

                {/* td  for categorie */}
                <td className="p-4 py-2">
                  <h3 className="font-[700] text-[14px]"> Vegetable</h3>
                </td>

                {/* td  for Quntity */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4">
                    <span className="price text-[15px] font-[600]">Per Kg</span>
                  </div>
                </td>

                {/* td  for Price */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4 flex-col">
                    <span className="oldPrice line-through text-[15px] font-[600] ">
                      {" "}
                      {/* Span for cut price */}
                      80 Rs
                    </span>

                    <span className="price text-[15px]  text-[blue] font-[600]">
                      {" "}
                      {/* Span for Our  price */}
                      50 Rs
                    </span>
                  </div>
                </td>
                {/* td  for Rating */}
                <td className="p-4 py-2">
                  <Stack spacing={1}>
                    {" "}
                    {/* Stack is a  Rating tag */}
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </td>

                {/* To Created a button  for Edit View and romve product  */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-1">
                    {/* To Created a button  for Edit  product and Tooltip is added for the showing the name on button  */}
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaEdit className="text-[30px] text-black-400 " />
                      </Button>
                    </Tooltip>

                    {/* To Created a button  for View  product */}

                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="text-[25px] text-black " />
                      </Button>
                    </Tooltip>

                    {/* To Created a button  for Remove  product */}
                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <MdDeleteForever className="text-[25px] text-red-700 " />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              {/* 6th Row OF the Product Table ......................*/}

              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="p-4 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td>
                  {" "}
                  {/* 1st td For Product */}
                  <div className="flex items-center gap-4 ">
                    {/* Div For Image  */}
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/45745">
                        {" "}
                        {/* Link Created for the image */}
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj04wBAQ1cqKh1NqtkaOF-qOdC1M0aZ4eHnNkh_HtL8aYYKaiocn2OYAWig-3309bvBk&usqp=CAU"
                          className="w-full group-hover:scale-110 transition-all"
                        ></img>
                      </Link>
                    </div>
                    {/* Following 1st div for name and Description ofn the product  and also creatd link on that */}
                    <div className="info w-[75%] leading-5 hover:text-blue-800 ">
                      <Link to="/product/45745">
                        <h3 className="font-[700] text-[14px]">
                          {" "}
                          Fresh red Tomato Local Organically 1-kg
                        </h3>
                        <p className="text-[14px] block w-[600px]">
                          Our organic tomatoes are naturally grown without the
                          use of harmful pesticides or synthetic fertilizers.
                          Packed with vibrant flavor, rich nutrients, and a
                          juicy texture, they’re perfect for salads, sauces, and
                          everyday cooking.
                        </p>
                      </Link>
                    </div>
                  </div>
                </td>

                {/* td  for categorie */}
                <td className="p-4 py-2">
                  <h3 className="font-[700] text-[14px]"> Vegetable</h3>
                </td>

                {/* td  for Quntity */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4">
                    <span className="price text-[15px] font-[600]">Per Kg</span>
                  </div>
                </td>

                {/* td  for Price */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-4 flex-col">
                    <span className="oldPrice line-through text-[15px] font-[600] ">
                      {" "}
                      {/* Span for cut price */}
                      80 Rs
                    </span>

                    <span className="price text-[15px]  text-[blue] font-[600]">
                      {" "}
                      {/* Span for Our  price */}
                      50 Rs
                    </span>
                  </div>
                </td>
                {/* td  for Rating */}
                <td className="p-4 py-2">
                  <Stack spacing={1}>
                    {" "}
                    {/* Stack is a  Rating tag */}
                    <Rating
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </td>

                {/* To Created a button  for Edit View and romve product  */}
                <td className="p-4 py-2">
                  <div className="flex items-center gap-1">
                    {/* To Created a button  for Edit  product and Tooltip is added for the showing the name on button  */}
                    <Tooltip title="Edit Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaEdit className="text-[30px] text-black-400 " />
                      </Button>
                    </Tooltip>

                    {/* To Created a button  for View  product */}

                    <Tooltip title="View Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <FaRegEye className="text-[25px] text-black " />
                      </Button>
                    </Tooltip>

                    {/* To Created a button  for Remove  product */}
                    <Tooltip title="Remove Product" placement="top">
                      <Button className="!w-[35px] !h-[35px]  !border-[rgba(0,0,0,0.7)] !rounded-full hover:bg-[#ccc] !min-w-[35px]">
                        <MdDeleteForever className="text-[25px] text-red-700 " />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-end pt-4 pb-4">
            <Pagination count={10} color="primary" />
          </div>
        </div>

        {/*  recents Order Headline*/}
        <div className="flex items-center justify-between px-3 py-4">
          <h2 className="text-[20px] font-[500] text-[red]"> Reccent Orders</h2>
        </div>

        {/* Created a table for Recnets Order.................................................................................*/}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-900 dark:text-gray-400">
              <tr>
                {/*  Heading Starts Prom here of main Table ....... */}

                <th scope="col" className="px-4 py-3">
                  &nbsp;
                </th>
                <th scope="col" className="px-4 py-3 whitespace-nowrap">
                  Order ID
                </th>
                <th scope="col" className="px-4 py-3  whitespace-nowrap">
                  Payment Id
                </th>
                <th scope="col" className="px-4 py-3  whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-4 py-3  whitespace-nowrap">
                  Phone number
                </th>
                <th scope="col" className="px-4 py-3  whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="px-4 py-3  whitespace-nowrap">
                  Pincode
                </th>
                <th scope="col" className="px-4 py-3  whitespace-nowrap">
                  Total amount
                </th>
                <th scope="col" className="px-4 py-3  whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="px-4 py-3  whitespace-nowrap">
                  User ID
                </th>
                <th scope="col" className="px-4 py-3  whitespace-nowrap">
                  Order status
                </th>
                <th scope="col" className="px-4 py-3  whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {/*  Listing The As Perr Table Heading starts From Here..*/}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-900 hover:bg-blue-100 dark:hover:bg-gray-600">
                <td className="w-4 p-4 font-[500] whitespace-nowrap">
                  <Button
                    className="!w-[40px] !h-[40px] !min-w[40px] !rounded-full !bg-white !border-[#000000]"
                    onClick={() => isShowOrderdProduct(0)}
                  >
                    {/*  up Down Aarow changin base on open close of the tbale..*/}
                    {isOpenOrderdProduct === 0 ? (
                      <FaChevronUp className="text-[18px]" />
                    ) : (
                      <FaAngleDown className="text-[18px]" />
                    )}
                  </Button>
                </td>
                {/*  order ID */}
                <td className="w-4 p-4 font-[500] whitespace-nowrap">
                  <span className="text-primary">hsdfdbsjgpadshgidgg</span>
                </td>
                {/*  Payment ID */}
                <td className="w-4 p-4 font-[500] whitespace-nowrap">
                  <span className="text-primary ">gpay-84784nsbhbfrrrfwb</span>
                </td>
                {/*  Name Of the customer  */}
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  Gopal & harsh
                </td>
                {/*  Phone Number of the Customer  */}
                <td className="px-6 py-4 font-[500] whitespace-nowrap ">
                  8433564084
                </td>
                {/*  Address of the Customer  */}
                <td className="px-6 py-4 font-[500] ">
                  <span className="block w-[300px]"></span>
                  Shree Gajanan Fortune city,A-wing Room no 403,
                  Khadavli,Kalyan,Thane.
                </td>
                {/* pincpde of the Customer Where the Customer Addres is define  */}
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  421102
                </td>
                {/*  Total Amount paid by the customer */}
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  300Rs
                </td>
                {/*  Email Id of the Customer  */}
                <td className="flex items-center px-6 py-4 text-[blue] font-[500] whitespace-nowrap">
                  harsh4430@gmail.com
                </td>
                {/* User ID OF the Customer */}
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  <span className="text-primary">#f142</span>
                </td>
                {/*  order Status*/}
                {/* This Process is pending  Work to later also this file and Compionents Batch File..................................................................  */}
                <td className="px-6 py-4 font-[500]">
                  <Badge status="pending" />
                </td>
                {/* Order Date  */}
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  15/10/2025
                </td>
              </tr>

              {/*Function call for open/close the sub table after clicking on arrow of the main table */}
              {isOpenOrderdProduct === 0 && (
                <tr>
                  {" "}
                  {/* Table in Table ........Sub table Starts from Here.........................................*/}
                  <td className="bg-[#f1f1f1] " colSpan="6">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead className="text-xs text-gray-700 uppercase bg-green-400 dark:bg-gray-900 dark:text-gray-400">
                          <tr>
                            {/*Sub Table Heading Starts From Here////// */}

                            <th
                              scope="col"
                              className="px-4 py-3 whitespace-nowrap"
                            >
                              Product ID
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3  whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3  whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3  whitespace-nowrap"
                            >
                              Quntity
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3  whitespace-nowrap"
                            >
                              Price
                            </th>

                            <th
                              scope="col"
                              className="px-4 py-3  whitespace-nowrap"
                            >
                              Sub Total
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3  whitespace-nowrap"
                            >
                              &nbsp;
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {" "}
                          {/* Sub Table Product listing starts from here ... */}
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-900 hover:bg-green-100 dark:hover:bg-gray-600">
                            {/*  Proct ID*/}
                            <td className="w-4 p-4 font-[500] whitespace-nowrap">
                              #1234
                            </td>
                            {/*  Proct ID*/}
                            <td className="w-4 p-4 font-[500] whitespace-nowrap">
                              <span className="text-primary">Tomato</span>
                            </td>
                            {/*  Image of the product */}
                            <td className="w-4 p-4 font-[500] whitespace-nowrap">
                              <img
                                src="https://images-cdn.ubuy.co.in/6521e39275d137349a5b1736-fresh-slicing-tomato-each.jpg"
                                className="w=[80px] h=[80px] object-cover rounded-md "
                              />
                            </td>
                            {/*  Quntity of the product For ex..Kg,Gm,Ltr etc*/}
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              5kg
                            </td>
                            {/*  Price of the product*/}
                            <td className="px-6 py-4 font-[500] whitespace-nowrap ">
                              230 Rs.
                            </td>
                            {/* Sub-Total Of the product*/}
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              230 Rs
                            </td>

                            {/* This Process is pending  Work to later  */}
                            <td className="px-6 py-4 font-[500]">
                              <Badge status="pending" />
                            </td>
                          </tr>
                          <tr></tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              {/* Second collam */}
            </tbody>
          </table>
        </div>

        {/* Total Users and Toatl Slaes Line Graph................ */}

        {/* Heading with Sub heading Pointers Toatl Users and Total Sales*/}
        <div className="flex items-center justify-between px-5 py-5 pb-0">
          <h2 className="text-[18px] font-[500]  ">
            {" "}
            Total Users & Toatla sales{" "}
          </h2>
        </div>

        <div className="flex items-center justify-between px-5 py-5 pt-0 gap-3">
          <span>
            <span className="flex items-center gap-1 text-[15px] ">
              <span className="block w-[10px] h-[10px] rounded-full bg-blue-700"></span>
              Total Users
            </span>

            <span className="flex items-center gap-1 text-[15px] ">
              <span className="block w-[10px] h-[10px] rounded-full bg-green-600"></span>
              Total Sales
            </span>
          </span>
        </div>
        {/* Fraph................ */}

        <div className="flex items-center justify-end pt-5 px-4">
          <LineChart
            width={1500}
            height={600}
            data={chart1Data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="none" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Total_Sales"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Total_Users"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
