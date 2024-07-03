import React from 'react'
import '../src/head.css'
import  { BsPersonCircle}from 'react-icons/bs'

function Header() {
  return (
    <div className='header'>
    {/* <div className='menu-icon'></div> */}
     <div className='header-left'>
     <BsPersonCircle className='icon'/>
    <span>XYMA</span>

    </div>
    </div>
  )
}

export default Header;