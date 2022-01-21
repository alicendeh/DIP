import React from "react";
import { AdminLayout } from "../../../pages";
import { BookCard, Header } from "../../../components";
import { BOOKS_DATA_SET } from "../../../DATA";

function Books() {
  return (
    <AdminLayout>
      <Header title={"Books"} />
      <div>
        {BOOKS_DATA_SET.map((book, index) => (
          <div key={index}>
            <BookCard book={book} index={index} />
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

export default Books;
