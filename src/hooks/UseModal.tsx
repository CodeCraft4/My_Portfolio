import { useState } from "react";

const UseModal = () => {
  const [open, setOpen] = useState<boolean>();

  const openModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return {
    open,
    openModal,
    onCloseModal,
  };
};

export default UseModal;
