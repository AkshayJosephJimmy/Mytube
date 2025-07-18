import React, {  useState } from 'react';
import { useContext } from 'react';
import { SideBarContext } from '../utils/toggelContext';
import { Link } from 'react-router-dom';
import { IoReorderThree } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";


function Header(){

    const {isSideBar,toggleSideBar}=useContext(SideBarContext);
    


    return(
       <div className="flex justify-between items-center p-4 bg-amber-50 text-black h-25 shadow-md">

        <div className='flex gap-3'>

        <IoReorderThree className="size-7" onClick={toggleSideBar}/>
        <h1 className='font-bold text-2xl'><span className='text-red-600'>My</span>tube</h1>
        </div>
        <div className='flex'>

        <input type="text" className=" border rounded-md p-0.5" placeholder='search'></input>
        <CiSearch className="size-7 text-black " />
        </div>
        <ul className="flex space-x-4">
            <Link to={'/'}><IoMdHome className='size-7'/></Link>
            
            <li><MdOutlineAccountCircle className="size-7 " /><span>sign in</span></li>
            
        </ul>
       </div>
        
    )
}
export default Header;