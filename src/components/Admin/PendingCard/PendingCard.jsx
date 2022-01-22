import React, { useState } from "react";
import styles from "./PendingCard.module.css";
import { Avater } from "../../../components";
import { Button, Modal } from "react-bootstrap";

function PendingCard({ user }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { name, email, avater, plan, date } = user;

  return (
    <div className={styles.mainCOntainer}>
      <ModalComponent name={name} show={show} handleClose={handleClose} />
      <div className={styles.card}>
        <div className={styles.colorContainer}></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {user.date}
        </div>
        <div className={`containerCenter`}>
          <div className={styles.line}></div>
        </div>
        <div className={`containerCenter`}>
          <div>
            <Avater imageUrl={user.avater} />
          </div>
          <div className={styles.txtContainer}>
            {user.name} <br />
            <span className={styles.email}> {user.email}</span>
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
          <span className={styles.usersPlan}>{user.plan} </span>
          <div className={`${styles.pendingContianer} `}>
            <div className={styles.round}></div>
            pending...
          </div>
        </div>
        <div className="containerCenter">
          <div className={`btn btn-primary mr-3  ${styles.buttons}`}>
            Accept
          </div>
          <div
            onClick={handleShow}
            className={`btn btn-danger mr-3 ${styles.buttons} `}
          >
            Decline
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingCard;

function ModalComponent({ show, handleClose, name }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to cancel
          <b>
            <i>{name}'s</i>
          </b>
          request ?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
