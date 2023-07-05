import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import { Dashboard } from "./pages/Dashboard";

import RequireAuth from "./pages/RequireAuth";

import Appp from "./Appp";

import Routespath from "./Routespath";

import Sidebars from "./pages/Sidebars";

import Header from "./pages/Header";

import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {




  return (




   <>




   <section>




   <Header/>

       <div className="container-fluid">




      <div className="aside">  <Sidebars/> </div>




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