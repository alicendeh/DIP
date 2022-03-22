import React, { useEffect } from "react";
import Lottie from "react-lottie";
import { AdminLayout } from "../../../pages";
import { BookCard, Header, Unexpected } from "../../../components";
import { _viewAllTasks } from "../../../Helpers/adminHelper";
import { getAllBooks, loadingState } from "../../../redux/actions/adminAction";
import animationData from "../../../annimations/72929-reading-book.json";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../../redux/actions/userAction";
import { _loadeCurrentlyLogedInUser } from "../../../Helpers/userHelper";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function Task() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.user);
  const { error, newTask, loading, booksFilteredList } = data;

  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    _viewAllBooks().then((response) => dispatch(getAllBooks(response)));
  }, []);

  return (
    <AdminLayout>
      {error != null ? (
        <Unexpected />
      ) : (
        <div>
          {loading ? (
            <div className={`containerCenter spinnerContainer`}>
              <div className="spinner"></div>
            </div>
          ) : (
            <div>
              {newTask.length > 0 ? (
                <div>
                  {newTask.map((book, index) => (
                    <div key={index}>
                      <BookCard book={book} index={index} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="containerColumn fw-bold ">
                  <Lottie options={defaultOptions} height={400} width={"70%"} />
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
    </AdminLayout>
  );
}

export default Task;
