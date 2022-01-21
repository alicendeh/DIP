import React from "react";
import { AdminLayout } from "../../../pages";
import { Header, PendingCard, PlanCard } from "../../../components";
import { PENDING_USERS, CONFIREMED_USERS } from "../../../DATA";

function AllUsers() {
  return (
    <AdminLayout>
      <Header title={"Users"} />
      <div>
        {PENDING_USERS.map((user, index) => (
          <div key={index}>
            <PendingCard user={user} index={index} />
          </div>
        ))}
      </div>
      <div>
        {CONFIREMED_USERS.map((user, index) => (
          <div key={index}>
            <PlanCard user={user} />
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

export default AllUsers;
