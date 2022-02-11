import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import axios from "axios";

function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const openPdf = async (data) => {
    console.log(data);
    try {
      let res = await axios.put(
        `${process.env.REACT_APP_URL}/admin/books/updateView/${data._id}`
      );
      console.log(res.data, "boo");
      let pdfURL = `${process.env.REACT_APP_URL}/admin/books/images/${data.pdf}`;

      window.open(pdfURL, "_blank");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Document file={"/sample.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <p>
          {" "}
          Page {pageNumber} of {numPages}
        </p>
        {pageNumber > 1 && (
          <button onClick={changePageBack}>Previous Page</button>
        )}
        {pageNumber < numPages && (
          <button onClick={changePageNext}>Next Page</button>
        )}
      </header>
      {/* <center>
        <div>
          <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </center> */}
    </div>
  );
}

export default PDFViewer;
