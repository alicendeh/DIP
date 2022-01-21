import React from "react";
import styles from "./AllUsers.module.css";
import { AdminLayout } from "../../../pages";
import { Header, PendingCard, PlanCard } from "../../../components";
import { PENDING_USERS, CONFIREMED_USERS } from "../../../DATA";

function AllUsers() {
  return (
    <AdminLayout>
      <Header title={"Users"} />
      <div>
        {PENDING_USERS.map((user) => (
          <PendingCard user={user} />
        ))}
      </div>
      <div>
        {CONFIREMED_USERS.map((user) => (
          <PlanCard user={user} />
        ))}
      </div>
    </AdminLayout>
  );
}

export default AllUsers;
