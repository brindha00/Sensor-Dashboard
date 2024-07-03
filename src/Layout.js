import React from 'react'
import'./Layout.css';
import Home from './Home'
import Sidebar from './Sidebar'
import Header from './Header'
import Dgraph from './Dgraph'
import Graph from './Graph'
import Report from './Report'
import Setting from './Setting'
import Add from './Add'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='grid-container'>
    <Sidebar className="side"/> 
    <div className='layout'>
    <Header className="head"/>
    {/* <Graph className="graph"/> */}
    <Outlet />
    {/* <Setting className="setting"/> */}
    {/* <Home className="home"/> */}
    </div>
  </div>
  )
}

export default Layout