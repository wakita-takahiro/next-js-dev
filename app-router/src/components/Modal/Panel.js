import React from "react";
import styles from "./panel.module.scss";

const Panel = props => {
  const submit = e => {
    e.preventDefault();
    if (props.close) {
      props.close(e);
    }
  };

  return (
    <section className={styles.panel}>
      <header>
        <h3>Modal Panel!</h3>
      </header>
      <div>Hi! Nice to meet you!</div>
      <footer>
        <button type="button" onClick={props.close}>
          Cancel
        </button>
        <button type="submit" onClick={submit}>
          OK
        </button>
      </footer>
    </section>
  );
};

export default Panel;