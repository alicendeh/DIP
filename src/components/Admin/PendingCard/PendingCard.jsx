import React from "react";
import styles from "./PendingCard.module.css";
import { Avater } from "../../../components";

function PendingCard({ user }) {
  const { name, email, avater, plan, date } = user;
  return (
    <div>
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
        <div>
          <span className={styles.usersPlan}>{user.plan} </span>
          <div className={`${styles.pendingContianer} `}>
            <div className={styles.round}></div>
            pending...
          </div>
        </div>
        <div className="containerCenter">
          <div className="btn btn-primary mr-3">Accept</div>
          <div className="btn btn-danger mr-3">Decline</div>
        </div>
      </div>
    </div>
  );
}

export default PendingCard;
