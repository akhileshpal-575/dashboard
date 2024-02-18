import React, { createContext, useContext, useState } from 'react'
import {Menu} from 'lucide-react'
import LOGO  from "../assets/images/LOGO.png"

 const SidebarContext = createContext()

function Sidebar({children}) {
    const [expanded,setExpanded] = useState(true)
  return (
    <>
    <aside className='h-screen'>
        <nav className='h-full flex flex-col bg-[#e2e8f0] border-r shadow-sm'>
            <div className='p-4 pb-2 flex justify-between items-center'>
            <img src={LOGO} className={`overflow-hidden transition-all ${expanded?"w-36":"w-0"}`}/>
            <button onClick={()=> setExpanded(curr=>!curr)} className='p-2 mb-1.5 hover:bg-[#f1f5f9]'>
            {expanded ? <Menu/>: <Menu/>}
            </button>
            </div>
           <SidebarContext.Provider value={{expanded}}>
            <ul className='flex-1 px-3'>{children}</ul>
           </SidebarContext.Provider>
        </nav>
    </aside>
    </>
  )
}

export default Sidebar;

export function SidebarItem({ icon, text, active, alert }) {
    const {expanded} = useContext(SidebarContext)
    return (
      <li className={`relative flex items-center py-2 px-3 my-1 font-medium
        rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-300" : "hover:bg-indigo-50 text-gray-600"}`}>
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3":"w-0"}`}>{text}</span>
      </li>
    )
  } 