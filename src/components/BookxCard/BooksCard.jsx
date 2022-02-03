import React from "react";
import { Card } from "react-bootstrap";
import styles from "./BooksCard.module.css";
function BooksCard() {
  return (
    <Card
      border="light"
      style={{
        marginLeft: "2em",
        marginTop: "2em",
        width: "18rem",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Card.Header className={styles.header}>
        <div className="d-flex flex-row align-items-center">
          <div className={styles.icon}>
            {" "}
            <img
              src="/defaultUserPic.webp"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />{" "}
          </div>
          <div className={` ${styles.details} ms-2`}>
            <h6 className="mb-0">Mailchimp</h6> <span>1 days ago</span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>Light Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title the card's content.
        </Card.Text>
        <div className="mt-5"></div>
      </Card.Body>
    </Card>
    // {` ${styles.box} d-flex col-md-4 mr-3`}
  );
}

export default BooksCard;
