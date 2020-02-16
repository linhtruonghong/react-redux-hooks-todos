import React, {useState, useContext, useEffect} from "react";
import TodosContext from "../context";

export default function TodoForm() {
    const [todo, setTodo] = useState("");
    const {state: {currentTodo = {}}, dispatch} = useContext(TodosContext);

    const handleSubmit = event => {
        event.preventDefault();

        if (currentTodo.text) {
            dispatch({type: "UPDATE_TODO", payload: todo})
        } else {
            dispatch({type: "ADD_TODO", payload: todo});
        }
        setTodo("");

    };

    useEffect(() => {
        if (currentTodo.text) {
            setTodo(currentTodo.text);
        } else {
            setTodo("");
        }
    }, [currentTodo.id, currentTodo.text]);

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <input
                value={todo}
                type="text"
                className="border-black border-solid border-2"
                onChange={event => setTodo(event.target.value)}
            />
        </form>
    )
}