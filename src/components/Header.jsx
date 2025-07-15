import React, {  useState } from 'react';
import { useContext } from 'react';
import { SideBarContext } from '../utils/toggelContext';

function Header(){

    const {isSideBar,toggleSideBar}=useContext(SideBarContext);
    


    return(
       <div className="flex justify-between items-center p-4 bg-amber-50 text-black">
        <p className="font-bold" onClick={toggleSideBar}>sidebar</p>
        <h1>Mytube</h1>
        <input type="text" className="border"></input>
        <ul className="flex space-x-4">
            <li>Home</li>
            <li>Trending</li>
            <li>Sign in</li>
            <li>account</li>
        </ul>
       </div>
        
    )
}
export default Header;