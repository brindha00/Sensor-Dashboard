import React from 'react';
import { Link } from 'react-router-dom';
import './side.css';
import image from '../src/img/xyma_logo.png';
import { BsFillHouseFill, BsGraphUp, BsBox, BsGearFill, BsBoxArrowLeft } from 'react-icons/bs';

function Sidebar() {
  return (
    <div className='side'>
      <div className='headerright'>
        <div className='logo'>
          <img src={image} alt="LOGO" style={{ width: '200px', height: '100px' }} />
        </div>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <Link to="/">
            <div className='inner-item'>
              <BsFillHouseFill className='icon'  /><h3 className='aa'>Dashboard</h3></div>
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/graph">
            <div className='inner-item'>
              <BsGraphUp className='icon' /><h3 className='bb'>Graph</h3></div>
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/report">
            <div className='inner-item'>
              <BsBox className='icon' /><h3 className='cc'>Reports</h3></div>
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to="/setting">
            <div className='inner-item'>
              <BsGearFill className='icon' /><h3 className='dd'>Settings</h3></div>
            </Link>
          </li>
        </ul>
        <div className='sidebar-list-bottom'>
          <div className='sidebar-list-items'>
          <div className='inner-items'>
            <BsBoxArrowLeft className='icon' /><h3 className='ee'>Logout</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
