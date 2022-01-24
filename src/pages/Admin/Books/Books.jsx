import React, { useEffect } from "react";
import { AdminLayout } from "../../../pages";
import { BookCard, Header, Unexpected } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { _viewAllBooks } from "../../../Helpers/adminHelper";
import { getAllBooks, loadingState } from "../../../redux/actions/adminAction";
import { loadUser } from "../../../redux/actions/userAction";
import { _loadeCurrentlyLogedInUser } from "../../../Helpers/userHelper";

function Books() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(loadingState(true));
    _loadeCurrentlyLogedInUser().then((data) => dispatch(loadUser(data)));
    _viewAllBooks().then((response) => dispatch(getAllBooks(response)));
  }, []);

  const { error, allBooks, loading } = data;

  return (
    <AdminLayout>
      <Header title={"Books"} />
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
              {allBooks.map((book, index) => (
                <div key={index}>
                  <BookCard book={book} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </AdminLayout>
  );
}

export default Books;
