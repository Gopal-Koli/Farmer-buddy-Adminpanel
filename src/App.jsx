import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Page/Dashboard/index.jsx';
import Header from '../src/Components/Header/index.jsx';
import Sidebar from './Components/Sidebar/index.jsx';
import { createContext, useState } from 'react';
import Login from './Page/Dashboard/Login/index.jsx'
const MyContext = createContext();
function App() {

  const [isLogin, setIslogin] = useState(false);
  const [isSidebarOpen, setisSidebarOpen] = useState(true);

  const MyContext = createContext();



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
    {
      path: "/login",

      element: (
        <>
              <Login />
           


        
        </>
      )
    },
  ]);


  const values = {
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setIslogin,

  };

  return (
    <>
      <MyContext.Provider value={values}>
        {/* Use RouterProvider to render the router */}
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>

  );
}

export default App;
export { MyContext };