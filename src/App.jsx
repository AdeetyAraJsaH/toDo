import { useEffect, useState } from 'react'
import { TodoProvider } from './context/ToDoContext'
import ThemeSwithLogo from './components/ThemeSwitch'
import TodoForm from './components/ToDoForm'
import TodoItem from './components/ToDoItem'
import Header from './components/Header/Header' 

// import './App.css'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const toggleTheme = (mode) => {
    setThemeMode(mode)
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  const [todos, setTodos] = useState([])
  const addTodo = (toDo) => {
    setTodos((prev) => [{ ...toDo }, ...prev])
  }
  const updateTodo = (id, toDo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? toDo : prevTodo)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) setTodos(todos)
  }, [todos])
  return (
    <TodoProvider value={{ themeMode, toggleTheme, todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <Header/>
      <div className="bg-[#f2deb0] min-h-screen py-2 dark:bg-[#453f31]">
        <div className="w-full max-w-2xl mx-auto shadow-md shadow-[#e1cca0] rounded-lg px-4 py-3 text-[#614e20] dark:text-[#ca94f0] dark:shadow-[#332e2e]">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2"> Your Todos</h1>
          {/* <ThemeSwithLogo /> */}
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */
              todos.map((toDo) => {
                return <div className="w-full" key={toDo.id}>
                  <TodoItem todo={toDo} />
                </div>
              })

            }
          </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
