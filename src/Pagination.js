import React from "react";
import "./Pagination.css";

const Pagination = props => {
  const pageLinks = [];

  for (let i = 1; i <= props.pages; i++) {
    let active = props.currentPage === i ? "active" : "";
    pageLinks.push(
      <li
        className={`Pagination-page ${active}`}
        onClick={() => props.switchPage(i)}
        key={i}
      >
        {i}
      </li>
    );
  }

  return (
    <div className="Pagination-pages">
      {props.currentPage > 1 ? (
        <li
          className={`Pagination-page`}
          onClick={() => props.switchPage(props.currentPage - 1)}
        >
          Prev
        </li>
      ) : (
        ""
      )}
      {pageLinks}
      {props.currentPage < 25 ? (
        <li
          className={`Pagination-page`}
          onClick={() => props.switchPage(props.currentPage + 1)}
        >
          Next
        </li>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
