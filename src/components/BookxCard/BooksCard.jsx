import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import styles from "./BooksCard.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BooksCard({ book }) {
  const [pdfLook, setPdfLook] = useState();

  const books = useSelector((state) => state.admin);
  const { allFreeBooks } = books;
  const openPdf = async (data) => {
    console.log(data);
    try {
      let res = await axios.put(
        `${process.env.REACT_APP_URL}/admin/books/updateView/${data._id}`
      );
      console.log(res.data, "boo");
      let pdfURL = `${process.env.REACT_APP_URL}/admin/books/images/${data.pdf}`;
      setPdfLook(pdfURL);
      window.open(pdfURL, "_blank");
      window.location.reload();
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
          <Link
            to="/pdfview"
            state={{
              pdfURL: `${process.env.REACT_APP_URL}/admin/books/images/${book.pdf}`,
            }}
          >
            <button
              type="button"
              // onClick={() => openPdf(book)}
              onContextMenu={(e) => e.preventDefault()}
              class="btn btn-outline-success col-md-12"
            >
              View
            </button>
          </Link>

          <span className={`${styles.text2} text-secondary mt-3 `}>
            {book.views} views
            <i
              className="far fa-eye p-0"
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
