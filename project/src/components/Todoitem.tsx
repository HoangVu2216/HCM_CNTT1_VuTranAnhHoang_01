import { Todo } from "../types/todo";

interface Props{
    todo: Todo;

    onToggle: (id: number) => void;
    onUpdate: (id: number, text: string) => void;
    onDelete: (id: number) => void;
}

export default function Todoitem ({todo, onToggle, onUpdate, onDelete}:Props) {
    return (
        <li className="flex justify-between items-center p-2 border-b">
            <span
                onClick={() => onToggle(Todo.id)}
                className={`flex-1 cursor-poniter ${todo.completed ?
                    "line-through text-gray-500" : ""}`}
            >
                {todo.text}
            </span>

            <button
                onClick={() => {
                    const newText = prompt(Edit, todo);
                } } />:",todo.text);
            if(newText) onUpdate (todo.id, newText);
            className="px-2 bg-yellow-400 rounded"
            >
            Edit
        </button><button
            onClick={() => onDelete(Todo.id)} className="px-2 bg-red-500 text-white rounded">
                Del
            </button>
            </li>
    );
}
