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

   const handleLogout = () => {
    logout();
    setOpenModal(false);
   }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-white text-slate-900 flex flex-col">
      <div className="flex items-center justify-between border-b border-solid border-slate-900 p-4">
        <h1>MENU</h1>
        <GrClose onClick={() => setOpenModal(false)}  className="text-[20px] cursor-pointer"/>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h2 onClick={handleLogout}  >Logout</h2>
      </div>
    </div>,
    _document.getElementById("portal")
  );
}
