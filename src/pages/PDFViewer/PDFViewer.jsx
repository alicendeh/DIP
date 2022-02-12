// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// function PDFViewer(data) {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const location = useLocation();
//   const pdf = location.state;
//   console.log(pdf);
//   const openPdf = async (data) => {
//     console.log(data);
//     try {
//       let res = await axios.put(
//         `${process.env.REACT_APP_URL}/admin/books/updateView/${data._id}`
//       );
//       console.log(res.data, "boo");
//       let pdfURL = `${process.env.REACT_APP_URL}/admin/books/images/${data.pdf}`;

//       window.open(pdfURL, "_blank");
//       window.location.reload();
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const pdfURL = `${process.env.REACT_APP_URL}/admin/books/images/c852e1e4af34c8dff951d660382fc1bf`;
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1);
//   }

//   function changePage(offSet) {
//     setPageNumber((prevPageNumber) => prevPageNumber + offSet);
//   }

//   function changePageBack() {
//     changePage(-1);
//   }

//   function changePageNext() {
//     changePage(+1);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Document
//           file={`${process.env.REACT_APP_URL}/admin/books/images/c852e1e4af34c8dff951d660382fc1bf`}
//           onLoadSuccess={onDocumentLoadSuccess}
//         >
//           <Page height="600" pageNumber={pageNumber} />
//         </Document>
//         <p>
//           {" "}
//           Page {pageNumber} of {numPages}
//         </p>
//         {pageNumber > 1 && (
//           <button onClick={changePageBack}>Previous Page</button>
//         )}
//         {pageNumber < numPages && (
//           <button onClick={changePageNext}>Next Page</button>
//         )}
//       </header>
//       <center>
//         <div>
//           <Document
//             file={`${process.env.REACT_APP_URL}/admin/books/images/c852e1e4af34c8dff951d660382fc1bf`}
//             onLoadSuccess={onDocumentLoadSuccess}
//           >
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//             ))}
//           </Document>
//         </div>
//       </center>
//     </div>
//   );
// }

// export default PDFViewer;

import React from "react";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import packageJson from "../../../package.json"; // With correct path
import { useLocation } from "react-router-dom";

function PDFViewer() {
  //   const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const location = useLocation();
  const { pdfURL } = location.state;
  console.log(pdfURL, "pdfURL");
  return (
    <div className="App">
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${packageJson.dependencies[
          "pdfjs-dist"
        ].replace(/^\^/, "")}/build/pdf.worker.min.js`}
      >
        <div id="pdfviewer">
          <Viewer
            fileUrl={pdfURL + "#toolbar=0"}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </Worker>
    </div>
  );
}

export default PDFViewer;
