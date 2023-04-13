import React from "react";
import { BsFillTrash3Fill, BsPencil, BsCheckLg } from "react-icons/bs";

export default function TodoCard(props) {
  const { children, edit, handleAddEdit, edittedValue, setEdittedValue, todoKey, handleEditTodo, handleDelete } = props;
  return (
    <div
      className="border relative border-white p-2 flex
     items-stretch text-xl"
    >
      <div className="flex-1">
        {!(edit === todoKey) ? <>{children}</> : <input className="bg-inherit text-white p-2 outline-none flex-1" value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)}  />}
       </div>
      <div className="flex items-center">
        {!(edit === todoKey) ? <BsPencil onClick={handleAddEdit(todoKey)} className="mx-2 duration-300 hover:rotate-45 cursor-pointer"/> : <BsCheckLg onClick={handleEditTodo} className="mx-2 duration-300 hover:scale-150 cursor-pointer"/>}
        <BsFillTrash3Fill className="mx-2 duration-300 hover:scale-125 cursor-pointer" onClick={handleDelete(todoKey)}/>
      </div>
    </div>
  );
}
