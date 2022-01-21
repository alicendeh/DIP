import React from "react";
import styles from "./PlanCard.module.css";
import { Avater } from "../../../components";

function PlanCard({ user }) {
  const { name, email, avater, plan, date } = user;
  return (
    <div>
      <div className={styles.card}>
        <div
          className={
            plan === "Free"
              ? `${styles.colorContainer}`
              : `${styles.colorContainerPremium}`
          }
        ></div>
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
            Approved
          </div>
        </div>
        <div
          className="containerCenter"
          style={{
            width: "200px",
          }}
        >
          <img src="/Group.png" alt="tick-icon" />
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
