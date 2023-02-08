import React from "react";

function Modal() {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <button onClick={() => setVisible(!visible)} className="my-btn">
        Push
      </button>
      {visible && <div>text</div>}
    </>
  );
}

export default Modal;
