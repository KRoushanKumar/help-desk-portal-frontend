import React, { useState } from 'react';
import {
    FaBars,
    FaCommentAlt,
    FaTh, FaThList, FaTicketAlt, FaUserAlt, FaUsers,

} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/employees",
            name:"Employees",
            icon:<FaUsers/>
        },
        {
            path:"/categories",
            name:"Categories",
            icon:<FaThList/>
        },
        {
            path:"/tickets",
            name:"Tickets",
            icon:<FaTicketAlt/>
        },
        {
            path:"/comments",
            name:"Comments",
            icon:<FaCommentAlt/>
        },
    ]
    return (
        <div className='container'>
            <div style={{width: isOpen ? "200px" : "50px"}} className='sidebar'>
                 <div className='top_section'>
                    <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Admin</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className='bars'>
                        <FaBars onClick={toggle}/>
                    </div>
                 </div>
                 {
                    menuItem.map((item,index) => (
                        <NavLink to={item.path} key={index} className='link' activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                 }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;