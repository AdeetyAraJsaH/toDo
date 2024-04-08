# React-Vite ToDo App with Dark Mode

#### This is a simple ToDo app built using React and Vite. It allows users to add, edit, and delete tasks. The app also features a dark mode UI for better readability during nighttime.

## Features

1. **Add Task:**
   - Users can add new tasks by typing in the input field and clicking the "Add" button.
   - The task will be added to the list of tasks.

2. **Edit Task:**
   - Users can edit existing tasks by clicking on the task text.
   - An editable input field will appear, allowing users to modify the task.
   - Click outside the input field or press Enter to save the changes.

3. **Delete Task:**
   - Users can delete a task by clicking the delete button (usually represented by an "X" icon) next to the task.
   - The task will be removed from the list.

4. **Dark Mode:**
   - The app features a dark mode UI for better visibility in low-light conditions.
   - Users can toggle between light and dark mode using a switch or button.

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/AdeetyAraJsaH/toDo.git
   ```

2. Navigate to the project directory:
   ```
   cd toDo
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Technologies Used

- React
- Vite (for fast development setup)
- Context API (for managing state)
- Tailwind CSS (for styling)
- LocalStorage (for data persistence)

## Folder Structure

```
toDo/
├── src/
│   ├── components/
│   │   ├── ToDoForm.jsx
│   │   ├── ToDoItem.jsx
│   │   ├── ThemeSwitch.jsx
│   │   └── Header/
│   │        ├── Header.jsx
│   │        └── ...
│   ├── context/
│   │   ├── TodoContext.js
│   │   └── ...
│   ├── styles/
│   │   ├── tailwind.css
│   │   └── ...
│   ├── App.css
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── public/
│   ├── icon.svg
│   └── ...
├── index.html
├── package.json
└── README.md
```

## Contributing

#### Feel free to contribute to this project by opening issues or submitting pull requests. Let's make this ToDo app even better!