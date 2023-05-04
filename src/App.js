import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Axios from 'axios';
import H from './App/pages/home'

import Dashboard from "./App/pages/Admin/Dashboard";
import Comments from "./App/pages/Admin/Comments";
import Employees from "./App/pages/Admin/Employees";
import Categories from "./App/pages/Admin/Categories";
import Tickets from "./App/pages/Admin/Tickets";
import About from "./App/pages/Admin/About";
import Sidebar from "./App/components/Sidebar";
import Login from './App/components/Login'
import Admin from './App/pages/Admin/AdminPage';
function App() {

  // learn withCredentials in Axios 
  //Axios.defaults.withCredentials=true;
  return (
    <>
      <Router>
        
          <Routes>
                <Route path="/" element={<H />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/Admin" element={<Admin />}>
                  {/* <Sidebar> */}
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="about" element={<About />} />
                    <Route path="employees" element={<Employees />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="tickets" element={<Tickets />} />
                    <Route path="comments" element={<Comments />} />

                  {/* </Sidebar> */}
                </Route>


          </Routes>

            
        
      </Router>
    </>
  );
}

export default App;