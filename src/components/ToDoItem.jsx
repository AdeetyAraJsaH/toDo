import React, { useState } from "react";
import { useTodo } from "../context/ToDoContext";


function TodoItem({ todo }) {
    const [editEnable, setEditEnable] = useState()
    const [todoTask, setTodoTask] = useState(todo.ToDo) //todo is an object and ToDo is property of todo object 
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()
    const editTodo = () => {
        updateTodo(todo.id, { ...todo, ToDo: todoTask })
        setEditEnable(false)
    }
    const toggleCompletion = () => {
        toggleComplete(todo.id)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-[#321a3d] ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"} 
            dark:text-[#e0d9e6] ${todo.completed ? "dark:bg-[#3c4f2b]" : "dark:bg-[#573a6e]"}`
            }
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompletion}
            />
            <input
                type="text"
                value={todoTask}
                className={`border outline-none w-full bg-transparent rounded-lg ${editEnable ? "border-[#be9595] px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                onChange={(e) => (setTodoTask(e.target.value))}
                readOnly={!editEnable}
            />
            {/* Edit, Save Button */}
            <button
                className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-200 shrink-0 hover:${!todo.completed ? "text-lg duration-100 hover:bg-gray-50 " : "none"} disabled:opacity-50`}
                onClick={() => {
                    if (todo.completed) return;

                    if (editEnable) {
                        editTodo();
                    } else setEditEnable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {editEnable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-200 hover:bg-gray-50 shrink-0 hover:text-lg duration-100"
                onClick={() => deleteTodo(todo.id)}
            >
                🗑️
            </button>
        </div>
    );
}
//
export default TodoItem;
