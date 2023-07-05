import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import { Dashboard } from "./pages/Dashboard";

import RequireAuth from "./pages/RequireAuth";




import Appp from "./Appp";

import Routespath from "./Routespath";

import Sidebars from "./pages/Sidebars";

import Header from "./pages/Header";





function App(props) {

  return (

   <>

   <section>

   <Header/>




       <div className="container-fluid">

      <div className="aside">  <Sidebars/> </div>




      {/* <div className="content">

         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      </div>  */}

            </div>

     </section>

     <Routespath/>

   

    <Routes>

 

      {/* Unprotected Routes */}

      <Route path="/" element={<LoginPage />} />

      <Route path="/app" element={<Appp />} />

      <Route path="/dashboard" element={<Dashboard />} />




     






         {/* Protected Routes */}

        <Route element={<RequireAuth />}>

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}

          <Route path="/sidebars" element={<Sidebars/>} />

         

         

         

         







      </Route>

    </Routes>

    </>

  );

}




export default App;