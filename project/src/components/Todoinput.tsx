interface Props {
    value:string;
    onChange:(v:string)=>void;
    onAdd: () => void;
}

export default function TodoInput({value, onChange, onAdd}: Props)
{
    return (
        <div className="flex gap-2mt-4">
            <input
            value={value}
            onChange={e => onChange(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="Add todo..."/>

            <button onClick={onAdd} className="px-4 py-2 bg-blue-500 text-white rounded">
                Add
            </button>    
        </div>
    );
}