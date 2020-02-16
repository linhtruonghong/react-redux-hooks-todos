import React from 'react';

const TodosContext = React.createContext({
    todos: [
        {
            id: 1, text: "Eat breakfirst", complete: false
        },
        {
            id: 2, text: "Eat Laundry", complete: false
        },
        {
            id: 3, text: "Finish project", complete: true
        }
    ],
    currentTodo: {}
});

export default TodosContext;