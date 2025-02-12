import { ModalState } from "../types/ModalState";

export const Modal = ({ isOpen, text, onClick }: ModalState) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-secondary p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-2 items-center">
        <p className="text-primary text-xl font-bold">{text}</p>
        <button onClick={onClick} className="p-1 rounded">
          Close
        </button>
      </div>
    </div>
  );
};
