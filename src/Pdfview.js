import React from 'react'
import { jsPDF } from "jspdf";
import fadhel from './fadhel.jpeg'


function Pdfview() {
   const  pdfGenerate =()=>{
        var doc = new jsPDF('landscape','px','a4',false);
            doc.addImage(fadhel,'JPEG',65,20,500,400);
            doc.addPage()
    }

    return (
        <div style={{textAlign:'center'}}><br/>
            {pdfGenerate}
        </div>
    )
}

export default Pdfview
