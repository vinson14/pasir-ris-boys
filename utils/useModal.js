import { useState } from "react";

const useModal = ({ state = false }) => {
  const [modalState, setModalState] = useState(state);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);
  return modalState, openModal, closeModal;
};

export default useModal;
