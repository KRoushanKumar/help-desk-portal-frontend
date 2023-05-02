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
import Admin from './App/pages/Admin/AdminPage'
function App() {

  // learn withCredentials in Axios 
  //Axios.defaults.withCredentials=true;
  return (
    <>
      <Router>
        
          <Routes>
                <Route path="/" element={<H />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/Admin" element={<Admin />}></Route>


          </Routes>

            <Sidebar>
                      <Routes>
              
                          <Route path="/Admin/dashboard" element={<Dashboard />} />
                          <Route path="/Admin/about" element={<About />} />
                          <Route path="/Admin/employees" element={<Employees />} />
                          <Route path="/Admin/categories" element={<Categories />} />
                          <Route path="/Admin/tickets" element={<Tickets />} />
                          <Route path="/Admin/comments" element={<Comments />} />
                      </Routes>
            </Sidebar>
        
      </Router>
    </>
  );
}

export default App;