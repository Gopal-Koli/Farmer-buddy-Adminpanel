import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Page/Dashboard/index.jsx';
import Header from '../src/Components/Header/index.jsx';
import Sidebar from './Components/Sidebar/index.jsx';
import { createContext, useState } from 'react';
const MyContext=createContext();
function App() {

const [isSidebarOpen,setisSidebarOpen]=useState(true);
const [isLogin,setIslogin]=useState(false);

const MyContext=createContext();



  // Define the router with the routes
  const router = createBrowserRouter([
    {
      path: "/",
      
      element: (
        <> <section className='main'>
          
          <div className='contentMain flex'>
              <div className="sidebarWrapper w-[18%]">
              <Sidebar/>
          </div>
          <div className="contentRight py-4 px-4 w-[82%]">
              <Dashboard/>
          </div>
        </div>
          
          
        </section>
        </>
      ) 
    },
  ]);


  const values={
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setIslogin,
  };

  return (
    <>
     <MyContext.Provider value={ values}>
      <Header />
    
    </MyContext.Provider>
    </>

  );
}

export default App;
export {MyContext};
