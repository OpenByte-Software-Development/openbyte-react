import React from "react";
import { Dialog } from "@headlessui/react";

const CalculatorCompleteModal = (isOpen) => {
  return (
    <Dialog open={isOpen}>
      <Dialog.Description>something</Dialog.Description>
    </Dialog>
  );
};

export default CalculatorCompleteModal;
