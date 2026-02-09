import { useState } from "react";

const TodoItem = ({ todo, handleSave, handleDelete, handleToggleComplete }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [input, setInput] = useState(todo.title);

    return (
        <div className="border flex gap-6 p-4 rounded-lg">
            <div>
                {isEdit ? (
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="px-2 py-1 border rounded-lg"
                    />
                ) : (
                    <h2>
                        <input
                            className="mx-4"
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(todo.id)}
                        /> {todo.title}
                    </h2>
                )}
            </div>
            <div className="flex gap-4 ml-auto">
                {isEdit ? <button className="px-2 rounded-lg border" onClick={() => { handleSave(todo.id, input); setIsEdit(false); }} >Save</button>
                    :
                    <>
                        <button className="px-2 rounded-lg border" onClick={() => setIsEdit(true)}>Edit</button>
                        <button
                            className={`px-2 rounded-lg ${todo.completed ? 'bg-red-500' : 'bg-gray-300'} text-white`}
                            onClick={() => handleDelete(todo.id)}
                            disabled={!todo.completed}
                        >
                            Delete
                        </button>
                    </>
                }

            </div>

        </div >
    )
}



export default TodoItem;
