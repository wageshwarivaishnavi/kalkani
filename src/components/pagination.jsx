import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a onClick={props.onBack} className="page-link">
            Back
          </a>
        </li>
        <li className="page-item">
          <a onClick={props.onNext} className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
