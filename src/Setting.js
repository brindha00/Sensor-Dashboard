import React from 'react'
import './Setting.css';
import { FaUsers } from "react-icons/fa";
// import { TextField } from '@mui/material'; 
import image from  '../src/img/xyma_logo.png';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


function Setting() {
  return (
    <div className='main'>
     
      <div className='sub'> 
      <h2>Personal detail</h2></div>
      <div className='imagee'>
      <img src={image}  alt="image" style={{ width: '100px', height: '50px' }}/>
      </div>
      <div className='sub1'>
        <div className='sub2'></div>
        <div className='sub3'>
          <h3> Name XXXXXX</h3>
        </div>
        <div className='sub4'>
          <h3> mail xxx@gmail.com</h3>
        </div>
        <div className='sub5'>
          <div className='sub6'>
            <h3>ID 456778</h3>
          </div>
          <div className='sub7'>
            <h3> Mobile No 000000000</h3>
          </div>
        </div>
       
      </div>
      <div className='line'></div>
      <div className='empty'>
        <div className='top'><h2>Contact us</h2></div>
        <div className='line1'></div>
        <div className='user'>
        <FaUsers className='value-icon' />
        </div>
        {/* <TextField>
        
        <input type="text" value={TextField}
        // onChange={handleChange}
        placeholder="Enter text"
      />
      <p>You typed: {TextField}</p>
        </div> */}
        {/* </TextField> */}
        <div className='TextBox'>
        <textarea  rows="8" cols="50">Text message...
        </textarea></div>
        <div className='button'>
         <button>send</button>
        </div>
        <div className='end'>
          <div className='end1'>
          <IoMdMail />
          <div className='end11'>
            xxx@gmail.com</div></div>
          <div className='end2'>
          <FaPhoneAlt />
          <div className='end22'>
           00000000</div></div>
           <div className='end3'>
            <TbWorld/>
            <div className='end33'>
            www.xxx.com
           </div></div>

        </div>
      </div>
      
      
    </div>
  )
}

export default Setting