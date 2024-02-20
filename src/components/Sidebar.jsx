import React, { useState } from "react";
import {LayoutDashboard,Menu,UserCircle}from "lucide-react"
import LOGO  from "../assets/images/LOGO.png"
import { NavLink } from "react-router-dom";

function Sidebar({children}){
  const [expanded,setExpanded] = useState(true)

  const menuItem = [{
    path:'/',
    name:"Dashboard",
    icon:<LayoutDashboard size={20}/>
  },{
    path:'/profile',
    name:"Profile",
    icon:<UserCircle size={20}/>
  },{
    path:'/about',
    name:"About",
    icon:<LayoutDashboard size={20}/>
  }
]
  return(
    <div className="flex h-screen">
    <div className={`bg-[#2563eb] border-r text-white h-full w-1/6 ${expanded?"w-36 mr-2":"w-20 mr-4"}`}>
    <div className="flex items-center pt-6 pl-3">
    <img src={LOGO} className={`overflow-hidden transition-all ${expanded?"w-36 mr-2":"w-0 mr-0"}`}/>
    <button onClick={()=> setExpanded(curr=>!curr)} className="p-1.5 mb-1.5 ">{expanded ? <Menu/>:<Menu/>}</button> 
    </div>
     {
      menuItem.map((item,index)=>(
       <NavLink to = {item.path} key={index} className="flex text-white pt-1.5 pb-1.5 pl-4 pr-4 gap-4 transition-all hover:bg-[#1d4ed8] hover:transition-all" activeclassname = 'bg-[#1d4ed8] text-white'>
        <div className="">{item.icon}</div>
        <div className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3":"w-0"}`}>{item.name}</div>
       </NavLink>
      ))
     }
    </div> 
    <main className="w-full p-6">{children}</main>
    </div>
  )
}
export default Sidebar;