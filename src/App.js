import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Axios from 'axios';
import H from './pages/home.js'
import Dashboard from "./components/Admin/pages/Dashboard";
import Comments from "./components/Admin/pages/Comments";
import Employees from "./components/Admin/pages/Employees";
import Categories from "./components/Admin/pages/Categories";
import Tickets from "./components/Admin/pages/Tickets";
import Sidebar from "./components/Admin/Sidebar";
import About from "./components/Admin/pages/About";


import Login from './components/Login'
import Admin from './components/Admin/AdminPage.js'
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