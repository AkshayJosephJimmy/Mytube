import React from 'react'
import Header from '/src/components/Header.jsx'
import Home from './components/Home'
import { SideBarPovider,SideBarContext } from './utils/toggelContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WatchView from './components/WatchView'


function App() {
  return (
    <BrowserRouter>
      <SideBarPovider>
       <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<WatchView/>} />
        
       </Routes>
      
      </SideBarPovider>
    </BrowserRouter>
  )
}

export default App
