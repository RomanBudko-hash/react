import React from "react";

function Count(props) {
  const [x, setX] = React.useState(0);
  const plus = () => setX(x + 1);
  const minus = () => setX(x - 1);
  return (
    <div>
      <h1 className="header-title">{x}</h1>
      <button onClick={plus} className="header-btn">
        plus
      </button>
      <button onClick={minus} className="header-btn">
        minus
      </button>
    </div>
  );
}

export default Count;
