import React from 'react'
import Header from '/src/components/Header.jsx'
import Home from './components/Home'
import { SideBarPovider,SideBarContext } from './utils/toggelContext'

function App() {
  return (
    <div>
      <SideBarPovider>

      <Header/>
      <Home />
      </SideBarPovider>
    </div>
  )
}

export default App
