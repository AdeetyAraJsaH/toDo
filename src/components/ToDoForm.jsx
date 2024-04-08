import React, { useState } from "react";
import { useTodo } from "../context/ToDoContext";

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()
    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ id: Date.now(), ToDo: todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <div className="w-full inline-flex">
                <input
                    value={todo}
                    onChange={(e) => (setTodo(e.target.value))}
                    type="text"
                    placeholder="Write Todo..."
                    className=" w-full h-10 border border-black/10 rounded-l-full px-3 outline-none duration-150 bg-white/20 py-1.5 my-2 placeholder:text-[#866a228e]
                dark:placeholder:text-[#cdc5b0a4]"
                />
                <button type="submit" className="h-11 rounded-r-full my-1.5 px-3 py-1 bg-[#d1900ddf] text-white shrink-0
              dark:bg-[#dfc1eaa3]">
                    Add
                </button>
            </div>
        </form>
    );
}

export default TodoForm;

