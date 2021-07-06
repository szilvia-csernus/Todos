import React from 'react';


class TodoDetailView extends React.Component {
    
    render() {
        const {todo, toggleTodo, removeTodo } = this.props;
        return (
            <div>
                <p className="todo-details">{ todo.body }</p>
                <button onClick={toggleTodo}>{todo.done ? "Undo" : "Done"}</button>
                <button onClick={() => removeTodo(todo)}>Delete Todo</button>
            </div>
        );
    }
}

export default TodoDetailView;