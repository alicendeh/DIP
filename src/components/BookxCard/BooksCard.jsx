import React from "react";
import { Card } from "react-bootstrap";
import styles from "./BooksCard.module.css";

function BooksCard({ book }) {
  const openPdf = async (data) => {
    try {
      let pdfURL = `${process.env.REACT_APP_URL}/admin/books/images/${data.pdf}`;

      window.open(pdfURL, "_blank");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card
      border="light"
      style={{
        marginLeft: "1em",
        marginTop: "2em",
        width: "18rem",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
      className="col-md-12 col-sm-12"
    >
      <Card.Header className={styles.header}>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className={styles.icon}>
              {" "}
              <img
                src={
                  book.coverPage !== "default"
                    ? book.coverPage
                    : "/defaultBook.png"
                }
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />{" "}
            </div>
            <div className={` ${styles.details} ms-2`}>
              <h6 className="mb-0">{book.author}</h6> <span>Author</span>
            </div>
            <div className={` ${styles.badge} pl-5 `}>
              {" "}
              <span>{book.plan}</span>{" "}
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title> {book.name} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title the card's content.
        </Card.Text>
        <div className="mt-5 d-flex justify-content-between">
          <button type="button" class="btn btn-outline-success col-md-6">
            View
          </button>
          <span className={`${styles.text2} mt-3 `}>
            126 views{" "}
            <i
              className="far fa-eye p-0"
              onClick={() => openPdf(book)}
              style={{ fontSize: "17px", cursor: "pointer" }}
            ></i>{" "}
          </span>
        </div>
      </Card.Body>
    </Card>
    // {` ${styles.box} d-flex col-md-4 mr-3`}
  );
}

export default BooksCard;
