import React, { useState } from "react";
import styles from "./BookCard.module.css";
import { Avater } from "../../../components";
import { Button, Modal } from "react-bootstrap";
import { _viewAllBooks, _deleteBook } from "../../../Helpers/adminHelper";
import moment from "moment";

function BookCard({ book }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  const { name, plan } = book;
  return (
    <div className={styles.mainCOntainer}>
      <ModalComponent
        name={name}
        book={book}
        show={show}
        handleClose={handleClose}
      />

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
            flexDirection: "column",
          }}
        >
          {moment(parseInt(book.date)).format("MMMM Do YYYY")}
        </div>
        <div className={`containerCenter`}>
          <div className={styles.line}></div>
        </div>
        <div className={`containerCenter`}>
          <div>
            <Avater
              imageUrl={
                book.coverPage !== "default"
                  ? book.coverPage
                  : "/defaultBook.png"
              }
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
          }}
        >
          <span className={styles.usersPlan}>{book.plan} </span>
          <div className={`${styles.pendingContianer} `}>
            <div className={styles.round}></div>
            {book.views}
          </div>
        </div>
        <div className={`containerCenter`}>
          <i
            onClick={() => {
              window.open("/src/Internship report.pdf", "_blank");
              // console.log(book.pdf);
            }}
            className={` fas fa-eye
        ${plan === "Free" ? `${styles.eyeIconFree}` : `${styles.eyeIcon}`}
        `}
          ></i>
        </div>
        <div className="containerCenter">
          <div className={`btn btn-primary mr-3 `}>
            <i className="fas fa-edit"></i>
          </div>
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
