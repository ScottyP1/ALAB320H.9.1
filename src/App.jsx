import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import TodoItem from "./components/TodoItem";
const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
];


function App() {
  const [todos, setTodos] = useState(initialState);
  const [input, setInput] = useState("");


  const handleAdd = (e) => {
    if (!input.length) return alert("Please enter a todo");

    setTodos((prev) => [...prev, { id: uuidv4(), title: input, complete: false }]);
    setInput("");
  };

  const handleSave = (id, title) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter(item => item.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="p-12">
      <header className="flex flex-col items-center gap-6">
        <h1 className="text-4xl">Todo List</h1>
        <div className="flex gap-2">
          <input placeholder="Add Task" className="border p-2 rounded-lg" onChange={(e) => setInput(e.target.value)} value={input} />
          <button className="bg-gray-300 hover:bg-gray-400 px-4 rounded-lg" onClick={handleAdd}>Add</button>
        </div>
      </header>

      <main className="border mt-12 p-4 rounded-lg flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleSave={handleSave}
            handleDelete={handleDelete}
            handleToggleComplete={handleToggleComplete}
          />
        ))}
      </main>
    </div>
  )
}

export default App
