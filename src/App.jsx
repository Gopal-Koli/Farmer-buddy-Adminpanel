import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Page/Dashboard/index.jsx';
import Header from '../src/Components/Header/index.jsx';
import Sidebar from './Components/Sidebar/index.jsx';
import { createContext, useState } from 'react';
import Login from './Page/Dashboard/Login/index.jsx'
import SignUp from './Page/Dashboard/SignUp/index.jsx';
import Products from './Page/Products/index.jsx';
import AddProduct from './Page/Products/addProduct.jsx';


import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoCloseSharp } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import HomeSliderBanners from './Page/HomeSliderBanners/index.jsx';
import AddHomeSlide from './Page/HomeSliderBanners/addHomeSlide.jsx';
import CategoryList from './Page/Categegory/index.jsx';
import AddCategory from './Page/Categegory/addCategory.jsx';
import Users from './Page/Users/index.jsx';
import Orders from './Page/Orders/index.jsx';
import ForgotPassword from './Page/ForgotPassword/index.jsx';
import VerifyAccount from './Page/VerifyAccount/index.jsx';
import ChangePassword from './Page/ChangePassword/index.jsx';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = createContext();
function App() {

  const [isLogin, setIslogin] = useState(false);


  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  //for the upload products or add products
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    opem: false,
    model: ''

  });




  // Define the router with the routes
  const router = createBrowserRouter([
    {
      path: "/",

      element: (
        <> <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className="sidebarWrapper w-[18%]">
              <Sidebar />
            </div>
            <div className="contentRight py-4 px-4 w-[82%]">
              <Dashboard />
            </div>
          </div>


        </section>
        </>
      )
    },
    // Login page Path Creation
    {
      path: "/login",

      element: (
        <>
          <Login />

        </>
      )
    },


 // forgot password page Path Creation

    {
      path: "/forgot-password",

      element: (
        <>
          <ForgotPassword />

        </>
      )
    },


     // Verify acoount creation OTP

     {
      path: "/verify-account",

      element: (
        <>
          <VerifyAccount />

        </>
      )
    },

       // change password page path 

       {
        path: "/change-password",
  
        element: (
          <>
            <ChangePassword/>
  
          </>
        )
      },

    //Register page Path Creation
    {
      path: "/sign-up",

      element: (
        <>
          <SignUp />

        </>
      )
    },


    //Products Path Creation
    {
      path: "/products",

      element: (
        <> <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className="sidebarWrapper w-[18%]">
              <Sidebar />
            </div>
            <div className="contentRight py-4 px-4 w-[82%]">
              <Products />
            </div>
          </div>


        </section>
        </>
      )
    },

    //Upload Products Path Creation
    {
      path: "/product/upload",

      element: (
        <>
          <AddProduct />

        </>
      )
    },


    //Upload home slideer list path
    {
      path: "/homeSlider/list",

      element: (
        <> <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className="sidebarWrapper w-[18%]">
              <Sidebar />
            </div>
            <div className="contentRight py-4 px-4 w-[82%]">
              < HomeSliderBanners />
            </div>
          </div>


        </section>
        </>
      )
    },

    //Upload category list path  
    {
      path: "/category/list",

      element: (
        <> <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className="sidebarWrapper w-[18%]">
              <Sidebar />
            </div>
            <div className="contentRight py-4 px-4 w-[82%]">
              < CategoryList />
            </div>
          </div>


        </section>
        </>
      )
    },


//Path Creation for users 
    {
      path: "/users",

      element: (
        <> <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className="sidebarWrapper w-[18%]">
              <Sidebar />
            </div>
            <div className="contentRight py-4 px-4 w-[82%]">
              < Users />
            </div>
          </div>


        </section>
        </>
      )
    },


    //Path Creation for Orders
    {
      path: "/orders",

      element: (
        <> <section className='main'>
          <Header />
          <div className='contentMain flex'>
            <div className="sidebarWrapper w-[18%]">
              <Sidebar />
            </div>
            <div className="contentRight py-4 px-4 w-[82%]">
              < Orders />
            </div>
          </div>


        </section>
        </>
      )
    },



  ]);




  const values = {
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setIslogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,

  };

  return (
    <>
      <MyContext.Provider value={values}>
        {/* Use RouterProvider to render the router */}
        <RouterProvider router={router} />





        {/* Products Upload Panel Creations.............. */}
        <Dialog
          fullScreen
          open={isOpenFullScreenPanel.open}
          onClose={() => setIsOpenFullScreenPanel({
            open: false

          })}

          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setIsOpenFullScreenPanel({
                  open: false

                })}
                aria-label="close"
              >
                <IoCloseSharp className='text-grey-800 border border-black' />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className='text-gray-800'> {isOpenFullScreenPanel?.model}</span>
              </Typography>

            </Toolbar>
          </AppBar>
          {/* for  opening a add Product panel  */}

          {
            isOpenFullScreenPanel?.model === "Add Product" && <AddProduct />
          }

          {/* for  opening a add Home Slide Banners  panel  */}
          {
            isOpenFullScreenPanel?.model === "Add Home Slide" && <AddHomeSlide />
          }
          {/* for  opening a Peroduct categy  panel  */}
          {
            isOpenFullScreenPanel?.model === "Add New Category" && <AddCategory />
          }




        </Dialog>



      </MyContext.Provider>
    </>

  );
}

export default App;
export { MyContext };