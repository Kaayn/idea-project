import { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const Modal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <div
          className="z-50 absolute h-screen top-0 right-0 flex justify-center align-middle"
          onClick={props.toggle}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-500 rounded-2xl p-4 "
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
