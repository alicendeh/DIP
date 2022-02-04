// import React from "react";
// import { MyFree } from "../../components/MyFree/MyFree";
// import BooksCard from "../../components/BookxCard/BooksCard";
// import styles from "./Premium.module.css";
// function Premium() {
//   return (
//     <MyFree>
//       <div className={`${styles.all} row pt-3 pb-5 flex-lg-wrap`}>
//         <BooksCard />
//         <BooksCard />
//         <BooksCard />
//         <BooksCard />
//         <BooksCard />
//       </div>
//     </MyFree>
//   );
//   // return <h1>Hello</h1>;
// }

// export default Premium;
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
                {allBooks.length > 0 ? (
                  <div>
                    {booksFilteredList.length > 0 ? (
                      <div className="d-flex">
                        {booksFilteredList.map((book, index) => (
                          <div key={index} className="d-flex">
                            <BooksCard book={book} index={index} />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className={` ${styles.flow} d-flex col-md-12  col-sm-12 `}
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
      </div>
    </MyFree>
  );
}

export default Premium;
