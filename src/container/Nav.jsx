import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
//=======style=======//
import "./Nav.css"
export default function Nav() {
  return (
   <nav className='navigator'>

     <div className='navlink'>
        <NavLink to="/Depts">Долги</NavLink>
     </div>

     <div className="navlink">
         <NavLink to="/DrawingCatalog">Каталог чертежей</NavLink>
     </div>
       
     <div className="navlink">
         <NavLink to="/About">О приложении</NavLink>
     </div>
     
     <div className="navlink">
        <NavLink to="/Info">Приложения</NavLink>
     </div>
  
     
   
   </nav>
  )
}
