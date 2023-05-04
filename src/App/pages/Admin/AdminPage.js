import React from 'react'
import NavBar from '../../components/NavBar'
import Sidebar from '../../components/Sidebar'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from './Dashboard';
import About from './About';
import Employees from './Employees';
import Categories from './Categories';
import Tickets from './Tickets';
import Comments from './Comments';
function admin() {
    return (
        <>
            <header>
                
            </header>
            
            <main>
                
                <Sidebar>
                
                <Outlet/>
                </Sidebar>
                
            </main>
                


        </>
    )
}

export default admin
