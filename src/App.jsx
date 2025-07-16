import React from 'react'
import Header from '/src/components/Header.jsx'
import Home from './components/Home'
import { SideBarPovider,SideBarContext } from './utils/toggelContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WatchView from './components/WatchView'
import { Provider } from 'react-redux'
 import myStore from './utils/mytubeStore'


function App() {
  return (
    <Provider store={myStore}>
    <BrowserRouter>
      <SideBarPovider>
       <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<WatchView/>} />
        
       </Routes>
      
      </SideBarPovider>
    </BrowserRouter>
    </Provider>
  )
}

export default App
