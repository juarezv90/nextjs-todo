import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import TodoCard from "./TodoCard";
import { deleteField, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import useFetchTodos from "@/hooks/fetchTodos";
import { AiOutlineLoading } from "react-icons/ai";

const UserDashboard = () => {
  const { userInfo, currentUser } = useAuth();
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState("");
  const [edittedValue, setEdittedValue] = useState("");
  const { todos, loading, error, setTodos } = useFetchTodos();

  async function handleAddTodo() {
    if (!todo) {
      return;
    }
    const newKey =
      Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1;
    setTodos({ ...todos, [newKey]: todo });
    setTodo("");
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        todos: {
          [newKey]: todo,
        },
      },
      { merge: true }
    );
  }

  async function handleEditTodo() {
    if (!edittedValue) {
      return;
    }
    const newKey = edit;
    setTodos({ ...todos, [newKey]: edittedValue });
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        todos: {
          [newKey]: edittedValue,
        },
      },
      { merge: true }
    );
    setEdit(null);
    setEdittedValue("");
  }

  function handleDelete(todoKey) {
    return async () => {
      const tempObj = {...todos};
      delete tempObj[todoKey];
      setTodos(tempObj);
      const userRef = doc(db, "users", currentUser.uid);
      await setDoc(
        userRef,
        {
          todos: {
            [todoKey]: deleteField(),
          },
        },
        { merge: true }
      );
    };
  }

  function handleAddEdit(todoKey) {
    return () => {
      setEdit(todoKey);
      setEdittedValue(todos[todoKey]);
    };
  }

  return (
    <div className="w-full max-w-[65ch] flex mx-auto flex-col gap-3 sm:gap-5">
      <div className="flex items-stretch">
        <input
          type="text"
          placeholder="Enter Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="outline-none p-2 text-base sm:text-lg text-slate-900 flex-1"
        />
        <button
          onClick={handleAddTodo}
          className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-60"
        >
          ADD
        </button>
      </div>
      {userInfo && loading && (
        <div className="flex-1 flex flex-col justify-center items-center gap-2">
          <AiOutlineLoading className="animate-spin text-[40px]" />
          <p className="text-lg">Loading...</p>
        </div>
      )}
      {userInfo && !loading && (
        <>
          {Object.keys(todos).map((todo, i) => {
            return (
              <TodoCard
                key={i}
                handleAddEdit={handleAddEdit}
                edit={edit}
                todoKey={todo}
                edittedValue={edittedValue}
                setEdittedValue={setEdittedValue}
                handleEditTodo={handleEditTodo}
                handleDelete={handleDelete}
              >
                {todos[todo]}
              </TodoCard>
            );
          })}
        </>
      )}
    </div>
  );
};

export default UserDashboard;
