import React from 'react'
import { Outlet } from 'react-router-dom'
//=======import Componets=======//
import Nav from '../container/Nav'
import Header from '../container/Header'




export default function Layout() {
   return (
      <div className='gridContainer'>
         <Header/>
        
         <Nav />
         
         <div className='outlet'>
         <Outlet />         
         </div>
      </div>
   )
}
