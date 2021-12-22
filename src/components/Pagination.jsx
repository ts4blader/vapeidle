import React from "react";
import Icon from "./Icon";

export default function Pagination({ active, length, action }) {
  const data = [...Array(length)].map((_, i) => i + 1);

  return (
    <div className="pagination">
      <div className="pagination__start controller">
        <Icon src="double_caret.svg" alt="start" />
      </div>
      <ul className="pagination__list">
        {data.map((item) => {
          return (
            <li
              key={item + "-pagination"}
              onClick={() => action(item)}
              data-active={item === active ? true : false}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="pagination__end controller">
        <Icon src="double_caret.svg" alt="end" />
      </div>
    </div>
  );
}
