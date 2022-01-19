import React from "react";
import Fade from "react-reveal/Fade";

function Mission() {
  return (
    <div className="capsule">
      <div className="container-fluid mission">
        <div className="text-center pt-5 pb-3">
          <h2>Our Mission</h2>
        </div>
        <div className="row py-3 d-flex">
          <Fade top>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="hold">
                <img
                  src="/2.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eu tempor felis. Vivamus luctus urna at ornare
                  facilisis. Sed ultricies tortor id tincidunt congue. Aliquam
                  erat volutpat. Donec aliquam nisi nec nunc luctus, sed
                  pharetra dolor aliquam. Sed sapien ex, euismod ac consequat
                  quis, fermentum id velit. Quisque sollicitudin nulla in mattis
                  convallis. Sed ultricies tortor id tincidunt congue. Aliquam
                  erat volutpat. Donec aliquam nisi nec nunc luctus, sed
                  pharetra dolor aliquam. Sed sapien ex, euismod ac consequat
                  quis, fermentum id velit. Quisque sollicitudin nulla in mattis
                  convallis.Sed ultricies tortor id tincidunt congue. Aliquam
                  erat volutpat. Donec aliquam nisi nec nunc luctus, sed
                  pharetra dolor aliquam. Sed sapien ex, euismod ac consequat
                  quis, fermentum id velit. Quisque sollicitudin nulla in mattis
                  convallis
                </h5>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Mission;
