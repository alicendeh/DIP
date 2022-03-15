import React from "react";
import "./Feedback.css";

function Feedback() {
  return (
    <div>
      <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div class="wrapper wrapper--w790">
          <div class="card card-5">
            <div class="card-heading">
              <h2 class="title">Weekly Task Form</h2>
            </div>
            <div class="card-body">
              <form method="POST">
                <div class="form-row m-b-55">
                  <div class="name">Name</div>
                  <div class="value">
                    <div class="row row-space">
                      <div class="col-12">
                        <div class="input-group-desc">
                          <input
                            class="input--style-5"
                            type="text"
                            name="first_name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-row m-b-55">
                  <div class="name">Sponsor's name</div>
                  <div class="value">
                    <div class="row row-space">
                      <div class="col-12">
                        <div class="input-group-desc">
                          <input
                            class="input--style-5"
                            type="text"
                            name="last_name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-row m-b-55">
                  <div class="name">Email</div>
                  <div class="value">
                    <div class="col-12">
                      <div class="input-group-desc px-2">
                        <input
                          class="input--style-5 "
                          type="email"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-row p-t-20">
                  <label class="label label--block">Upload Task</label>
                  <div class="p-t-15 ">
                    <div className="col-md-12">
                      <input
                        required
                        type="file"
                        name="upload"
                        accept="application/pdf , application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,text/plain"
                        placeholder="Select A Book"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    class="btn btn--radius-2 btn--red"
                    type="submit"
                    style={{ backgroundColor: "#fa4251" }}
                  >
                    Submit Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
