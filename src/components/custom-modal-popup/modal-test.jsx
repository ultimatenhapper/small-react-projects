import React, { useState } from "react";
import Modal from "./modal";

import "./modal.css";

function ModalTest() {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal Popup</button>
      {showModal && (
        <Modal
          id={"custom-id"}
          body={<div>Customized body</div>}
          header={<h1>Customized header</h1>}
          footer={<h3>Customized footer</h3>}
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default ModalTest;
