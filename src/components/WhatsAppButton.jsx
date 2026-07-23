import { useOrderModal } from "../context/OrderModalContext";

export function WhatsAppFloatingButton() {
  const { openModal } = useOrderModal();
  return (
    <button
      type="button"
      onClick={openModal}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
      aria-label="Order via WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.696 4.61 1.898 6.484L4 29l7.7-1.868A11.94 11.94 0 0016.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3zm0 21.75c-1.98 0-3.833-.55-5.414-1.505l-.388-.23-4.573 1.11 1.13-4.457-.253-.407A9.71 9.71 0 016.25 15c0-5.385 4.366-9.75 9.75-9.75S25.75 9.615 25.75 15 21.386 24.75 16 24.75zm5.34-7.29c-.293-.147-1.734-.856-2.003-.954-.269-.098-.464-.147-.66.147-.195.293-.756.954-.927 1.15-.171.196-.342.22-.635.073-.293-.147-1.237-.456-2.356-1.454-.87-.776-1.458-1.735-1.629-2.028-.171-.293-.018-.451.129-.598.132-.132.293-.342.44-.514.146-.171.195-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.594-.905-2.183-.238-.573-.48-.495-.66-.504l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.003-1.026 2.445s1.051 2.837 1.198 3.033c.146.196 2.07 3.16 5.014 4.432.7.302 1.246.482 1.672.617.703.224 1.343.192 1.849.117.564-.084 1.734-.709 1.978-1.394.244-.685.244-1.271.171-1.394-.073-.122-.269-.196-.562-.343z" />
      </svg>
      Order on WhatsApp
    </button>
  );
}

export function WhatsAppInlineButton({ children = "Order on WhatsApp", className = "" }) {
  const { openModal } = useOrderModal();
  return (
    <button
      type="button"
      onClick={openModal}
      className={`inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold px-6 py-3 rounded-lg transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
