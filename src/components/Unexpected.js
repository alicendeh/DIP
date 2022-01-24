import React from "react";
import { useSelector } from "react-redux";

function Unexpected() {
  const data = useSelector((state) => state.admin);
  const { error } = data;
  return (
    <div className="mt-5">
      <div>
        <span className="display-9 ">Oops something went Wrong !!</span>
      </div>

      <img
        src="/unexpected.png"
        alt="Something went wrong"
        width="70%"
        height="400"
      />
      <div>
        <span className="display-6 text-danger ">{error}!!</span>
      </div>
    </div>
  );
}

export default Unexpected;
