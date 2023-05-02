import React from "react";
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
//import Axios from 'axios';
import H from './pages/home.js'
import Tickets from './components/admin/admindashboard'
import Login from './components/Login'
import Admin from './components/admin/AdminPage.js'
function App() {

  // learn withCredentials in Axios 
  //Axios.defaults.withCredentials=true;
  return (
    <>
    <Router>
  
      <Routes>
       <Route path="/" element={<H />}></Route>
       <Route path="/tickets" element={<Tickets />}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/Admin" element={<Admin />}></Route>


      </Routes>

    </Router>
    </>
  );
}

export default App;
