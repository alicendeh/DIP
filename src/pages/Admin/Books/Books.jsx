import React from "react";
import { AdminLayout } from "../../../pages";
import { BookCard, Header, Unexpected } from "../../../components";
import { BOOKS_DATA_SET } from "../../../DATA";
import { useSelector } from "react-redux";
function Books() {
  const data = useSelector((state) => state.admin);
  const { error } = data;
  return (
    <AdminLayout>
      <Header title={"Books"} />
      {error != null ? (
        <Unexpected />
      ) : (
        <div>
          {BOOKS_DATA_SET.map((book, index) => (
            <div key={index}>
              <BookCard book={book} index={index} />
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}

export default Books;
