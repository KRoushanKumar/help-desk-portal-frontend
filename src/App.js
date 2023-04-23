import React from "react";
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
//import Axios from 'axios';
import H from './pages/home.js'
function App() {

  // learn withCredentials in Axios 
  //Axios.defaults.withCredentials=true;
  return (
    <>
    <Router>
  
      <Routes>
       <Route path="/" element={<H />}></Route>

      </Routes>

    </Router>
    </>
  );
}

export default App;
