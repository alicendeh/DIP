import React from "react";
import "./Feedback.css";
function Feedback() {
  return (
    <div>
      <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div class="wrapper wrapper--w790">
          <div class="card card-5">
            <div class="card-heading">
              <h2 class="title">Weekly Feedback Form</h2>
            </div>
            <div class="card-body">
              <form method="POST">
                <div class="form-row m-b-55">
                  <div class="name">Name</div>
                  <div class="value">
                    <div class="row row-space">
                      <div class="col-2">
                        <div class="input-group-desc">
                          <input
                            class="input--style-5"
                            type="text"
                            name="first_name"
                          />
                          <label class="label--desc">Name</label>
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="input-group-desc">
                          <input
                            class="input--style-5"
                            type="text"
                            name="last_name"
                          />
                          <label class="label--desc">Sponsor's name</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="name">Email</div>
                  <div class="value">
                    <div class="input-group">
                      <input class="input--style-5" type="email" name="email" />
                    </div>
                  </div>
                </div>
                <div class="form-row m-b-55">
                  <div class="name">Phone</div>
                  <div class="value">
                    <div class="row row-refine">
                      <div class="col-3">
                        <div class="input-group-desc">
                          <input
                            class="input--style-5"
                            type="text"
                            name="area_code"
                          />
                          <label class="label--desc">Area Code</label>
                        </div>
                      </div>
                      <div class="col-9">
                        <div class="input-group-desc">
                          <input
                            class="input--style-5"
                            type="text"
                            name="phone"
                          />
                          <label class="label--desc">Phone Number</label>
                        </div>
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
                  <button class="btn btn--radius-2 btn--red" type="submit">
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
