import React from "react";
import Icon from "./Icon";

export default function Pagination({ active, data, action }) {
  return (
    <div className="pagination">
      <div className="container">
        <div className="pagination__start controller">
          <Icon src="double_caret.svg" alt="start" />
        </div>
        <ul className="pagination__list">
          {data?.map((item, index) => {
            return (
              <li
                key={item.id + "pagination"}
                onClick={() => action(index)}
                data-active={index + 1 === active ? true : false}
              >
                {index + 1}
              </li>
            );
          })}
        </ul>
        <div className="pagination__end controller">
          <Icon src="double_caret.svg" alt="end" />
        </div>
      </div>
    </div>
  );
}
