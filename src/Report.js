import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import './Report.css';
import image from './img/Report.png';

const Report = () => {
  const handleDownload = () => {
    // Define static data
    const data = [
      ["Temperature", "Sensor"],
      [78, 1],
      [67, 2],
      [88, 3],
    ];

    // Create a worksheet
    const ws = XLSX.utils.aoa_to_sheet(data);

    // Create a workbook and add the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Generate Excel file and trigger download
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    saveAs(blob, 'example.xlsx');
  };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  };

  return (
    <div className='top1'>
      <div className='topin'>
        <h3>Excel</h3>
      </div>
      <div className='low1'>
        <div className='image'>
          <img src={image} alt="Report" style={{ width: '200px', height: '250px' }} />
          <button className='but' onClick={handleDownload}>Download</button>
          <h3 className='textt'>Click below to download the Excel file</h3>
        </div>
      </div>
    </div>
  );
};

export default Report;
