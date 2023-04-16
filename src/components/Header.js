import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import Modal from "./Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);



  return(
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="sticky top-0 w-full left-0 flex items-center bg-inherit justify-between border-b p-4 z-50">
        <h1 className="text-3xl sm:text-6xl">TODO LIST</h1>
        <FiUser
          className="text-2xl sm:text-4xl duration-300 hover:opacity-40 cursor-pointer"
          onClick={() => setOpenModal(true)}
        />
      </div>
    </>
  );
};

export default Header;
