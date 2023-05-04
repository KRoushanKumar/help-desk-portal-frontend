import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Outlet } from "react-router-dom";

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
