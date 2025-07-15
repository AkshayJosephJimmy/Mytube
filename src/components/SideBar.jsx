import React from 'react'
import { SideBarContext } from '../utils/toggelContext';

function SideBar() {

   const { isSideBar,  } = React.useContext(SideBarContext);
  return (
    <div className={`bg-gray-100 h-screen ${isSideBar ? 'w-64' : 'w-16'}`} >
      <ul>
        <li className="p-2 hover:bg-gray-200">Home</li>
        <li className="p-2 hover:bg-gray-200">Trending</li>
        <li className="p-2 hover:bg-gray-200">Subscriptions</li>
        <li className="p-2 hover:bg-gray-200">Library</li>
        <li className="p-2 hover:bg-gray-200">History</li>
        <li className="p-2 hover:bg-gray-200">Your Videos</li>
        <li className="p-2 hover:bg-gray-200">Watch Later</li>
        <li className="p-2 hover:bg-gray-200">Liked Videos</li>
      </ul>
    </div>
  )
}

export default SideBar
