import React, { useState } from "react";
import Portal from "./Portal";
import styles from "./modal.module.scss";

const Modal = props => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const onMouseDown = e => {
    if (e.target === e.currentTarget) {
      setIsMouseDown(true);
    }
  };

  const onMouseUp = e => {
    if (isMouseDown) {
      props.close(e);
    }
    setIsMouseDown(false);
  };

  return (
    <Portal>
      <div
        className={styles.modal}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div>
          {React.cloneElement(props.children, {
            close: props.close
          })}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;