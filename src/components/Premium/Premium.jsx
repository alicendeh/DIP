import React, { useEffect, useState } from "react";
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
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function Premium() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.admin);
  const { error, allBooks, loading, booksFilteredList } = data;

  const [selectCategory, setSelectCategory] = useState("courses");

  const [alice, setalice] = useState([]);

  useEffect(() => {
    console.log(allBooks, "heeeeeeee");
  }, [allBooks]);

  const takeCare = (e) => {
    console.log(e.target.value);
  };
  useEffect(() => {
    localStorage.removeItem("I_REQUESTED");

    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    _viewAllBooks().then((response) => dispatch(getAllBooks(response)));
  }, []);
  useEffect(() => {
    let newArray = allBooks.filter((book) => book.category === selectCategory);
    setalice(newArray);
  }, [selectCategory]);
  return (
    <MyFree take={takeCare}>
      <div className={`${styles.all} row pt-3 pb-5 d-flex flex-lg-wrap`}>
        {error != null ? (
          <Unexpected />
        ) : (
          <div className="col-12 m-0">
            <br />
            {loading ? (
              <div className={`containerCenter spinnerContainer`}>
                <div className="spinner"></div>
              </div>
            ) : (
              <div style={{ width: "100%", height: "fit-content" }}>
                {allBooks.length > 0 ? (
                  <div>
                    {
                      booksFilteredList.length > 0 ? (
                        <div
                          className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12  `}
                        >
                          {booksFilteredList.map((book, index) => (
                            <div key={index} className="d-flex">
                              <BooksCard book={book} index={index} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div
                          className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12  `}
                        >
                          {allBooks.map((book, index) => (
                            <div key={index} className="d-flex">
                              <BooksCard book={book} index={index} />
                            </div>
                          ))}
                        </div>
                      )
                      //  : (
                      //   <div>
                      //     <h3 className="fw-bold">{selectCategory}</h3>
                      //     <div
                      //       className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12 `}
                      //     >
                      //       {alice.length <= 0 ? (
                      //         <div
                      //           className="d-flex justify-content-center"
                      //           style={{ width: "100%" }}
                      //         >
                      //           {" "}
                      //           <LottieVIew />
                      //         </div>
                      //       ) : (
                      //         <div
                      //           className={` ${styles.flow} d-flex flex-wrap col-md-12  col-sm-12 `}
                      //         >
                      //           {alice.map((book, index) => (
                      //             <BooksCard book={book} index={index} />
                      //           ))}
                      //         </div>
                      //       )}
                      //     </div>
                      //   </div>
                      // )
                    }
                  </div>
                ) : (
                  <div>
                    <LottieVIew />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </MyFree>
  );
}

export default Premium;

const LottieVIew = () => {
  return (
    <div className="containerColumn fw-bold ">
      <Lottie options={defaultOptions} height={400} width={"70%"} />
      <p
        style={{
          fontSize: 21,
        }}
      >
        All books For this Category will appear here
      </p>
    </div>
  );
};
