import { createContext, useContext, useState } from "react";

const OrderModalContext = createContext(null);

export function OrderModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <OrderModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext);
  if (!ctx) {
    throw new Error("useOrderModal must be used within an OrderModalProvider");
  }
  return ctx;
}
