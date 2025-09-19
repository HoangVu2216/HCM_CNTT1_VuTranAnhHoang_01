import { ToDo } from "../types/todo";
import Todoitem from "./Todoitem";

interface Props{
    todos: Todo[];
    onToggle: (id: number) => void;
    onUpdate: (id: number, text: string) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({todos, onToggle, onUpdate, onDelete }: Props) {
    return (
        <ul className="mt-4">
            {todos.map(t=>(
                <Todoitem
                key={t.id}
                todo={t}
                onToggle={onToggle}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />    
            ))}
        </ul>
    );
}
