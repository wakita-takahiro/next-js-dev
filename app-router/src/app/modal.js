'use client';
import * as React from "react";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Panel from "../components/Modal/Panel";

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = e => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(!isOpenModal);
    }
  };

  return (
    <div className="App">
      <button type="button" onClick={toggleModal}>
        Open!
      </button>
      {isOpenModal && (
        <Modal close={toggleModal}>
          <Panel />
        </Modal>
      )}
    </div>
  );
}