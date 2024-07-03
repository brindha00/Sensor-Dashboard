import { useState } from 'react';
import './App.css';
import Home from './Home';
import Sidebar from '../src/Sidebar';
import Header from '../src/Header';
import Graph from './Graph';
import Dgraph from './Dgraph';
import Report from './Report';
import Setting from './Setting';
import Add from './Add';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Layout from '../src/Layout';

function App() {
  // const [openSidebarToggle,setOpensidebaeToggle]=useState(false)

  // const OpenSidebar=()=>{
  //   setOpensidebaeToggle(!openSidebarToggle)
  // }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}> 
      <Route index element={<Home/>}/>
      <Route path="graph" element={<Graph/>}/>
      <Route path="report" element={<Report/>}/>
      <Route path="setting" element={<Setting/>}/>
      <Route path="add" element={<Add/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
