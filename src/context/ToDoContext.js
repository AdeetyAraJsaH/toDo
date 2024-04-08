import { createContext, useContext } from "react";
export const TodoContext = createContext({
    themeMode: "light",
    toggleTheme: (mode) => { },
    todos: [
        {
            id: 1,
            ToDo: "Task 1",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
})
export const useTodo = () => {
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;