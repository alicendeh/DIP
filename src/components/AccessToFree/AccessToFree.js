import React, { useEffect } from "react";
import { MyFree1 } from "../../components";
import BooksCard from "../../components/BookxCard/BooksCard";
import Unexpected from "../Unexpected";
import styles from "./AccessToFree.module.css";
import { useSelector, useDispatch } from "react-redux";
import { _getFreeBooks } from "../../Helpers/adminHelper";
import { getAllFreeBooks, loadingState } from "../../redux/actions/adminAction";
import { loadUser } from "../../redux/actions/userAction";
import { _loadeCurrentlyLogedInUser } from "../../Helpers/userHelper";
import Lottie from "react-lottie";
import animationData from "../../annimations/72929-reading-book.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function AccessToFree() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.admin);
  const { error, allFreeBooks, loading, freeBooksFilteredList } = data;

  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => {
      dispatch(loadUser(data));
    });

    _getFreeBooks().then((response) => dispatch(getAllFreeBooks(response)));
  }, []);

  return (
    <MyFree1>
      <div className={`${styles.all} row pt-3 pb-5 flex-lg-wrap`}>
        <div className={`${styles.all} row pt-3 pb-5 d-flex flex-lg-wrap`}>
          {error != null ? (
            <Unexpected />
          ) : (
            <div className="col-12">
              {loading ? (
                <div className={`containerCenter spinnerContainer`}>
                  <div className="spinner"></div>
                </div>
              ) : (
                <div className="col-12 col-md-12 col-sm-12">
                  {allFreeBooks.length > 0 ? (
                    <div>
                      {freeBooksFilteredList.length > 0 ? (
                        <div className="d-flex flex-wrap col-md-12  col-sm-12">
                          {freeBooksFilteredList.map((book, index) => (
                            <div key={index} className="d-flex">
                              <BooksCard book={book} index={index} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div>
                          <h3 className="fw-bold">Courses</h3>
                          <div
                            className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12 `}
                          >
                            {allFreeBooks.map((book, index) => {
                              if (book.category == "courses") {
                                return (
                                  <div>
                                    <BooksCard book={book} index={index} />
                                  </div>
                                );
                                // console.log(book);
                              } else {
                                <div className="containerColumn fw-bold ">
                                  <Lottie
                                    options={defaultOptions}
                                    height={400}
                                    width={"70%"}
                                  />
                                  <p
                                    style={{
                                      fontSize: 21,
                                    }}
                                  >
                                    All books For this category will appear hear
                                  </p>
                                </div>;
                              }
                            })}
                          </div>
                          <br />
                          <div>
                            <h3 className="fw-bold">System Fundamentals</h3>
                            <div
                              className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12 `}
                            >
                              {allFreeBooks.map((book, index) => {
                                if (book.category == "systemfundamentals") {
                                  return (
                                    <div>
                                      <BooksCard book={book} index={index} />
                                    </div>
                                  );
                                } else {
                                  <div className="containerColumn fw-bold ">
                                    <Lottie
                                      options={defaultOptions}
                                      height={400}
                                      width={"70%"}
                                    />
                                    <p
                                      style={{
                                        fontSize: 21,
                                      }}
                                    >
                                      All books For this category will appear
                                      hear
                                    </p>
                                  </div>;
                                }
                              })}
                            </div>
                          </div>
                          <br />
                          <div>
                            <h3 className="fw-bold">
                              Advance Certification Program
                            </h3>
                            <div
                              className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12 `}
                            >
                              {allFreeBooks.map((book, index) => {
                                if (
                                  book.category == "advancecertificationprogram"
                                ) {
                                  return (
                                    <div>
                                      <BooksCard book={book} index={index} />
                                    </div>
                                  );
                                } else {
                                  <div className="containerColumn fw-bold ">
                                    <Lottie
                                      options={defaultOptions}
                                      height={400}
                                      width={"70%"}
                                    />
                                    <p
                                      style={{
                                        fontSize: 21,
                                      }}
                                    >
                                      All books For this category will appear
                                      hear
                                    </p>
                                  </div>;
                                }
                              })}
                            </div>
                          </div>
                          <br />
                          <div>
                            <h3 className="fw-bold">
                              DIP Coaching Certification
                            </h3>
                            <div
                              className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12 `}
                            >
                              {allFreeBooks.map((book, index) => {
                                if (
                                  book.category == "DIPcoachingcertification"
                                ) {
                                  return (
                                    <div>
                                      <BooksCard book={book} index={index} />
                                    </div>
                                  );
                                } else {
                                  <div className="containerColumn fw-bold ">
                                    <Lottie
                                      options={defaultOptions}
                                      height={400}
                                      width={"70%"}
                                    />
                                    <p
                                      style={{
                                        fontSize: 21,
                                      }}
                                    >
                                      All books For this category will appear
                                      here
                                    </p>
                                  </div>;
                                }
                              })}
                            </div>
                          </div>
                          <br />
                          <div>
                            <h3 className="fw-bold">DIP Mentor Certificate</h3>
                            <div
                              className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12 `}
                            >
                              {allFreeBooks.map((book, index) => {
                                if (book.category == "DIPmentorcertificate") {
                                  return (
                                    <div>
                                      <BooksCard book={book} index={index} />
                                    </div>
                                  );
                                } else {
                                  <div className="containerColumn fw-bold ">
                                    <Lottie
                                      options={defaultOptions}
                                      height={400}
                                      width={"70%"}
                                    />
                                    <p
                                      style={{
                                        fontSize: 21,
                                      }}
                                    >
                                      All books For this category will appear
                                      here
                                    </p>
                                  </div>;
                                }
                              })}
                            </div>
                          </div>
                          <br />
                          <div>
                            <h3 className="fw-bold">Customized Training</h3>
                            <div
                              className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12 `}
                            >
                              {allFreeBooks.map((book, index) => {
                                if (book.category == "customizedtraining") {
                                  return (
                                    <div>
                                      <BooksCard book={book} index={index} />
                                    </div>
                                  );
                                } else if (
                                  book.category !== "customizedtraining"
                                ) {
                                  return (
                                    <div className="containerColumn fw-bold6  ">
                                      <Lottie
                                        options={defaultOptions}
                                        height={400}
                                        width={"70%"}
                                      />
                                      <p
                                        style={{
                                          fontSize: 21,
                                        }}
                                      >
                                        All books For this category will appear
                                        here
                                      </p>
                                    </div>
                                  );
                                }
                                {
                                }
                              })}
                              {/* {allFreeBooks.filter((book) => {
                                book.category == "customizedtraining" ? (
                                  <div>
                                    <BooksCard book={book} />
                                  </div>
                                ) : (
                                  <div className="containerColumn fw-bold6  ">
                                    <Lottie
                                      options={defaultOptions}
                                      height={400}
                                      width={"70%"}
                                    />
                                    <p
                                      style={{
                                        fontSize: 21,
                                      }}
                                    >
                                      All books For this category will appear
                                      here
                                    </p>
                                  </div>
                                );
                              })} */}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="containerColumn fw-bold ">
                      <Lottie
                        options={defaultOptions}
                        height={400}
                        width={"70%"}
                      />
                      <p
                        style={{
                          fontSize: 21,
                        }}
                      >
                        All books will appear here
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </MyFree1>
  );
}

export default AccessToFree;
