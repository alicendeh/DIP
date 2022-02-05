import React, { useEffect } from "react";
import MyFree from "../../components/MyFree/MyFree";
import BooksCard from "../../components/BookxCard/BooksCard";
import styles from "./Premium.module.css";
import { useSelector, useDispatch } from "react-redux";
import { _viewAllBooks } from "../../Helpers/adminHelper";
import { getAllBooks, loadingState } from "../../redux/actions/adminAction";
import { loadUser } from "../../redux/actions/userAction";
import { _loadeCurrentlyLogedInUser } from "../../Helpers/userHelper";
import Unexpected from "../../components/Unexpected";
import Lottie from "react-lottie";
import animationData from "../../annimations/72929-reading-book.json";
import { Offline, Online } from "react-detect-offline";
import Network from "../Network/Network";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function Premium() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.admin);
  const { error, allBooks, loading, booksFilteredList } = data;
  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    _viewAllBooks().then((response) => dispatch(getAllBooks(response)));
  }, []);
  return (
    <MyFree>
      <div className={`${styles.all} row pt-3 pb-5 d-flex flex-lg-wrap`}>
        <Online>
          {error != null ? (
            <Unexpected />
          ) : (
            <div className="col-12 m-0">
              {loading ? (
                <div className={`containerCenter spinnerContainer`}>
                  <div className="spinner"></div>
                </div>
              ) : (
                <div>
                  {allBooks.length > 0 ? (
                    <div>
                      {booksFilteredList.length > 0 ? (
                        <div
                          className={` ${styles.flow} d-flex col-md-12  col-sm-12  `}
                        >
                          {booksFilteredList.map((book, index) => (
                            <div key={index} className="d-flex">
                              <BooksCard book={book} index={index} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div
                          className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12 `}
                        >
                          {allBooks.map((book, index) => (
                            <div key={index}>
                              <BooksCard book={book} index={index} />
                            </div>
                          ))}
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
                        All books will appear hear
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </Online>
        <Offline>
          {" "}
          <Network />{" "}
        </Offline>
      </div>
    </MyFree>
  );
}

export default Premium;
