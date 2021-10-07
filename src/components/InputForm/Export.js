import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Styles/InputForm.css';
/*
  On button press, this component takes the div element CVPreview and creates an image using
  Html2Canvas at scale:2 to increase quality, then passes that image to jsPDF which
  turns it into a pdf.
  The user is then prompted to save that pdf.
*/

class ExportPDF extends React.Component {
  convertToPDF(){
    const input = document.getElementById('CVPreview');
    html2canvas(input,{
      scale: 2,
    })
      .then((canvas) => {
        const image = canvas.toDataURL('img/png');
        const pdf = new jsPDF();
        pdf.addImage(image, 'JPEG', 0, 0, 210, 297);
        pdf.save('Resume.pdf');
      })
  }

  render(){
    return <button className = 'exportButton' onClick = {() => {this.convertToPDF()}}>Save PDF</button>
  }
}

export default ExportPDF;
