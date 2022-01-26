import React from "react";
import { DashPage } from "../../components";

function Rejected() {
  return (
    <div>
      <DashPage>
        <div
          className="pend"
          style={{
            width: "100vw",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div className="view" style={{ width: "60%", height: "70%" }}>
            <h3 style={{ textAlign: "center", color: "grey" }}>
              Your Request is still on Hold please just be patient
            </h3>
            <img
              src="/unexpected.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </DashPage>
    </div>
  );
}

export default Rejected;
