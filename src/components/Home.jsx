import React from 'react'
import SideBar from './SideBar'
import Thumbnail from './Thumbnail'


function Home() {
  return (
    <div className='flex'>
        
        
        <SideBar />
            
      <h1 className="text-2xl font-bold">Welcome to MyTube</h1>
      <Thumbnail/>
      <Thumbnail/>
      <Thumbnail/>          
    </div>
  )
}

export default Home
