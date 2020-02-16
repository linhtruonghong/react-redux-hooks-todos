import React, {useState, useContext, useEffect} from "react";
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import TodosContext from "../context";

export default function TodoForm() {
    const [todo, setTodo] = useState("");
    const {state: {currentTodo = {}}, dispatch} = useContext(TodosContext);

    const handleSubmit = async event => {
        event.preventDefault();

        if (currentTodo.text) {
            const response = await axios.patch(`https://hooks-api-kappa.now.sh/todos/${currentTodo.id}`, {
                text: todo
            });
            dispatch({type: "UPDATE_TODO", payload: response.data})
        } else {
            const response = await axios.post('https://hooks-api-kappa.now.sh/todos/', {
                id: uuidv4(),
                text: todo,
                complete: false
            });
            dispatch({type: "ADD_TODO", payload: response.data});
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