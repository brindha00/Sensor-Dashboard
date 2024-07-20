import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Report.css';
import image from './img/Report.png';

const Report = () => {
  const data = [
    ["Temperature", "Sensor"],
    [78, 1],
    [67, 2],
    [88, 3],
  ];

  const handleDownloadExcel = () => {
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

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add the image on the first page
    const imgData = image;
    doc.addImage(imgData, 'PNG', 20, 20, 150, 150); // Adjust the coordinates and size as needed

    // Add a new page for the content (table)
    doc.addPage();

    // Add a title for the content page
    doc.text('Sensor Data', 20, 10);

  

    // Add a table on the second page
    doc.autoTable({
      head: [data[0]],
      body: data.slice(1),
      startY: 20,
    });

    // Save the PDF
    doc.save('sensor-data.pdf');
  };

  return (
    <div className='top1'>
      <div className='topin'>
        <h3>Excel</h3>
      </div>
      <div className='low1'>
        <div className='image'>
          <img src={image} alt="Report" style={{ width: '200px', height: '250px' }} />
          <button className='but' onClick={handleDownloadExcel}>Download Excel</button>
          <button className='but1' onClick={handleDownloadPDF}>Download PDF</button>
          <h3 className='textt'>Click below to download the Excel or PDF file</h3>
        </div>
      </div>
    </div>
  );
};

export default Report;
