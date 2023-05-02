import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Axios from 'axios';
import H from './pages/home.js'
import Dashboard from "./components/Admin/pages/Dashboard";
import About from "./components/Admin/pages/About";
import Comments from "./components/Admin/pages/Comments";
import Employees from "./components/Admin/pages/Employees";
import Categories from "./components/Admin/pages/Categories";
import Tickets from "./components/Admin/pages/Tickets";
import Sidebar from "./components/Admin/Sidebar";
function App() {

  // learn withCredentials in Axios 
  //Axios.defaults.withCredentials=true;
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<H />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Admin" element={<Admin />}></Route>
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;