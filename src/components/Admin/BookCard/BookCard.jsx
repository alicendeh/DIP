import React, { useState } from "react";
import styles from "./BookCard.module.css";
import { Avater } from "../../../components";
import { Button, Modal } from "react-bootstrap";
import { _viewAllBooks, _deleteBook } from "../../../Helpers/adminHelper";
import moment from "moment";
import axios from "axios";

function BookCard({ book }) {
  const [show, setShow] = useState(false);
  const [pdfContent, setPdfContent] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  const { name, plan } = book;

  const openPdf = async (data) => {
    try {
      let pdfURL = `${process.env.REACT_APP_URL}/admin/books/images/${data.pdf}`;

      window.open(pdfURL, "_blank");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.mainCOntainer}>
      <ModalComponent
        name={name}
        book={book}
        show={show}
        handleClose={handleClose}
      />
      {/* <embed src={PDF} type="application/pdf" height={800} width={500} /> */}
      {/* {showPdf && (
        <a href={pdfContent && pdfContent.coverPage} target="_blank" />
      )} */}
      <div className={styles.card}>
        <div
          className={`
        ${
          plan === "free"
            ? `${styles.colorContainer}`
            : `${styles.colorContainerPremium}`
        }
        `}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "12px",
            flexDirection: "column",
          }}
        >
          {moment(parseInt(book.date)).format("MMMM Do YYYY")}
        </div>
        <div className={`containerCenter`}>
          <div className={styles.line}></div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "12px",
          }}
          containerCenter
          className={` ${styles.bookContainer}  `}
        >
          <div>
            <Avater
              imageUrl={book.coverPage ? book.coverPage : "/defaultBook.png"}
            />
          </div>
          <div className={styles.txtContainer}>
            {book.name} <br />
            <span className={styles.email}> {book.author}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "123px",
            marginLeftRight: "12px",
          }}
        >
          <span className={styles.usersPlan}>{book.plan} </span>
          <div className={`${styles.pendingContianer} `}>
            <div className={styles.round}></div>
          </div>
        </div>
        <div className={`containerCenter`}>
          <i
            onClick={() => openPdf(book)}
            className={` fas fa-eye
        ${plan === "Free" ? `${styles.eyeIconFree}` : `${styles.eyeIcon}`}
        `}
          ></i>
        </div>
        <div className="containerCenter">
          {/* <div className={`btn btn-primary mr-3 `}>
            <i className="fas fa-edit"></i>
          </div> */}
          <div className={`btn btn-danger mr-3 `} onClick={handleShow}>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

function ModalComponent({ show, handleClose, name, book }) {
  const deleteBook = (bookID) => {
    handleClose();
    _deleteBook(bookID).then((response) => {
      window.location.reload();
    });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete this book ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure Delete
          <i>
            <b> {name}</b>
          </i>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => deleteBook(book._id)}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// function EditBookInfo({  book }) {
//   const deleteBook = (bookID) => {
//     handleClose();
//     _deleteBook(bookID).then((response) => {
//       window.location.reload();
//     });
//   };
//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit book ?</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//          Edit
//           <i>
//             <b> {name}</b>
//           </i>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={() => deleteBook(book._id)}>
//             Proceed
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
