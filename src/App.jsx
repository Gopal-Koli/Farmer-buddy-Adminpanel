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

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoCloseSharp } from "react-icons/io5";
import Slide from '@mui/material/Slide';

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
                <IoCloseSharp className='text-white border border-x-white' />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Sound
              </Typography>
              <Button autoFocus color="inherit" onClick={() => setIsOpenFullScreenPanel({
                open: false

              })}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItemButton>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemText
                primary="Default notification ringtone"
                secondary="Tethys"
              />
            </ListItemButton>
          </List>
        </Dialog>



      </MyContext.Provider>
    </>

  );
}

export default App;
export { MyContext };