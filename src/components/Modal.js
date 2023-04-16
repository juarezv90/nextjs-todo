import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import ReactDOM from "react-dom";
import { useAuth } from "@/context/AuthContext";

export default function Modal(props) {
  const { setOpenModal } = props;
  const [_document, set_document] = useState(null);

  const { logout } = useAuth();

  useEffect(() => {
    set_document(document);
  }, []);

  if (!_document) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed w-[30ch] sm:w-[50ch] inset-0 bg-white text-slate-900 flex flex-col text-lg sm:text-xl">
      <div className="flex items-center justify-between border-b border-solid border-slate-900 p-4">
        <h1 className="font-extrabold text-2xl sm:text-4xl select-none">
          MENU
        </h1>
        <GrClose
          onClick={() => setOpenModal(false)}
          className="text-[16px] lg:text[24px] duration-300 hover:rotate-[180deg] cursor-pointer"
        />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h2
          onClick={() => {
            logout();
            setOpenModal(false);
          }}
          className="select-none duration-300 hover:pl-2 cursor-pointer"
        >
          Logout
        </h2>
      </div>
    </div>,
    _document.getElementById("portal")
  );
}
