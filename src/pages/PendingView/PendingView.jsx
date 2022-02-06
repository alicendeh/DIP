import React from "react";
import { DashPage } from "../../components";
import Lottie from "react-lottie";
import animationData from "../../annimations/81133-waiting (1).json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function PendingView() {
  return (
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
            Your Request is on Hold please be patient
          </h3>

          <Lottie options={defaultOptions} height={400} width={"70%"} />
        </div>
      </div>
    </DashPage>
  );
}

export default PendingView;
