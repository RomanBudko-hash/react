import React from "react";

function List() {
  const arr = ["item1", "item2", "item3"];
  return (
    <ul>
      {arr.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
