import React from 'react'
import SidebarEmployees from "../../components/SidebarEmployees";
import { Outlet } from 'react-router-dom';
function Employee() {
    return (
        <>
            <header>
                
                </header>
                
                <main>
                    
                    <SidebarEmployees>
                        <Outlet/>
                    </SidebarEmployees>
                    
                    
                    
                    
                </main>
        </>
    )
}

export default Employee
